"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

// --- Pricing Base Constants (ZAR) ---
const PRICES = {
  landing: 3500,
  website: 6500,
  ecom: 12000,
  app: 65000,
  page: 500,
  features: {
    seo: 2500,
    crm: 3500,
    perf: 4000,
    webgl: 8500,
    wa: 1500
  },
  rush: 1.5
};

const SYSTEM_BUILDS = [
  {
    name: "Starter Build",
    tagline: "Foundational online presence.",
    price: "R 4,500+",
    highlighted: false,
    features: ["1-3 Page Layout", "Mobile Responsive", "Basic SEO Setup", "WhatsApp Integration", "Fast Turnaround"],
  },
  {
    name: "Growth System",
    tagline: "Proper UX/UI structuring.",
    price: "R 8,000+",
    highlighted: true,
    features: ["4-8 Custom Pages", "Lead Capture Forms", "Google Analytics Init", "Advanced Metadata Setup", "Multiple Revisions"],
  },
  {
    name: "Conversion Ecosystem",
    tagline: "Built for paid traffic.",
    price: "R 20,000+",
    highlighted: false,
    features: ["Tailored User Journeys", "Dedicated Landing Pages", "Automated Email Flows", "CRM Integrations", "Performance Dashboards"],
  },
  {
    name: "Flagship Experience",
    tagline: "Full-scale digital partnership.",
    price: "R 65,000+",
    highlighted: false,
    features: ["Custom Mobile App Dev", "Advanced WebGL/3D UI", "Payment Gateway Architecture", "Deep Discovery Phases", "Post-Launch Optimization"],
  }
];

const RETAINER_PLANS = [
  {
    name: "Maintenance Protocol",
    price: "R 950",
    desc: "Keep the exact system we built pristine and secure.",
    features: ["Premium Managed Hosting", "Daily Security Backups", "Technical Issue Resolution", "SSL & Core Updates"],
  },
  {
    name: "Growth Engine",
    price: "R 3,500",
    desc: "Active optimization to push you higher in the market.",
    features: ["Everything in Maintenance", "Ongoing local SEO logic", "Minor Page/Content Updates", "Speed & Performance Tuning"],
  },
  {
    name: "Digital Partner",
    price: "R 9,500+",
    desc: "Continuous strategic input and full technical autonomy.",
    features: ["Everything in Growth", "New Landing Page Creation", "Deep Analytics/CRO Audits", "Priority Development Hours"],
  }
];

export default function PricingPage() {
  // Estimator State
  const [projectType, setProjectType] = useState<"landing" | "website" | "ecom" | "app">("website");
  const [pages, setPages] = useState<number>(4);
  
  // Toggles
  const [opts, setOpts] = useState({
    seo: false,
    crm: false,
    perf: false,
    webgl: false,
    wa: false,
    rush: false
  });

  // Computed Price State
  const [estimatedTotal, setEstimatedTotal] = useState<number>(0);

  useEffect(() => {
    let total = PRICES[projectType];
    
    // Add Pages (for non-apps, usually apps don't scale by pure page counts linearly at R500 but we'll include it for simplicity)
    if (pages > 1) {
      total += (pages - 1) * PRICES.page;
    }

    // Add Features
    if (opts.seo) total += PRICES.features.seo;
    if (opts.crm) total += PRICES.features.crm;
    if (opts.perf) total += PRICES.features.perf;
    if (opts.webgl) total += PRICES.features.webgl;
    if (opts.wa) total += PRICES.features.wa;

    // Apply Rush Multiplier
    if (opts.rush) total = Math.round(total * PRICES.rush);

    setEstimatedTotal(total);
  }, [projectType, pages, opts]);

  const toggleOpt = (key: keyof typeof opts) => {
    setOpts(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const formatZAR = (value: number) => {
    return new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
  };

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        
        {/* Universal Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">
            DIGITAL INVESTMENT
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.05]">
            We design conversion systems.<br />Not websites.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Build your exact requirements below to see a real-time estimate for your project, strictly adjusted for the South African market.
          </p>
        </div>

        {/* INTERACTIVE ESTIMATOR MODULE */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Inputs */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Category Selection */}
              <div className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">1. Platform Base</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "landing", icon: "solar:rocket-linear", title: "Landing Page", desc: "Single high-converting funnel", base: PRICES.landing },
                    { id: "website", icon: "solar:window-frame-linear", title: "Pro Website", desc: "Multi-page business presence", base: PRICES.website },
                    { id: "ecom", icon: "solar:cart-large-linear", title: "E-Commerce", desc: "Online store & Payments", base: PRICES.ecom },
                    { id: "app", icon: "solar:smartphone-linear", title: "Mobile App", desc: "iOS/Android application", base: PRICES.app }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setProjectType(cat.id as any)}
                      className={`flex flex-col text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                        projectType === cat.id 
                        ? "border-purple-600 bg-purple-600/5 shadow-[0_0_20px_rgba(52,25,224,0.15)]" 
                        : "border-black/5 dark:border-white/5 bg-white dark:bg-white/5 hover:border-purple-400/50"
                      }`}
                    >
                      <div className="flex items-start justify-between w-full mb-4">
                        <Icon icon={cat.icon} width="28" className={`${projectType === cat.id ? "text-purple-600" : "text-neutral-500"}`} />
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${projectType === cat.id ? "bg-purple-600/10 text-purple-700 dark:text-purple-400" : "bg-black/5 dark:bg-white/5 text-neutral-500"}`}>
                          From {formatZAR(cat.base)}
                        </span>
                      </div>
                      <span className={`font-semibold mb-1 ${projectType === cat.id ? "text-neutral-900 dark:text-white" : "text-neutral-700 dark:text-neutral-300"}`}>{cat.title}</span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">{cat.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Page Count Slider */}
              <div className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-3xl p-8 shadow-sm">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">2. Scope (Screens/Pages)</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Estimate the structural size of the project.</p>
                  </div>
                  <div className="bg-purple-600/10 text-purple-700 dark:text-purple-400 px-4 py-2 rounded-xl border border-purple-600/20 font-bold text-xl">
                    {pages} {pages === 1 ? "page" : "pages"}
                  </div>
                </div>
                
                <div className="relative pt-2 pb-6">
                  <input 
                    type="range" min="1" max="30" value={pages} onChange={(e) => setPages(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-600/20"
                  />
                  <div className="flex justify-between text-xs text-neutral-400 mt-4 px-1 font-medium">
                    <span>1</span>
                    <span>15</span>
                    <span>30+</span>
                  </div>
                </div>
              </div>

              {/* Conversion & Tech Features Toggle */}
              <div className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">3. System Capabilities</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: "seo", icon: "solar:magnifer-linear", title: "Advanced SEO Config", desc: "Schema, speed indexing, on-page optimization.", price: PRICES.features.seo },
                    { id: "crm", icon: "solar:users-group-rounded-linear", title: "CRM Lead Capture", desc: "HubSpot/Zoho integrations + Email flows.", price: PRICES.features.crm },
                    { id: "perf", icon: "solar:bolt-circle-linear", title: "Performance Engine", desc: "100 Lighthouse score & LCP < 1.5s guaranteed.", price: PRICES.features.perf },
                    { id: "wa", icon: "solar:chat-line-linear", title: "WhatsApp Setup", desc: "Click-to-chat business integration.", price: PRICES.features.wa },
                    { id: "webgl", icon: "solar:magic-stick-3-linear", title: "Interactive 3D UI", desc: "Immersive WebGL & Physics scrolling.", price: PRICES.features.webgl },
                    { id: "rush", icon: "solar:clock-circle-linear", title: "Rush Delivery (48H)", desc: "Priority timeline overnight build (+50%).", price: "Multi" }
                  ].map((feat) => (
                    <label key={feat.id} className={`flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer ${opts[feat.id as keyof typeof opts] ? "border-purple-600 bg-purple-600/5" : "border-black/5 dark:border-white/5 bg-white dark:bg-white/5 hover:border-purple-400/30"}`}>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <Icon icon={feat.icon} width="16" className={opts[feat.id as keyof typeof opts] ? "text-purple-600" : "text-neutral-500"} />
                            <span className={`text-sm font-semibold ${opts[feat.id as keyof typeof opts] ? "text-neutral-900 dark:text-white" : "text-neutral-700 dark:text-neutral-300"}`}>{feat.title}</span>
                          </div>
                        </div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 mb-2">{feat.desc}</p>
                        <span className="text-[10px] uppercase font-bold text-neutral-400">
                          {feat.price === "Multi" ? "+50% Total" : `+${formatZAR(feat.price as number)}`}
                        </span>
                      </div>
                      <div className={`w-10 h-5 mt-1 shrink-0 rounded-full relative flex items-center p-1 transition-colors ${opts[feat.id as keyof typeof opts] ? "bg-purple-600" : "bg-neutral-200 dark:bg-neutral-800"}`}>
                        <input type="checkbox" className="hidden" checked={opts[feat.id as keyof typeof opts]} onChange={() => toggleOpt(feat.id as keyof typeof opts)} />
                        <div className={`w-3 h-3 rounded-full bg-white shadow-sm transition-transform duration-300 ${opts[feat.id as keyof typeof opts] ? "translate-x-5" : "translate-x-0"}`} />
                      </div>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Summary Panel */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 rounded-3xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-950/80 backdrop-blur-2xl">
                
                {/* Panel Header */}
                <div className="bg-gradient-to-br from-purple-800 to-black p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                  <h3 className="text-sm font-semibold tracking-wider uppercase text-purple-300 mb-2 relative z-10">Total Development Investment</h3>
                  <div className="flex items-baseline gap-1 relative z-10">
                    <span className="text-5xl font-bold tracking-tight">{formatZAR(estimatedTotal)}</span>
                  </div>
                  <p className="text-neutral-400 text-xs mt-3 relative z-10">Values are initial estimates identifying project scope. Formal proposals are generated post-discovery.</p>
                </div>

                {/* Breakdown List */}
                <div className="p-8">
                  <h4 className="text-xs font-semibold text-neutral-500 mb-4 uppercase tracking-wider">Line Item Summary</h4>
                  <ul className="space-y-3 mb-8">
                    <li className="flex justify-between items-center text-sm border-b border-black/5 dark:border-white/5 pb-2">
                      <span className="text-neutral-700 dark:text-neutral-300 capitalize">{projectType} Base</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">{formatZAR(PRICES[projectType])}</span>
                    </li>
                    <li className="flex justify-between items-center text-sm border-b border-black/5 dark:border-white/5 pb-2">
                      <span className="text-neutral-700 dark:text-neutral-300">Pages/Screens ({pages})</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">{pages === 1 ? 'Included' : formatZAR((pages - 1) * PRICES.page)}</span>
                    </li>
                    {opts.seo && <li className="flex justify-between items-center text-sm"><span className="text-neutral-600">SEO Config</span><span>{formatZAR(PRICES.features.seo)}</span></li>}
                    {opts.crm && <li className="flex justify-between items-center text-sm"><span className="text-neutral-600">CRM Engine</span><span>{formatZAR(PRICES.features.crm)}</span></li>}
                    {opts.perf && <li className="flex justify-between items-center text-sm"><span className="text-neutral-600">Perf Tuning</span><span>{formatZAR(PRICES.features.perf)}</span></li>}
                    {opts.webgl && <li className="flex justify-between items-center text-sm"><span className="text-neutral-600">3D/WebGL</span><span>{formatZAR(PRICES.features.webgl)}</span></li>}
                    {opts.wa && <li className="flex justify-between items-center text-sm"><span className="text-neutral-600">WhatsApp</span><span>{formatZAR(PRICES.features.wa)}</span></li>}
                    {opts.rush && (
                      <li className="flex justify-between items-center text-sm text-purple-600 dark:text-purple-400 font-medium pt-2">
                        <span>Rush Priority (+50%)</span>
                        <span>{formatZAR(estimatedTotal - (estimatedTotal / PRICES.rush))}</span>
                      </li>
                    )}
                  </ul>
                  
                  <TransitionLink
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-4 rounded-xl font-bold transition hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-md"
                  >
                    Lock in this System <Icon icon="solar:arrow-right-linear" width="20" />
                  </TransitionLink>
                </div>

              </div>
            </div>

          </div>
        </div>


        {/* ONE-OFF SYSTEMS (REPLACING OLD TIERS) */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent my-24 border-none"></div>
        
        <div className="text-center mb-16">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">BUILD PACKAGES</span>
          <h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6">
            Proven conversion architectures.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            For clients who want a standardized, battle-tested system ready to deploy immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-32">
          {SYSTEM_BUILDS.map(tier => (
            <div key={tier.name} className={`rounded-3xl p-8 flex flex-col relative transition-all duration-300 ${tier.highlighted ? "bg-white dark:bg-black border-2 border-purple-600 shadow-[0_0_40px_rgba(52,25,224,0.15)] lg:-translate-y-2" : "bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 shadow-sm"}`}>
              {tier.highlighted && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>}
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white mb-1">{tier.name}</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">{tier.tagline}</p>
              <div className="mb-8 items-end flex gap-1">
                <span className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">{tier.price}</span>
              </div>
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 leading-snug">
                    <Icon icon="solar:check-circle-bold" width="16" className="text-purple-600 shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <TransitionLink href="/contact" className={`w-full py-3.5 rounded-full text-sm font-semibold text-center mt-auto block transition ${tier.highlighted ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-neutral-900 dark:text-white"}`}>
                Select Plan
              </TransitionLink>
            </div>
          ))}
        </div>

        {/* MONTHLY RETAINERS */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent my-24 border-none"></div>

        <div className="text-center mb-16">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">DIGITAL PARTNERSHIP</span>
          <h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6">
            Ongoing scaling & support.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            A website is never truly finished. We provide dedicated infrastructure and growth retainers to ensure your operations run flawlessly month over month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
          {RETAINER_PLANS.map(plan => (
            <div key={plan.name} className="rounded-3xl p-8 flex flex-col bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">{plan.name}</h3>
              <div className="mb-6 mt-4">
                <span className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">{plan.price}</span>
                <span className="text-neutral-500 text-sm">/mo</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8 pb-8 border-b border-black/5 dark:border-white/5">{plan.desc}</p>
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                    <Icon icon="solar:round-alt-arrow-right-linear" width="18" className="text-neutral-400 shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <TransitionLink href="/contact" className="w-full py-3.5 rounded-xl text-sm font-semibold text-center mt-auto block transition bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-neutral-900 dark:text-white">
                Inquire
              </TransitionLink>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </>
  );
}
