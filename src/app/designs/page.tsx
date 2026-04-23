"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Image from "next/image";

const CATEGORIES = ["All", "Startup", "Service", "E-Commerce", "Portfolio", "Local"] as const;

type Design = {
  name: string;
  category: string;
  image: string;
  desc: string;
  detailedDesc: string;
  demoLink: string;
};

const DESIGNS: Design[] = [
  { 
    name: "Velocity", category: "Startup", image: "/mockups/mockup_velocity_1776801528906.png", 
    desc: "High-conversion SaaS landing page.",
    demoLink: "/templates/velocity.html",
    detailedDesc: "Velocity is a high-conversion landing page built specifically for SaaS launches and product drops. Its color palette revolves around deep purples and indigos, establishing a modern, energetic, and highly technical aesthetic that speaks directly to a tech-savvy audience. The design features a bold, immersive hero section with glassmorphism overlays that allow the underlying dark backgrounds to bleed through softly, simulating a sense of depth and advanced technology. The entire flow is built to immediately answer what the product is, how it works, and why the user needs it right now, ending in an unavoidable conversion funnel."
  },
  { 
    name: "Trustmark", category: "Service", image: "/mockups/mockup_trustmark_1776801548773.png", 
    desc: "Authoritative consulting agency layout.",
    demoLink: "/templates/trustmark.html",
    detailedDesc: "Trustmark is a professional, trust-building layout designed exclusively for consultants, firm partners, and traditional agencies where establishing immediate authority is paramount. The primary color palette utilizes authoritative, sober slate colors ranging from deep slate to soft greys, accented occasionally by muted navy blues. This deliberately strict palette strips away loud distractions and flashiness, enabling the written copy to shine while projecting an aura of immense stability, competence, and legacy. Every button, input field, and divider line is sharp and definitive, projecting an uncompromising standard of service."
  },
  { 
    name: "Storefront", category: "E-Commerce", image: "/mockups/mockup_storefront_1776801570456.png", 
    desc: "Clean, frictionless shopping experience.",
    demoLink: "/templates/storefront.html",
    detailedDesc: "Storefront is an ultra-clean, product-focused shop design optimized heavily for rapid catalog browsing and friction-free online purchasing. Built on a fresh and organic palette of emerald greens and soft teals, the site feels instantly welcoming, hygienic, and inherently trustworthy to average consumers. The layout focuses strictly on removing any psychological or technical barriers from the buyer's journey. Product grids are deliberately oversized, dominating the screen space. The cart system bypasses the traditional checkout page redirect; instead, it is designed as a smooth slide-out drawer that anchors users on their current browsing page."
  },
  { 
    name: "Canvas", category: "Portfolio", image: "/mockups/mockup_canvas_1776801595613.png", 
    desc: "Avant-garde editorial creative portfolio.",
    demoLink: "/templates/canvas.html",
    detailedDesc: "Canvas is a highly experimental, minimal, and visually driven layout crafted meticulously for creatives, designers, photographers, and visual artists. The overarching color palette draws deeply upon warm rose, pink, and muted peach hues, creating an emotionally resonant and vibrant atmospheric backdrop. The aesthetic is heavily inspired by avant-garde editorial magazine layouts and high-end fashion lookbooks, utilizing asymmetrical grid systems and floating elements that aggressively break traditional horizontal alignment boundaries to command attention and force the user to explore the page slowly."
  },
  { 
    name: "Locale", category: "Local", image: "/mockups/mockup_locale_1776801614259.png", 
    desc: "Mobile-first hospitality and retail interface.",
    demoLink: "/templates/locale.html",
    detailedDesc: "Locale is a location-optimized, hyper-functional design developed explicitly for brick-and-mortar restaurants, local clinics, salons, and neighborhood retail shops where foot traffic is the ultimate goal. It features a deeply warm, inviting palette of rich amber, terracotta, and soft orange tones—colors psychologically proven to stimulate appetite, warmth, energy, and approachability. The design architecture strongly prioritizes local SEO fundamentals and mobile-first utility above all else. Built-in scheduling, booking, and reservation widgets are deeply integrated into the sticky footer to drastically shorten the path to a transaction."
  },
  { 
    name: "Launchpad", category: "Startup", image: "/mockups/mockup_launchpad_1776801632660.png", 
    desc: "High-energy MVP waitlist capture.",
    demoLink: "/templates/launchpad.html",
    detailedDesc: "Launchpad is an aggressive, multi-section MVP and coming-soon page explicitly engineered for capturing early-adopter emails, driving integrated waitlist referrals, and establishing massive initial social proof for products that haven't even launched yet. Utilizing an electrifying, high-energy palette of neon violet and deep space purple gradients, Launchpad conveys immediate innovation. To engineer virality, success metrics, early-adopter counts, and beta-tester testimonials scroll continuously in an infinite marquee banner at the bottom of the screen, creating an intense psychological sense of FOMO."
  },
  { 
    name: "Authority", category: "Service", image: "/mockups/mockup_authority_1776801655608.png", 
    desc: "Prestigious corporate and legal architecture.",
    demoLink: "/templates/authority.html",
    detailedDesc: "Authority is a monolithic, premium layout tailored specifically for enterprise law firms, corporate financial institutions, and high-end professional consultancies that absolutely must project unshakeable credibility and bespoke prestige. The color palette abandons trendy gradients entirely, leaning instead almost exclusively on neutral stones, deep architectural blacks, and stark, crisp whites. The contact structure completely avoids generic contact forms; instead, it utilizes a formalized, multi-step qualification questionnaire designed specifically to filter out low-value leads."
  },
  { 
    name: "Bloom", category: "Portfolio", image: "/mockups/mockup_bloom_1776801678531.png", 
    desc: "Cinematic full-bleed visual storytelling.",
    demoLink: "/templates/bloom.html",
    detailedDesc: "Bloom is a breathtaking full-bleed image gallery combined with profoundly detailed case study templates, specifically aimed at high-end wedding photographers, cinematographers, and visual storytellers. The defining color scheme is an unapologetically vibrant and fluid transition from bright coral pinks to lush fuchsia. Instead of traditional vertical scrolling, Bloom employs highly advanced horizontal snap-scrolling mechanics. The typography is entirely sans-serif, whisper-thin, and intentionally minimal—designed to step quietly into the background."
  },
  { 
    name: "Merchant", category: "E-Commerce", image: "/mockups/mockup_merchant_1776801697260.png", 
    desc: "Heavy-duty industrial catalog layout.",
    demoLink: "/templates/merchant.html",
    detailedDesc: "Merchant is an industrial-strength, conversion-engineered catalog layout built for massive e-commerce operations managing hundreds of SKUs, requiring heavy-duty filtering and advanced search mechanics. Rooted in a highly professional, clinical palette of crisp cyan, sky blue, and pure white, Merchant feels flawlessly hygienic, lightning-fast, and obsessively organized. The backbone of the design is a sticky, persistently visible sidebar filter system on desktop screens that allows users to instantly sort massive inventories by price paramaters and granular sizes natively without frustrating page reloads."
  },
  { 
    name: "Beacon", category: "Local", image: "/mockups/mockup_beacon_1776801722562.png", 
    desc: "Warm community-centric cafe hub.",
    demoLink: "/templates/beacon.html",
    detailedDesc: "Beacon offers an incredibly warm, deeply approachable, and community-centric design framework specifically built for upscale cafes, artisan bakeries, and local hospitality venues. Its color palette abandons harsh digital colors and is built entirely on soothing organic lime greens, muted matcha, and earthy teals, evoking immediate psychological feelings of freshness. The UI design relies heavily on friendly, soft aesthetics: deeply rounded shapes, circular image masking for staff and food photography, and massive pill-shaped call-to-action buttons."
  },
  { 
    name: "Nexus", category: "Startup", image: "/mockups/mockup_nexus_1776801738299.png", 
    desc: "Technical developer-tool documentation engine.",
    demoLink: "/templates/nexus.html",
    detailedDesc: "Nexus is a highly technical, developer-focused landing page heavily optimized for complex software products, APIs, and dev-tools that require extensive technical documentation, raw code snippets, and live integration previews to sell their value. Its palette entirely ignores traditional vibrant marketing colors, utilizing instead a highly specialized blend of deep terminal blues, stark blacks, and raw cyans. The standout design piece is an interactive, multi-tabbed code terminal embedded directly into the hero section."
  },
  { 
    name: "Prestige", category: "Service", image: "/mockups/mockup_prestige_1776801756098.png", 
    desc: "Ultra-luxury real estate interface.",
    demoLink: "/templates/prestige.html",
    detailedDesc: "Prestige is an ultra-luxury real estate and exclusive private services layout characterized by a dramatically immersive hero experience and suffocatingly sophisticated lead capture mechanisms. Relying on an exceptionally elegant, monochromatic palette of dark polished stone, deep charcoal, and brushed gold accents, Prestige immediately exudes exclusivity, scarcity, and high net worth appeal. Lead generation is handled with extreme delicacy through subtle, floating inquiry modals rather than desperate, aggressive pop-ups."
  },
];

export default function DesignsPage() {
  const [filter, setFilter] = useState<typeof CATEGORIES[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Design | null>(null);

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

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
            Browse proven architectures.<br />Pick your foundation.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Every template in our library has been strictly engineered to convert traffic into revenue. Select an interface below to explore its psychological architecture.
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

        {/* Massive Image Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((design) => (
            <div
              key={design.name}
              onClick={() => setSelectedProject(design)}
              className="group relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 bg-neutral-100 dark:bg-neutral-900 shadow-sm hover:shadow-2xl hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 cursor-pointer flex flex-col h-full"
            >
              {/* High-Res Image Preview */}
              <div className="w-full h-64 relative overflow-hidden bg-neutral-200 dark:bg-black">
                <Image 
                  src={design.image} 
                  alt={design.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/10 shadow-sm">
                  {design.category}
                </span>

                {/* Hover UI Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-xl border border-white/30 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Icon icon="solar:eye-bold" width="24" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 bg-white dark:bg-neutral-900 border-t border-black/5 dark:border-white/5 flex-grow">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {design.name}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
                  {design.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </main>
      <Footer />

      {/* --- EXPANSIVE MODAL OVERLAY --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-[fadeIn_0.3s_ease-out]">
          {/* Backdrop Blur Clik-away */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Container */}
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row transform animate-[slideUp_0.4s_ease-out]">
            
            {/* Left: Massive Image Viewer */}
            <div className="w-full md:w-1/2 lg:w-3/5 h-64 md:h-auto relative bg-neutral-100 dark:bg-black border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 shrink-0">
              <Image 
                src={selectedProject.image} 
                alt={selectedProject.name} 
                fill 
                className="object-cover md:object-contain drop-shadow-2xl md:p-8"
              />
            </div>

            {/* Right: Detailed Architecture Explanation */}
            <div className="w-full md:w-1/2 lg:w-2/5 p-8 lg:p-12 overflow-y-auto h-full max-h-[90vh]">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/20 transition-colors text-neutral-600 dark:text-neutral-300 z-10"
              >
                <Icon icon="solar:close-circle-linear" width="24" />
              </button>

              <div className="inline-block bg-purple-600/10 text-purple-700 dark:text-purple-400 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-purple-600/20">
                {selectedProject.category} System
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
                {selectedProject.name}
              </h2>
              <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-8 font-medium">
                {selectedProject.desc}
              </p>

              <div className="prose prose-sm dark:prose-invert prose-p:leading-relaxed text-neutral-600 dark:text-neutral-400 mb-10">
                <p>{selectedProject.detailedDesc}</p>
              </div>

              <div className="border border-black/10 dark:border-white/10 rounded-2xl p-6 bg-neutral-50 dark:bg-white/[0.02] mb-8">
                <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-900 dark:text-white mb-4">Core Architecture Attributes</h4>
                <ul className="space-y-3">
                  <li className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-3"><Icon icon="solar:rocket-linear" className="text-purple-600 mt-0.5 shrink-0" width="18"/> Optimized for Lead Generation</li>
                  <li className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-3"><Icon icon="solar:bolt-circle-linear" className="text-purple-600 mt-0.5 shrink-0" width="18"/> Micro-Interaction Animations</li>
                  <li className="flex text-sm text-neutral-600 dark:text-neutral-400 gap-3"><Icon icon="solar:shield-check-linear" className="text-purple-600 mt-0.5 shrink-0" width="18"/> Premium South African Market Alignment</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 sticky bottom-0 bg-white dark:bg-neutral-900 pt-4">
                <a 
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-4 rounded-xl font-bold transition hover:bg-neutral-800 dark:hover:bg-neutral-100 shadow-xl"
                >
                  View Live Demo <Icon icon="solar:round-alt-arrow-right-linear" width="20" />
                </a>

                <TransitionLink 
                  href="/pricing"
                  className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-bold transition shadow-[0_0_20px_rgba(52,25,224,0.3)]"
                >
                  Estimate Cost for this System <Icon icon="solar:calculator-linear" width="20" />
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
