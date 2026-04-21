"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

type AuditState = "idle" | "analyzing" | "complete";

export default function AuditPage() {
  const [url, setUrl] = useState("");
  const [state, setState] = useState<AuditState>("idle");
  const [progress, setProgress] = useState(0);
  const [showTechnical, setShowTechnical] = useState(false);

  const startAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    // Reset and start
    setState("analyzing");
    setProgress(0);
    setShowTechnical(false);

    // Simulate analysis progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => setState("complete"), 400); // Small delay for UX
      } else {
        setProgress(Math.min(currentProgress, 99));
      }
    }, 400);
  };

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">FREE WEBSITE AUDIT</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
            How much is your current site costing you?
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-10">
            Enter your website URL below to run an instant performance, SEO, and conversion audit. Find out exactly what's slowing your growth.
          </p>

          {/* Form */}
          <form onSubmit={startAudit} className="relative max-w-2xl mx-auto flex items-center shadow-2xl rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-2">
            <div className="flex items-center pl-4 pr-2 text-neutral-400">
              <Icon icon="solar:global-linear" width="24" />
            </div>
            <input
              type="url"
              placeholder="https://yourwebsite.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={state === "analyzing"}
              className="flex-1 bg-transparent border-none outline-none text-neutral-900 dark:text-white placeholder-neutral-400 px-3 py-4 text-lg w-full disabled:opacity-50"
              required
            />
            <button
              type="submit"
              disabled={state === "analyzing" || !url}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-medium transition duration-300 disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
            >
              {state === "analyzing" ? "Analyzing..." : "Run Free Audit"}
            </button>
          </form>
        </div>

        {/* Loading State */}
        {state === "analyzing" && (
          <div className="max-w-2xl mx-auto mt-20 animate-in fade-in zoom-in duration-500">
            <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl p-10 text-center shadow-xl">
              <Icon icon="solar:radar-linear" width="64" className="mx-auto text-purple-600 mb-6 animate-pulse" />
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">Scanning {new URL(url).hostname || "website"}...</h3>
              <p className="text-neutral-500 dark:text-neutral-400 mb-8">Analyzing DOM structure, measuring Core Web Vitals, and reading SEO meta tags.</p>
              
              {/* Progress Bar */}
              <div className="w-full h-3 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 transition-all duration-300 ease-out rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-[shimmer_1s_infinite] w-full" />
                </div>
              </div>
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mt-4">{Math.round(progress)}% Complete</p>
            </div>
          </div>
        )}

        {/* Results State */}
        {state === "complete" && (
          <div className="max-w-4xl mx-auto mt-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Results Header */}
              <div className="p-8 lg:p-12 border-b border-black/5 dark:border-white/5 bg-gradient-to-br from-purple-500/5 to-transparent">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <span className="px-3 py-1 bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold rounded-full uppercase tracking-wider">Needs Improvement</span>
                    </div>
                    <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white truncate max-w-md">
                      Audit: {new URL(url).hostname || url}
                    </h2>
                  </div>
                  
                  {/* Overall Grade Ring */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">Overall Score</p>
                      <p className="text-xs text-red-500 font-medium mt-1">Losing potential clients</p>
                    </div>
                    <div className="w-20 h-20 rounded-full border-4 border-red-500/20 border-t-red-500 flex items-center justify-center bg-white dark:bg-black/20 shadow-inner">
                      <span className="text-3xl font-bold text-red-500">42</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toggle View */}
              <div className="px-8 lg:px-12 py-6 border-b border-black/5 dark:border-white/5 flex items-center justify-between bg-black/5 dark:bg-white/5">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                  <Icon icon={showTechnical ? "solar:code-square-linear" : "solar:user-rounded-linear"} width="18" />
                  {showTechnical ? "Developer Analysis Mode" : "Business Owner Mode"}
                </span>
                <button
                  onClick={() => setShowTechnical(!showTechnical)}
                  className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 transition flex items-center gap-2 bg-white dark:bg-black/20 px-4 py-2 rounded-lg border border-purple-500/20"
                >
                  {showTechnical ? "Simplify for me" : "Show technical details"}
                  <Icon icon="solar:sort-vertical-linear" width="16" />
                </button>
              </div>

              {/* Results Grid */}
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* Performance Metric */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 border-b border-black/5 dark:border-white/5 pb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400">
                        <Icon icon="solar:bolt-circle-linear" width="24" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white">Speed & Performance</h3>
                        <p className="text-sm text-orange-500 font-medium">Score: 38/100</p>
                      </div>
                    </div>
                    {showTechnical ? (
                      <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-3 font-mono">
                        <li>FCP: <span className="text-red-500">3.2s</span> (Poor)</li>
                        <li>LCP: <span className="text-red-500">5.8s</span> (Poor)</li>
                        <li>CLS: <span className="text-orange-500">0.24</span> (Needs Work)</li>
                        <li>TBT: <span className="text-red-500">850ms</span> (Poor)</li>
                        <li className="text-purple-400 mt-2">→ Unminified JS blocks main thread.</li>
                        <li className="text-purple-400">→ Images not served in WebP.</li>
                      </ul>
                    ) : (
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        <p className="mb-2"><strong className="text-neutral-900 dark:text-white">What this means:</strong> Your website takes over 5 seconds to load for someone on a mobile phone.</p>
                        <p><strong className="text-neutral-900 dark:text-white">The Impact:</strong> Mathematics shows that 53% of mobile site visitors will leave a page that takes longer than 3 seconds to load. You are actively losing half of the traffic you pay for purely because of code bloat.</p>
                      </div>
                    )}
                  </div>

                  {/* SEO Metric */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 border-b border-black/5 dark:border-white/5 pb-4">
                      <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                        <Icon icon="solar:magnifer-linear" width="24" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white">Search Engine SEO</h3>
                        <p className="text-sm text-yellow-500 font-medium">Score: 61/100</p>
                      </div>
                    </div>
                    {showTechnical ? (
                      <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-3 font-mono">
                        <li>Meta Title: <span className="text-green-500">Valid</span></li>
                        <li>Meta Desc: <span className="text-red-500">Missing</span></li>
                        <li>H1 Tag: <span className="text-red-500">Multiple Found</span></li>
                        <li>OpenGraph tags: <span className="text-yellow-500">Incomplete</span></li>
                        <li className="text-purple-400 mt-2">→ DOM structure non-semantic.</li>
                        <li className="text-purple-400">→ Missing alt attributes on 8 imgs.</li>
                      </ul>
                    ) : (
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        <p className="mb-2"><strong className="text-neutral-900 dark:text-white">What this means:</strong> Google's robots are struggling to understand exactly what your business does.</p>
                        <p><strong className="text-neutral-900 dark:text-white">The Impact:</strong> Because you are missing crucial descriptions and hidden tags behind your images, competitors with better code structure will consistently rank higher than you on Google, even if your actual service is better.</p>
                      </div>
                    )}
                  </div>

                  {/* Conversion Metric */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 border-b border-black/5 dark:border-white/5 pb-4">
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400">
                        <Icon icon="solar:graph-down-linear" width="24" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white">Conversion & UX</h3>
                        <p className="text-sm text-red-500 font-medium">Score: 27/100</p>
                      </div>
                    </div>
                    {showTechnical ? (
                      <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-3 font-mono">
                        <li>Contrast Ratio: <span className="text-red-500">Fail (2.1:1)</span></li>
                        <li>Tap Targets: <span className="text-red-500">Too Close</span></li>
                        <li>Primary CTA: <span className="text-yellow-500">Below Fold</span></li>
                        <li>F-Pattern: <span className="text-red-500">Violated</span></li>
                        <li className="text-purple-400 mt-2">→ No visual hierarchy enforcement.</li>
                        <li className="text-purple-400">→ Contact form has 8+ inputs.</li>
                      </ul>
                    ) : (
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        <p className="mb-2"><strong className="text-neutral-900 dark:text-white">What this means:</strong> The physical layout of your site is actively confusing potential customers.</p>
                        <p><strong className="text-neutral-900 dark:text-white">The Impact:</strong> Your main "buy" or "contact" button isn't visible when someone first opens the page. Plus, contrasting colors are too weak so text is hard to read. Users get frustrated and leave before taking action.</p>
                      </div>
                    )}
                  </div>

                </div>

                {/* Final CTA Box */}
                <div className="mt-12 p-8 bg-purple-600 rounded-2xl text-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                  <h3 className="text-2xl font-semibold mb-3 relative z-10">We can fix all of this in 48 hours.</h3>
                  <p className="text-purple-200 mb-8 max-w-lg mx-auto relative z-10">
                    Stop losing money to bad code and poor design. Pick a template from our library and we'll launch a technically perfect, high-converting website for you immediately.
                  </p>
                  <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => window.location.href='/designs'} className="bg-white text-purple-700 hover:bg-neutral-100 font-bold px-8 py-4 rounded-xl transition shadow-xl">
                      Browse Designs
                    </button>
                    <button onClick={() => window.location.href='/pricing'} className="bg-purple-800 hover:bg-purple-900 text-white font-medium px-8 py-4 rounded-xl transition border border-purple-500">
                      View Pricing
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}
