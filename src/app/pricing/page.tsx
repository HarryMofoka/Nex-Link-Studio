"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

// --- Pricing Base Constants (ZAR) ---
const ZAR_BASE = 6500;
const ZAR_PER_PAGE = 750;
const ZAR_ECOM = 8500;
const ZAR_3D = 5000;
const RUSH_MULTIPLIER = 1.5;

const TIERS = [
  {
    name: "Starter",
    tagline: "Get online fast.",
    monthlyPrice: "2,499",
    yearlyPrice: "1,999",
    cta: "Get Started",
    highlighted: false,
    features: [
      { text: "1 website build", included: true },
      { text: "Choose from Design Library", included: true },
      { text: "Basic customization", included: true },
      { text: "Mobile responsive", included: true },
      { text: "48h average delivery", included: true },
      { text: "1 round of revisions", included: true },
      { text: "SEO fundamentals", included: true },
      { text: "Priority support", included: false },
      { text: "Multi-page builds", included: false },
      { text: "Strategy consultation", included: false },
    ],
  },
  {
    name: "Growth",
    tagline: "Built for performance.",
    monthlyPrice: "4,999",
    yearlyPrice: "3,999",
    cta: "Start Now",
    highlighted: true,
    features: [
      { text: "Full website build", included: true },
      { text: "Choose from Design Library", included: true },
      { text: "Deep customization", included: true },
      { text: "Mobile responsive", included: true },
      { text: "48h average delivery", included: true },
      { text: "Unlimited revisions", included: true },
      { text: "SEO fundamentals", included: true },
      { text: "Priority support", included: true },
      { text: "Multi-page builds (up to 5)", included: true },
      { text: "Strategy consultation", included: false },
    ],
  },
  {
    name: "Launch System",
    tagline: "Complete digital foundation.",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    cta: "Contact Us",
    highlighted: false,
    features: [
      { text: "Full website build", included: true },
      { text: "Choose from Design Library", included: true },
      { text: "Premium customization", included: true },
      { text: "Mobile responsive", included: true },
      { text: "Priority delivery", included: true },
      { text: "Unlimited revisions", included: true },
      { text: "Advanced SEO", included: true },
      { text: "Priority support", included: true },
      { text: "Unlimited pages", included: true },
      { text: "Strategy consultation", included: true },
    ],
  },
];

const PRICING_FAQ = [
  { q: "What happens after I get an estimate?", a: "Save your estimate and reach out via the Contact page. We will verify your requirements within 2 hours and send a formal agreement." },
  { q: "Can I switch plans later?", a: "Yes. You can upgrade or adjust your plan at any time. We'll apply any price difference to your next billing cycle." },
  { q: "What's included in 'deep customization'?", a: "Beyond basic brand colors and content swaps, we restructure layout sections, optimize conversion flows, and tailor the messaging to your specific audience." },
  { q: "Do you charge monthly retainers?", a: "The calculator estimates the one-off build fee. Monthly maintenance, hosting, and ongoing SEO are billed separately if you choose to retain us." },
  { q: "Do I own the website?", a: "Yes. You own 100% of the final product. All source files and assets are delivered to you upon completion." },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  // Estimator State
  const [pages, setPages] = useState<number>(1);
  const [projectType, setProjectType] = useState<"standard" | "ecom" | "webapp">("standard");
  const [isAdvanced3D, setIsAdvanced3D] = useState<boolean>(false);
  const [isRush, setIsRush] = useState<boolean>(false);
  
  // Computed Price State
  const [estimatedTotal, setEstimatedTotal] = useState<number>(ZAR_BASE);

  useEffect(() => {
    // Determine Base based on project type
    let total = ZAR_BASE;
    if (projectType === "ecom") total += ZAR_ECOM;
    if (projectType === "webapp") total += (ZAR_ECOM * 1.5); // Web App implies heavy custom logic

    // Add Page Multipliers (first page is included in base)
    if (pages > 1) {
      total += (pages - 1) * ZAR_PER_PAGE;
    }

    // Add 3D/WebGL Features
    if (isAdvanced3D) total += ZAR_3D;

    // Apply Rush Multiplier
    if (isRush) total = Math.round(total * RUSH_MULTIPLIER);

    setEstimatedTotal(total);
  }, [pages, projectType, isAdvanced3D, isRush]);

  const formatZAR = (value: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        
        {/* Universal Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">
            TRANSPARENT PRICING
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.05]">
            Calculate your investment.<br />No hidden fees.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Build your exact requirements below to see a real-time estimate for your custom project, adjusted for the South African market.
          </p>
        </div>

        {/* INTERACTIVE ESTIMATOR MODULE */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Inputs */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              
              {/* Category Selection */}
              <div className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">1. Project Category</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: "standard", icon: "solar:document-text-linear", title: "Corporate site", desc: "Brochure & Landing pages" },
                    { id: "ecom", icon: "solar:cart-large-linear", title: "E-Commerce", desc: "Online store & Payments" },
                    { id: "webapp", icon: "solar:database-linear", title: "Web Application", desc: "Dashboards & User logic" }
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
                      <Icon icon={cat.icon} width="28" className={`mb-4 ${projectType === cat.id ? "text-purple-600" : "text-neutral-500"}`} />
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
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">2. How many unique pages?</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Estimate the size of your site layout.</p>
                  </div>
                  <div className="bg-purple-600/10 text-purple-700 dark:text-purple-400 px-4 py-2 rounded-xl border border-purple-600/20 font-bold text-xl">
                    {pages} {pages === 1 ? "page" : "pages"}
                  </div>
                </div>
                
                <div className="relative pt-2 pb-6">
                  <input 
                    type="range" 
                    min="1" 
                    max="20" 
                    value={pages} 
                    onChange={(e) => setPages(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-purple-600 focus:outline-none"
                  />
                  <div className="flex justify-between text-xs text-neutral-400 mt-4 px-1 font-medium">
                    <span>1 page</span>
                    <span>10 pages</span>
                    <span>20+ pages</span>
                  </div>
                </div>
              </div>

              {/* Premium Features Toggle */}
              <div className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">3. Premium Add-ons</h3>
                
                <div className="space-y-4">
                  {/* 3D WebGL Toggle */}
                  <label className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all cursor-pointer ${isAdvanced3D ? "border-purple-600 bg-purple-600/5" : "border-black/5 dark:border-white/5 bg-white dark:bg-white/5 hover:border-purple-400/30"}`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon icon="solar:box-minimalistic-linear" width="20" className={isAdvanced3D ? "text-purple-600" : "text-neutral-500"} />
                        <span className={`font-semibold ${isAdvanced3D ? "text-neutral-900 dark:text-white" : "text-neutral-700 dark:text-neutral-300"}`}>Advanced 3D & WebGL Animations</span>
                      </div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 pl-7">Add cinematic GSAP scrolling, 3D product models, and physics-based interactions.</p>
                    </div>
                    <div className={`w-12 h-6 mt-1 rounded-full relative flex items-center p-1 transition-colors ${isAdvanced3D ? "bg-purple-600" : "bg-neutral-300 dark:bg-neutral-700"}`}>
                      <input type="checkbox" className="hidden" checked={isAdvanced3D} onChange={() => setIsAdvanced3D(!isAdvanced3D)} />
                      <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${isAdvanced3D ? "translate-x-6" : "translate-x-0"}`} />
                    </div>
                  </label>

                  {/* Rush Timeline Toggle */}
                  <label className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all cursor-pointer ${isRush ? "border-purple-600 bg-purple-600/5" : "border-black/5 dark:border-white/5 bg-white dark:bg-white/5 hover:border-purple-400/30"}`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon icon="solar:clock-circle-linear" width="20" className={isRush ? "text-purple-600" : "text-neutral-500"} />
                        <span className={`font-semibold ${isRush ? "text-neutral-900 dark:text-white" : "text-neutral-700 dark:text-neutral-300"}`}>Rush Delivery (48 Hours)</span>
                      </div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 pl-7">Skip the queue. We work overnight to launch your project within 48 hours (+50% fee).</p>
                    </div>
                    <div className={`w-12 h-6 mt-1 rounded-full relative flex items-center p-1 transition-colors ${isRush ? "bg-purple-600" : "bg-neutral-300 dark:bg-neutral-700"}`}>
                      <input type="checkbox" className="hidden" checked={isRush} onChange={() => setIsRush(!isRush)} />
                      <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${isRush ? "translate-x-6" : "translate-x-0"}`} />
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Summary Panel */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 rounded-3xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/80 backdrop-blur-2xl">
                
                {/* Panel Header */}
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                  <h3 className="text-sm font-semibold tracking-wider uppercase opacity-80 mb-2 relative z-10">Estimated Investment</h3>
                  <div className="flex items-baseline gap-1 relative z-10">
                    <span className="text-5xl font-bold tracking-tight">{formatZAR(estimatedTotal)}</span>
                  </div>
                  <p className="text-purple-200 text-xs mt-3 relative z-10">Total pricing is a rough estimate. Final quotes depend on specialized logic requirements.</p>
                </div>

                {/* Breakdown List */}
                <div className="p-8">
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 uppercase tracking-wider">Project Breakdown</h4>
                  <ul className="space-y-4 mb-8">
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-neutral-600 dark:text-neutral-400">Base Build ({projectType})</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">{formatZAR(ZAR_BASE + (projectType === 'ecom' ? ZAR_ECOM : projectType === 'webapp' ? ZAR_ECOM*1.5 : 0))}</span>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                      <span className="text-neutral-600 dark:text-neutral-400">Pages ({pages})</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">{pages === 1 ? 'Included' : formatZAR((pages - 1) * ZAR_PER_PAGE)}</span>
                    </li>
                    {isAdvanced3D && (
                      <li className="flex justify-between items-center text-sm">
                        <span className="text-neutral-600 dark:text-neutral-400">3D/WebGL Features</span>
                        <span className="font-semibold text-neutral-900 dark:text-white">{formatZAR(ZAR_3D)}</span>
                      </li>
                    )}
                    {isRush && (
                      <li className="flex justify-between items-center text-sm text-purple-600 dark:text-purple-400 font-medium">
                        <span>Rush Delivery (+50%)</span>
                        <span>{formatZAR(estimatedTotal - (estimatedTotal / RUSH_MULTIPLIER))}</span>
                      </li>
                    )}
                  </ul>
                  
                  <TransitionLink
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-4 rounded-xl font-bold transition hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-md"
                  >
                    Lock in this Estimate <Icon icon="solar:arrow-right-linear" width="20" />
                  </TransitionLink>
                  <p className="text-center text-xs text-neutral-400 mt-4">No credit card required.</p>
                </div>

              </div>
            </div>

          </div>
        </div>


        {/* CLASSIC TIERS & SUBSCRIPTIONS */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent my-24 border-none"></div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6">
            Looking for a simpler monthly package?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            For small businesses, we offer straightforward subscription tiers (USD equivalent) that cover hosting, maintenance, and unlimited minor updates.
          </p>

          {/* Subscription Toggle */}
          <label className="inline-flex items-center gap-4 cursor-pointer justify-center">
            <span className={`text-sm font-medium transition ${!isYearly ? "text-neutral-900 dark:text-white" : "text-neutral-400"}`}>Monthly</span>
            <div
              className="w-12 h-6 bg-black/10 dark:bg-white/10 rounded-full relative flex items-center p-1 transition-colors hover:bg-black/20 dark:hover:bg-white/20"
              onClick={() => setIsYearly(!isYearly)}
            >
              <div className={`w-4 h-4 rounded-full bg-neutral-900 dark:bg-white shadow-sm transition-transform duration-300 ${isYearly ? "translate-x-6" : "translate-x-0"}`} />
            </div>
            <span className={`text-sm font-medium transition ${isYearly ? "text-neutral-900 dark:text-white" : "text-neutral-400"}`}>
              Yearly <span className="text-purple-700 dark:text-purple-400 ml-1 text-xs px-2 py-0.5 bg-purple-600/10 rounded-full border border-purple-600/20">-20%</span>
            </span>
          </label>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-24">
          {TIERS.map(tier => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 flex flex-col relative transition-all duration-300 ${
                tier.highlighted
                  ? "bg-white dark:bg-neutral-900/60 border-2 border-purple-600 dark:border-purple-500/40 shadow-[0_0_40px_rgba(52,25,224,0.1)] lg:-translate-y-2"
                  : "bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 shadow-sm"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-xs font-semibold px-4 py-1 rounded-full tracking-wide">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-1">{tier.name}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">{tier.tagline}</p>

              <div className="mb-8 items-end flex gap-1">
                <span className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                  {tier.monthlyPrice === "Custom" ? "Custom" : `$${isYearly ? tier.yearlyPrice : tier.monthlyPrice}`}
                </span>
                {tier.monthlyPrice !== "Custom" && <span className="text-sm text-neutral-500 pb-1">/mo</span>}
              </div>

              <TransitionLink
                href="/contact"
                className={`w-full py-3.5 rounded-full text-sm font-semibold text-center mt-auto mb-8 block ${
                  tier.highlighted
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-neutral-900 dark:text-white border border-black/10 dark:border-white/10"
                }`}
              >
                {tier.cta}
              </TransitionLink>

              <ul className="flex flex-col gap-3.5 flex-1">
                {tier.features.map(f => (
                  <li key={f.text} className={`flex items-center gap-3 text-sm ${f.included ? "text-neutral-700 dark:text-neutral-300" : "text-neutral-300 dark:text-neutral-600"}`}>
                    <Icon
                      icon={f.included ? "solar:check-circle-linear" : "solar:close-circle-linear"}
                      width="18"
                      className={f.included ? (tier.highlighted ? "text-purple-700 dark:text-purple-400" : "text-neutral-500") : "text-neutral-300 dark:text-neutral-700"}
                    />
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing FAQ */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white text-center mb-12">
            Common pricing questions
          </h2>
          <div className="flex flex-col divide-y divide-black/5 dark:divide-white/5 border-t border-b border-black/5 dark:border-white/5">
            {PRICING_FAQ.map(faq => (
              <details key={faq.q} className="group py-5 cursor-pointer [&::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between text-base font-medium tracking-tight text-neutral-900 dark:text-white list-none outline-none">
                  {faq.q}
                  <Icon icon="solar:add-circle-linear" width="22" className="text-neutral-400 transition-transform duration-300 group-open:rotate-45 shrink-0 ml-4" />
                </summary>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
