"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Icon } from "@iconify/react";
import { useState } from "react";

const SECTIONS = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: "solar:rocket-linear",
    articles: [
      { title: "Choosing Your Design", desc: "Browse the library, compare templates, and pick the perfect starting point for your project.", time: "3 min" },
      { title: "Submitting Your Brand Assets", desc: "What to prepare: logos, brand colors, fonts, copy, and imagery for a smooth handoff.", time: "5 min" },
      { title: "Understanding the Timeline", desc: "From selection to launch — a detailed breakdown of each phase and what to expect.", time: "4 min" },
    ],
  },
  {
    id: "customization",
    title: "Customization Guide",
    icon: "solar:pen-new-round-linear",
    articles: [
      { title: "Content Replacement", desc: "How we swap placeholder content with your messaging, images, and media.", time: "4 min" },
      { title: "Layout Adjustments", desc: "Reordering sections, adjusting spacing, and adapting the grid to your priorities.", time: "6 min" },
      { title: "Conversion Optimization", desc: "How we structure CTAs, forms, and navigation to maximize lead generation.", time: "5 min" },
      { title: "Mobile Responsiveness", desc: "Every design is tested across devices — here's how we ensure pixel-perfect mobile.", time: "3 min" },
    ],
  },
  {
    id: "deployment",
    title: "Deployment & Hosting",
    icon: "solar:server-linear",
    articles: [
      { title: "Vercel Deployment", desc: "How your site gets deployed to Vercel's edge network with automatic SSL and CDN.", time: "4 min" },
      { title: "Custom Domains", desc: "Connecting your domain, configuring DNS records, and going live.", time: "3 min" },
      { title: "Performance Monitoring", desc: "Built-in analytics, Core Web Vitals tracking, and uptime monitoring.", time: "5 min" },
    ],
  },
  {
    id: "post-launch",
    title: "Post-Launch",
    icon: "solar:shield-check-linear",
    articles: [
      { title: "Requesting Revisions", desc: "How to submit revision requests and what's included in your plan.", time: "3 min" },
      { title: "Content Updates", desc: "Making ongoing changes to text, images, and sections after launch.", time: "4 min" },
      { title: "SEO Best Practices", desc: "Meta tags, structured data, and sitemap management for search visibility.", time: "6 min" },
    ],
  },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");
  const current = SECTIONS.find(s => s.id === activeSection)!;

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        <div className="mb-16">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">DOCUMENTATION</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
            Everything you need<br />to know.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Guides, references, and walkthroughs to help you get the most out of Nexlink Studio.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-xl">
            <Icon icon="solar:magnifer-linear" width="20" className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl pl-12 pr-4 py-3.5 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar Nav */}
          <div className="lg:col-span-1">
            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible no-scrollbar lg:sticky lg:top-32">
              {SECTIONS.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 shrink-0 ${
                    activeSection === section.id
                      ? "bg-purple-600/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-400"
                      : "hover:bg-black/5 dark:hover:bg-white/5 text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  <Icon icon={section.icon} width="18" />
                  <span className="text-sm font-medium whitespace-nowrap">{section.title}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-700 dark:text-purple-400">
                <Icon icon={current.icon} width="22" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">{current.title}</h2>
            </div>

            <div className="flex flex-col gap-4">
              {current.articles.map(article => (
                <div
                  key={article.title}
                  className="group bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-6 hover:border-purple-500/30 dark:hover:border-purple-500/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition">{article.title}</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{article.desc}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-neutral-400">{article.time}</span>
                      <Icon icon="solar:arrow-right-linear" width="16" className="text-neutral-300 dark:text-neutral-600 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition group-hover:translate-x-1 transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center border border-black/5 dark:border-white/5 rounded-3xl p-12 bg-white/50 dark:bg-white/[0.02]">
          <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">Can&apos;t find what you need?</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-base mb-8 max-w-lg mx-auto">Our team is here to help. Reach out and we&apos;ll get you sorted.</p>
          <TransitionLink href="/contact" className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-base font-medium transition shadow-[0_0_25px_rgba(52,25,224,0.35)]">
            Contact Support <Icon icon="solar:arrow-right-linear" width="18" />
          </TransitionLink>
        </div>
      </main>

      <Footer />
    </>
  );
}
