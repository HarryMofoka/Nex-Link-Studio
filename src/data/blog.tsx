import React from "react";
import { Icon } from "@iconify/react";

export interface BlogPost {
  slug: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  gradient: string;
  coverImage: string;
  featured: boolean;
  author: {
    name: string;
    role: string;
    avatar: string; // just an initial for now
  };
  Content: React.FC;
}

// Reusable styling components for the lessons

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed mb-6 font-sans">
    {children}
  </p>
);

const DropCapP = ({ letter, children }: { letter: string; children: React.ReactNode }) => (
  <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed mb-6 font-sans">
    <span className="float-left text-6xl leading-[0.8] pr-3 pt-1 font-serif text-purple-700 dark:text-purple-400 font-bold">
      {letter}
    </span>
    {children}
  </p>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white mt-16 mb-6">
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mt-10 mb-4">
    {children}
  </h3>
);

const PullQuote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="my-12 py-4 border-l-4 border-purple-600 pl-6 lg:pl-10">
    <p className="text-2xl lg:text-3xl font-serif italic text-neutral-800 dark:text-neutral-200 leading-snug">
      &ldquo;{children}&rdquo;
    </p>
  </blockquote>
);

const AlertCard = ({ title, children, icon = "solar:lightbulb-bolt-linear" }: { title: string, children: React.ReactNode, icon?: string }) => (
  <div className="my-10 bg-purple-600/5 dark:bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6 lg:p-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-purple-600/10 flex items-center justify-center text-purple-700 dark:text-purple-400">
        <Icon icon={icon} width="24" />
      </div>
      <span className="font-bold text-neutral-900 dark:text-white">{title}</span>
    </div>
    <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
      {children}
    </div>
  </div>
);

// Individual Post Contents

const StrategyContent = () => (
  <>
    <DropCapP letter="F">
      or years, the narrative in the web design industry has been binary: either you use a cheap drag-and-drop builder like Wix, or you pay $10,000+ for a "custom" website from an agency. But for 95% of small to medium businesses, this is a false dichotomy that results in wasted time and money.
    </DropCapP>
    <P>
      A "custom" website often just means a designer pushed pixels around in Figma, and a developer spent weeks translating those pixels into code. But does a local roofing company or a new scaling SaaS really need a completely novel way to display a navigation bar? No.
    </P>
    
    <PullQuote>
      Your website's job is not to reinvent the wheel. Its job is to build trust, answer questions, and convert traffic into revenue.
    </PullQuote>

    <H2>The Agency Illusion</H2>
    <P>
      When you hire a traditional agency, you are primarily paying for "process." Discovery calls, wireframe revisions, mood boards, and bespoke code. This takes time—usually 8 to 12 weeks. 
    </P>
    
    <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-red-500/20 bg-red-500/5 rounded-2xl p-6">
        <h4 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
          <Icon icon="solar:close-circle-linear" width="20" /> Traditional Custom Build
        </h4>
        <ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
          <li className="flex justify-between"><span>Timeline:</span> <strong>8–12 weeks</strong></li>
          <li className="flex justify-between"><span>Cost:</span> <strong>$8,000+</strong></li>
          <li className="flex justify-between"><span>Focus:</span> <strong>Novelty & Aesthetics</strong></li>
          <li className="flex justify-between"><span>Risk:</span> <strong>Unproven UX</strong></li>
        </ul>
      </div>
      <div className="border border-emerald-500/20 bg-emerald-500/5 rounded-2xl p-6">
        <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">
          <Icon icon="solar:check-circle-linear" width="20" /> Productized Framework
        </h4>
        <ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
          <li className="flex justify-between"><span>Timeline:</span> <strong>48 hours</strong></li>
          <li className="flex justify-between"><span>Cost:</span> <strong>Fixed Tiered Pricing</strong></li>
          <li className="flex justify-between"><span>Focus:</span> <strong>Conversion Metrics</strong></li>
          <li className="flex justify-between"><span>Risk:</span> <strong>Zero (Proven structures)</strong></li>
        </ul>
      </div>
    </div>

    <H2>Why Constraints Breed Conversion</H2>
    <P>
      By using a highly-optimized, pre-built template, you aren't sacrificing quality. You are eliminating variance. The templates at Nexlink Studio have been rigorously tested. We know exactly where the "Book Now" CTA should go, we know the precise typographic scale required for mobile legibility, and we know how to structure the DOM for a perfect Google Core Web Vitals score.
    </P>
    <P>
      When we remove the overhead of deciding *where* the logo should go, we can spend 100% of our energy on what actually matters: **Your brand messaging, your imagery, and your offer.**
    </P>

    <AlertCard title="The Takeaway">
      Stop paying for custom code when what you actually need is a custom *brand experience*. A proven framework customized with your photography, your colors, and your compelling copy will consistently outperform a buggy, untested bespoke build.
    </AlertCard>
  </>
);

const DesignContent = () => (
  <>
    <DropCapP letter="A">
      fter analyzing over 200 client websites across dozens of industries, a clear pattern emerged. The sites that generated leads didn't have the flashiest animations or the most complex layouts. They strictly adhered to five core elements of conversion psychology.
    </DropCapP>
    
    <H2>1. The Split Hero Layout (The F-Pattern)</H2>
    <P>
      Eye-tracking studies consistently show that users read the web in an F-shaped pattern. The top left corner is prime real estate.
    </P>
    
    <div className="my-10 bg-neutral-100 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-3xl p-6 lg:p-10 flex flex-col items-center">
      <div className="w-full max-w-sm aspect-[4/3] bg-white dark:bg-black rounded-xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 p-4 flex gap-4 relative overflow-hidden">
        <div className="flex-1 flex flex-col gap-3 z-10">
          <div className="w-3/4 h-6 bg-purple-200 dark:bg-purple-900/40 rounded" />
          <div className="w-full h-4 bg-neutral-200 dark:bg-neutral-800 rounded" />
          <div className="w-5/6 h-4 bg-neutral-200 dark:bg-neutral-800 rounded" />
          <div className="w-24 h-10 mt-2 bg-purple-600 rounded-full" />
        </div>
        <div className="flex-1 bg-neutral-100 dark:bg-neutral-900 rounded-lg flex items-center justify-center relative overflow-hidden">
           <Icon icon="solar:camera-minimalistic-linear" width="32" className="text-neutral-400" />
           {/* Eye tracking heat map overlay */}
           <div className="absolute top-2 left-[-20%] w-32 h-32 bg-red-500/40 blur-3xl rounded-full" />
        </div>
      </div>
      <p className="text-xs text-neutral-500 mt-6 text-center font-mono">Figure 1: The standard high-converting hero architecture.</p>
    </div>

    <P>
      Your value proposition must be H1 text, left-aligned, followed immediately by a sub-headline neutralizing risk, and a high-contrast primary CTA. The right side is reserved to visually validate the claim (product UI, social proof, or hero image).
    </P>

    <H2>2. The "Desire/Fear" Sub-headline</H2>
    <P>
      Your H1 should say *what* you do. Your sub-headline should say *why they should care*. It must simultaneously appeal to their desired outcome while neutralizing their primary objection.
    </P>
    
    <PullQuote>
      Bad: "We provide cloud hosting solutions."<br/><br/>
      Good: "Deploy faster with zero configuration. Because you should be writing code, not configuring servers."
    </PullQuote>

    <H2>3. Frictionless Social Proof</H2>
    <P>
      Don't bury testimonials on a dedicated `/reviews` page. No one clicks that. Embed raw, authentic social proof directly next to your points of highest friction (usually near pricing or the final CTA form). Trust must be actively maintained throughout the scroll journey.
    </P>
  </>
);

const GrowthContent = () => (
  <>
    <DropCapP letter="S">
      peed is a feature. In the modern business environment, an opportunity can emerge on a Monday and require a complete digital landing pad by Wednesday. Traditional web development makes this impossible. Nexlink's productized model makes it standard.
    </DropCapP>
    
    <P>
      Last month, a local boutique fitness studio approached us. Their physical space was opening in exactly 5 days. They had no online booking system, no web presence, and only a handful of promotional photos and a logo.
    </P>

    <H2>The 48-Hour Timeline</H2>
    
    <div className="my-12 relative border-l-2 border-purple-200 dark:border-purple-900/50 ml-4 py-2 space-y-12">
      <div className="relative pl-8">
        <div className="absolute w-4 h-4 rounded-full bg-purple-600 left-[-9px] top-1 shadow-[0_0_10px_rgba(52,25,224,0.5)]" />
        <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Hour 0: Template Selection</h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">The client selected the "Locale" design template, specifically engineered to drive foot traffic and local bookings.</p>
      </div>
      <div className="relative pl-8">
        <div className="absolute w-4 h-4 rounded-full bg-purple-600 left-[-9px] top-1 shadow-[0_0_10px_rgba(52,25,224,0.5)]" />
        <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Hour 12: Content Handoff & Theming</h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">We injected their brand palette (Sage Green and Obsidian) into the CSS variables. Placeholder copy was replaced with their specific class schedules.</p>
      </div>
      <div className="relative pl-8">
        <div className="absolute w-4 h-4 rounded-full bg-purple-600 left-[-9px] top-1 shadow-[0_0_10px_rgba(52,25,224,0.5)]" />
        <h4 className="font-bold text-neutral-900 dark:text-white mb-1">Hour 24: Integration Wiring</h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">We connected the primary CTAs to their Mindbody booking account, ensuring seamless scheduling without custom backend code.</p>
      </div>
      <div className="relative pl-8">
        <div className="absolute w-4 h-4 rounded-full bg-emerald-500 left-[-9px] top-1 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
        <h4 className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">Hour 48: Vercel Deployment</h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Site compiled, edge network distributed, domain connected. Live to the world.</p>
      </div>
    </div>

    <P>
      Because we weren't debating over where the hamburger menu should go, we could focus entirely on integrating their booking system properly and ensuring their brand photography looked phenomenal against the dark mode background. They secured 40+ bookings before they even unlocked their physical doors.
    </P>
  </>
);

const TechContent = () => (
  <>
    <DropCapP letter="C">
      hoosing the right technology stack isn't just a concern for software engineers. It directly impacts your bottom line. How fast your page loads affects your bounce rate. How your page is rendered affects your Google ranking.
    </DropCapP>
    <P>
      At Nexlink Studio, we exclusively build on **Next.js 15**, utilizing the App Router and React. Here is exactly what that means for your business, stripped of the technical jargon.
    </P>

    <H2>Static Generation vs. Server Rendering</H2>
    <P>
      If your website runs on a traditional WordPress server, every time a user clicks "Home", the server has to wake up, query a database, stitch HTML together, and send it back. It takes hundreds of milliseconds, or worse, full seconds.
    </P>
    <P>
      Next.js allows us to use **Static Site Generation (SSG)**. When we build your site, it pre-renders every single page into raw, optimized HTML and CSS.
    </P>

    <div className="my-12 flex flex-col md:flex-row gap-8 items-center justify-center p-8 bg-black/5 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 mb-3">
          <Icon icon="solar:server-square-linear" width="40" />
        </div>
        <p className="font-bold text-neutral-900 dark:text-white">WordPress</p>
        <p className="text-xs text-neutral-500">Database Querying<br/>(Slow, 800ms+ payload)</p>
      </div>
      
      <div className="flex flex-col items-center">
        <Icon icon="solar:arrow-right-linear" width="24" className="text-neutral-400 hidden md:block" />
        <Icon icon="solar:arrow-down-linear" width="24" className="text-neutral-400 md:hidden" />
        <span className="text-xs font-mono text-neutral-500 mt-2">VS</span>
      </div>

      <div className="text-center">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 mb-3 relative">
          <Icon icon="solar:bolt-circle-linear" width="40" />
          <div className="absolute -right-2 -top-2 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">EDGE</div>
        </div>
        <p className="font-bold text-neutral-900 dark:text-white">Next.js SSG</p>
        <p className="text-xs text-neutral-500">Pre-compiled HTML<br/>(Instant, 30ms payload)</p>
      </div>
    </div>

    <AlertCard title="The SEO Advantage" icon="solar:magnifer-bug-linear">
      Google measures "Time to First Byte" (TTFB) and "Largest Contentful Paint" (LCP). Because Next.js sites are served from a global edge CDN (Content Delivery Network), your site loads instantly whether the user is in New York or Tokyo. Google rewards this speed with higher search rankings.
    </AlertCard>
  </>
);

const MathContent = () => (
  <>
    <DropCapP letter="A">
      business owner recently told me they were saving money by keeping their old, clunky website because it "still technically works." This is a fundamental misunderstanding of digital unit economics.
    </DropCapP>
    <P>
      A website is not a digital brochure; it is a mathematical funnel. Let's look at the actual cost of a poorly optimized layout.
    </P>

    <H2>The Mathematics of Friction</H2>
    
    <div className="my-10 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
      <div className="grid grid-cols-3 bg-neutral-100 dark:bg-neutral-900 font-bold text-sm tracking-wider uppercase text-neutral-600 dark:text-neutral-300 p-4 border-b border-black/10 dark:border-white/10">
        <div>Metric</div>
        <div>Old Website</div>
        <div>Optimized Nexlink</div>
      </div>
      <div className="grid grid-cols-3 p-4 text-neutral-800 dark:text-neutral-200 border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
        <div className="font-medium">Monthly Traffic</div>
        <div>5,000 visitors</div>
        <div className="text-purple-600 dark:text-purple-400">5,000 visitors</div>
      </div>
      <div className="grid grid-cols-3 p-4 text-neutral-800 dark:text-neutral-200 border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
        <div className="font-medium">Conversion Rate</div>
        <div className="text-red-500">0.8%</div>
        <div className="text-emerald-500 font-bold">2.4%</div>
      </div>
      <div className="grid grid-cols-3 p-4 text-neutral-800 dark:text-neutral-200 border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a]">
        <div className="font-medium">Monthly Leads</div>
        <div>40 leads</div>
        <div className="text-emerald-500 font-bold">120 leads</div>
      </div>
      <div className="grid grid-cols-3 p-4 text-neutral-800 dark:text-neutral-200 bg-white dark:bg-[#0a0a0a]">
        <div className="font-medium">Avg Lead Value</div>
        <div>$500</div>
        <div>$500</div>
      </div>
      <div className="grid grid-cols-3 p-6 text-lg border-t-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 border-b-0">
        <div className="font-bold text-neutral-900 dark:text-white">Monthly Revenue</div>
        <div className="font-medium text-neutral-500">$20,000</div>
        <div className="font-black text-emerald-600 dark:text-emerald-400">$60,000</div>
      </div>
    </div>

    <PullQuote>
      Holding onto a bad website to save $3,000 locally is costing this business $40,000 in lost revenue monthly.
    </PullQuote>

    <P>
      Every second a user waits for your mobile site to load, conversion drops by 7%. Every extra field in your contact form reduces submission rates. By applying proven UI/UX principles, we don't need to increase your ad spend—we just capture the revenue that is currently leaking out of your funnel.
    </P>
  </>
);

const DarkmodeContent = () => (
  <>
    <DropCapP letter="T">
      hrowing `invert(1)` on your body tag is not a dark mode strategy. While many themes simply swap white backgrounds for black and black text for white, true dual-theming requires an understanding of contrast physiology and spatial depth.
    </DropCapP>
    <P>
      At Nexlink Studio, every template is built with `next-themes` and a meticulously crafted Tailwind configuration. Here is our design philosophy for creating pitch-perfect dark interfaces.
    </P>

    <H2>1. Pure Black is the Enemy</H2>
    <P>
      Pure `#000000` causes severe eye strain when contrasted with white text due to high halation (the visual effect where light text appears to bleed into the dark background). Instead, our dark mode base is `#050505` or a very deep slate.
    </P>

    <H2>2. Elevation via Lightness, Not Just Shadows</H2>
    <P>
      In light mode, we use drop shadows (e.g., `shadow-lg`) to show that a floating card is closer to the user. In dark mode, shadows are nearly invisible.
    </P>
    <P>
      Instead of relying on shadows, we elevate elements by increasing their lightness. The background is `#050505`, a card is `#111111`, and a hovered card becomes `#1a1a1a`. We combine this with thin `/5` or `/10` opacity borders (`border-white/5`) to delineate edges perfectly.
    </P>

    <div className="my-10 p-8 bg-[#050505] rounded-3xl border border-white/5 relative overflow-hidden group">
      {/* Abstract light beam */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] pointer-events-none" />
      
      <p className="text-white/40 text-xs font-mono mb-6 pb-4 border-b border-white/10 uppercase tracking-widest">Dark Mode Elevation Example</p>
      
      <div className="flex flex-col sm:flex-row gap-6 relative z-10 w-full justify-center items-center py-6">
        {/* Layer 0 */}
        <div className="text-white/40 text-sm">Background (Base)</div>
        
        {/* Card Layer */}
        <div className="w-48 h-32 bg-white/[0.03] border border-white-5 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/[0.06] group-hover:border-purple-500/30">
           <span className="text-white text-sm font-medium">Elevated Card</span>
        </div>
      </div>
    </div>

    <AlertCard title="The Result" icon="solar:moon-fog-linear">
      The result is a UI that feels luxurious, deep, and extremely legible at night without searing the user's retinas. It inherently makes your brand feel premium.
    </AlertCard>
  </>
);


// Master Export
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "custom-website-strategy",
    tag: "Strategy",
    tagColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    title: "Why Most Small Businesses Don't Need a Custom Website",
    excerpt: "The traditional agency model is broken. Here's why starting from a proven template and customizing it beats building from scratch every time.",
    date: "April 14, 2026",
    readTime: "7 min read",
    gradient: "from-purple-700 to-indigo-600",
    coverImage: "/blog/blog_cover_strategy_1776606891486.png",
    featured: true,
    author: { name: "Jason W.", role: "Lead Designer", avatar: "J" },
    Content: StrategyContent,
  },
  {
    slug: "5-elements-landing-page",
    tag: "Design",
    tagColor: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20",
    title: "The 5 Elements Every High-Converting Landing Page Needs",
    excerpt: "After analyzing 200+ client websites, these are the conversion drivers that consistently outperform everything else.",
    date: "April 8, 2026",
    readTime: "5 min read",
    gradient: "from-sky-600 to-cyan-600",
    coverImage: "/blog/blog_cover_design_1776606909657.png",
    featured: false,
    author: { name: "Sarah M.", role: "Conversion Analyst", avatar: "S" },
    Content: DesignContent,
  },
  {
    slug: "zero-to-live-48-hours",
    tag: "Growth",
    tagColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    title: "From Zero to Live in 48 Hours: A Real Client Story",
    excerpt: "How a local restaurant went from no online presence to a fully optimized, booking-enabled website in two days flat.",
    date: "March 29, 2026",
    readTime: "6 min read",
    gradient: "from-emerald-600 to-teal-600",
    coverImage: "/blog/blog_cover_growth_1776606925664.png",
    featured: false,
    author: { name: "Michael R.", role: "Operations Lead", avatar: "M" },
    Content: GrowthContent,
  },
  {
    slug: "why-we-build-on-nextjs",
    tag: "Technical",
    tagColor: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    title: "Why We Build on Next.js (And What It Means for Your Speed)",
    excerpt: "A non-technical breakdown of why our tech stack delivers faster load times and better SEO than WordPress or Wix.",
    date: "March 21, 2026",
    readTime: "4 min read",
    gradient: "from-amber-600 to-orange-600",
    coverImage: "/blog/blog_cover_tech_1776606956094.png",
    featured: false,
    author: { name: "David L.", role: "Technical Director", avatar: "D" },
    Content: TechContent,
  },
  {
    slug: "real-cost-bad-website",
    tag: "Strategy",
    tagColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    title: "The Real Cost of a Bad Website (And How to Fix It)",
    excerpt: "Slow sites, confusing navigation, and weak CTAs are quietly costing businesses thousands. Here's the math.",
    date: "March 14, 2026",
    readTime: "8 min read",
    gradient: "from-rose-600 to-pink-600",
    coverImage: "/blog/blog_cover_math_1776606978869.png",
    featured: false,
    author: { name: "Jason W.", role: "Lead Designer", avatar: "J" },
    Content: MathContent,
  },
  {
    slug: "dark-mode-done-right",
    tag: "Design",
    tagColor: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20",
    title: "Dark Mode Done Right: Design Principles for Dual Themes",
    excerpt: "It's not just inverting colors. Here's our approach to building interfaces that feel native in both light and dark.",
    date: "March 6, 2026",
    readTime: "5 min read",
    gradient: "from-neutral-800 to-neutral-600",
    coverImage: "/blog/blog_cover_darkmode_1776606996365.png",
    featured: false,
    author: { name: "Elena C.", role: "UI/UX Specialist", avatar: "E" },
    Content: DarkmodeContent,
  },
];
