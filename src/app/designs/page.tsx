"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@iconify/react";
import { useState } from "react";

const CATEGORIES = ["All", "Startup", "Service", "E-Commerce", "Portfolio", "Local"] as const;

const DESIGNS = [
  { name: "Velocity",    category: "Startup",    gradient: "from-purple-700 to-indigo-600",  icon: "solar:rocket-linear",               desc: "High-conversion landing page built for SaaS launches and product drops." },
  { name: "Trustmark",   category: "Service",    gradient: "from-slate-800 to-slate-600",    icon: "solar:shield-check-linear",          desc: "Professional, trust-building layout for consultants and agencies." },
  { name: "Storefront",  category: "E-Commerce", gradient: "from-emerald-700 to-teal-600",   icon: "solar:bag-heart-linear",             desc: "Clean, product-focused shop design optimized for quick purchases." },
  { name: "Canvas",      category: "Portfolio",  gradient: "from-rose-700 to-pink-600",      icon: "solar:star-fall-minimalistic-linear", desc: "Minimal, visually driven layout for creatives and designers." },
  { name: "Locale",      category: "Local",      gradient: "from-amber-700 to-orange-600",   icon: "solar:map-point-linear",             desc: "Location-optimized design for restaurants, clinics, and local shops." },
  { name: "Launchpad",   category: "Startup",    gradient: "from-violet-700 to-purple-600",  icon: "solar:bolt-linear",                  desc: "Multi-section MVP page with integrated waitlist and social proof." },
  { name: "Authority",   category: "Service",    gradient: "from-neutral-800 to-neutral-600",icon: "solar:document-linear",              desc: "Premium law firm and professional services layout with credibility markers." },
  { name: "Bloom",       category: "Portfolio",  gradient: "from-pink-600 to-fuchsia-600",   icon: "solar:pallete-2-linear",             desc: "Full-bleed image gallery with case study sections for visual storytelling." },
  { name: "Merchant",    category: "E-Commerce", gradient: "from-cyan-700 to-sky-600",       icon: "solar:cart-large-4-linear",          desc: "Conversion-engineered catalog layout with advanced filtering and search." },
  { name: "Beacon",      category: "Local",      gradient: "from-lime-700 to-green-600",     icon: "solar:cup-hot-linear",               desc: "Warm, approachable design for cafes, bakeries, and hospitality." },
  { name: "Nexus",       category: "Startup",    gradient: "from-blue-700 to-cyan-600",      icon: "solar:programming-linear",           desc: "Developer-focused landing with code snippets, API docs, and integration previews." },
  { name: "Prestige",    category: "Service",    gradient: "from-stone-800 to-stone-600",    icon: "solar:buildings-2-linear",           desc: "Real estate and luxury services layout with immersive hero and lead capture." },
];

export default function DesignsPage() {
  const [filter, setFilter] = useState<typeof CATEGORIES[number]>("All");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const filtered = filter === "All" ? DESIGNS : DESIGNS.filter(d => d.category === filter);

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        {/* Page Header */}
        <div className="mb-16">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">
            DESIGN LIBRARY
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
            Browse proven designs.<br />Pick your starting point.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Every template in our library has been designed to convert. Select one, tell us about your business, and 
            we&apos;ll customize it into a website that&apos;s uniquely yours.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(52,25,224,0.3)]"
                  : "bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((design, idx) => (
            <div
              key={design.name}
              className="group relative rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 bg-white dark:bg-white/[0.02] shadow-sm hover:shadow-2xl hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Gradient Preview */}
              <div className={`w-full h-48 bg-gradient-to-br ${design.gradient} flex items-center justify-center relative overflow-hidden`}>
                <Icon
                  icon={design.icon}
                  width="56"
                  height="56"
                  className="text-white/30 group-hover:text-white/60 group-hover:scale-110 transition-all duration-500"
                />
                <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500`} />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/20">
                  {design.category}
                </span>

                {/* Hover CTA */}
                <div className={`absolute bottom-4 right-4 flex items-center gap-2 bg-white text-neutral-900 px-4 py-2 rounded-full text-xs font-semibold shadow-lg transition-all duration-300 ${
                  hoveredIdx === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                  Preview <Icon icon="solar:arrow-right-linear" width="14" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 tracking-tight">
                  {design.name}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {design.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              Don&apos;t see exactly what you need?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-base font-medium transition shadow-[0_0_25px_rgba(52,25,224,0.35)]"
            >
              Request a Custom Design <Icon icon="solar:arrow-right-linear" width="18" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
