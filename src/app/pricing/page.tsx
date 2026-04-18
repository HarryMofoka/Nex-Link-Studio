"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@iconify/react";
import { useState } from "react";

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
  { q: "What happens after I pick a plan?", a: "You'll select a design from our library, share your brand assets and goals, and we start building immediately. Most projects launch within 48 hours." },
  { q: "Can I switch plans later?", a: "Yes. You can upgrade or adjust your plan at any time. We'll apply any price difference to your next billing cycle." },
  { q: "What's included in 'deep customization'?", a: "Beyond basic brand colors and content swaps, we restructure layout sections, optimize conversion flows, and tailor the messaging to your specific audience." },
  { q: "Is there a contract or lock-in?", a: "No long-term contracts. All plans are month-to-month. Cancel anytime with no penalties." },
  { q: "Do I own the website?", a: "Yes. You own 100% of the final product. All source files and assets are delivered to you upon completion." },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">
            PRICING
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.05]">
            Transparent pricing.<br />Real results.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            No hourly rates. No hidden fees. You pay for speed, quality, and outcomes.
          </p>

          {/* Toggle */}
          <label className="inline-flex items-center gap-4 cursor-pointer">
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
                  ? "bg-white dark:bg-neutral-900/60 border-2 border-purple-600 dark:border-purple-500/40 shadow-[0_0_40px_rgba(52,25,224,0.2)] lg:-translate-y-4"
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

              <div className="mb-8">
                <span className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                  {tier.monthlyPrice === "Custom" ? "Custom" : `$${isYearly ? tier.yearlyPrice : tier.monthlyPrice}`}
                </span>
                {tier.monthlyPrice !== "Custom" && <span className="text-sm text-neutral-500">/mo</span>}
              </div>

              <a
                href="/contact"
                className={`w-full py-3.5 rounded-full text-sm font-semibold text-center transition mb-8 block ${
                  tier.highlighted
                    ? "bg-purple-600 hover:bg-purple-700 text-white shadow-[0_0_15px_rgba(52,25,224,0.3)]"
                    : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-neutral-900 dark:text-white border border-black/10 dark:border-white/10"
                }`}
              >
                {tier.cta}
              </a>

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

        {/* Bottom CTA */}
        <div className="text-center border border-black/5 dark:border-white/5 rounded-3xl p-12 lg:p-16 bg-white/50 dark:bg-white/[0.02]">
          <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">
            Not sure which plan is right?
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base mb-8 max-w-lg mx-auto">
            Tell us about your business and we&apos;ll recommend the best path forward. No commitment required.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-base font-medium transition shadow-[0_0_25px_rgba(52,25,224,0.35)]"
          >
            Talk to Us <Icon icon="solar:arrow-right-linear" width="18" />
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
