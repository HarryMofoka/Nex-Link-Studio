export interface AuditResult {
  overall: number;
  performance: {
    score: number;
    fcp: string;
    lcp: string;
    cls: string;
    tbt: string;
    warnings: string[];
  };
  seo: {
    score: number;
    validTitle: boolean;
    validMetaDesc: boolean;
    validAlts: boolean;
    validStatus: boolean;
    warnings: string[];
  };
  bestPractices: {
    score: number;
    isHttps: boolean;
    noVuln: boolean;
    errorsInConsole: boolean;
    warnings: string[];
  };
}

/**
 * Runs a backend audit using the Google PageSpeed Insights API
 * @param url The target website URL
 * @returns The parsed and sanitized audit result
 */
export async function runSiteAudit(url: string): Promise<AuditResult> {
  // Ensure URL has protocol
  const targetUrl = url.startsWith("http") ? url : `https://${url}`;

  // Note: In production you would append `&key=YOUR_API_KEY` to this string
  const psiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
    targetUrl
  )}&category=performance&category=seo&category=best-practices&strategy=mobile`;

  const response = await fetch(psiUrl);
  
  if (!response.ok) {
    const errorData = await response.json();
    console.error("PageSpeed API Error:", errorData);
    throw new Error("Failed to analyze the website. The URL might be unreachable or blocking bots.");
  }

  const data = await response.json();

  // Extract necessary metrics safely
  const lighthouse = data.lighthouseResult;

  // Scores are returned as decimals (e.g., 0.92 = 92/100)
  const perfScore = Math.round((lighthouse?.categories?.performance?.score || 0) * 100);
  const seoScore = Math.round((lighthouse?.categories?.seo?.score || 0) * 100);
  const bpScore = Math.round((lighthouse?.categories?.["best-practices"]?.score || 0) * 100);

  // Calculate Overall Score (Average)
  const overallScore = Math.round((perfScore + seoScore + bpScore) / 3);

  // Extract detailed metrics
  const audits = lighthouse?.audits || {};
  
  // Performance Metrics
  const fcp = audits["first-contentful-paint"]?.displayValue || "N/A";
  const lcp = audits["largest-contentful-paint"]?.displayValue || "N/A";
  const cls = audits["cumulative-layout-shift"]?.displayValue || "N/A";
  const tbt = audits["total-blocking-time"]?.displayValue || "N/A";
  
  // Developer hints array
  const perfWarnings = [];
  if (audits["render-blocking-resources"]?.score < 1) perfWarnings.push("Render-blocking resources found");
  if (audits["uses-webp-images"]?.score < 1) perfWarnings.push("Images not in next-gen formats (WebP/AVIF)");
  if (audits["unminified-javascript"]?.score < 1) perfWarnings.push("Unminified JS blocks main thread");
  if (perfWarnings.length === 0) perfWarnings.push("Site is well-optimized mechanically");

  // SEO Metrics
  const hasMetaDesc = audits["meta-description"]?.score === 1;
  const hasValidTitle = audits["document-title"]?.score === 1;
  const hasValidStatus = audits["http-status-code"]?.score === 1;
  const hasImageAlts = audits["image-alt"]?.score === 1;
  
  const seoWarnings = [];
  if (!hasMetaDesc) seoWarnings.push("Meta description missing or empty");
  if (!hasValidTitle) seoWarnings.push("Document title is invalid or missing");
  if (!hasImageAlts) seoWarnings.push("Missing alt attributes on images");
  if (seoWarnings.length === 0) seoWarnings.push("Basic SEO tags established correctly");

  // Best Practices Metrics
  const isHttps = audits["is-on-https"]?.score === 1;
  const noVuln = audits["no-vulnerable-libraries"]?.score === 1;
  const errorsInConsole = audits["errors-in-console"]?.score === 0;

  const bpWarnings = [];
  if (!isHttps) bpWarnings.push("Site is not securely served over HTTPS");
  if (!noVuln) bpWarnings.push("Vulnerable front-end libraries detected");
  if (errorsInConsole) bpWarnings.push("Browser console is logging runtime errors");
  if (bpWarnings.length === 0) bpWarnings.push("Site follows standard web best practices");

  return {
    overall: overallScore,
    performance: {
      score: perfScore,
      fcp,
      lcp,
      cls,
      tbt,
      warnings: perfWarnings
    },
    seo: {
      score: seoScore,
      validTitle: hasValidTitle,
      validMetaDesc: hasMetaDesc,
      validAlts: hasImageAlts,
      validStatus: hasValidStatus,
      warnings: seoWarnings
    },
    bestPractices: {
      score: bpScore,
      isHttps,
      noVuln,
      errorsInConsole,
      warnings: bpWarnings
    }
  };
}
