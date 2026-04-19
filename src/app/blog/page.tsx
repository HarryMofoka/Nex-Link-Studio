"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Icon } from "@iconify/react";

const POSTS = [
  {
    tag: "Strategy",
    tagColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    title: "Why Most Small Businesses Don't Need a Custom Website",
    excerpt: "The traditional agency model is broken. Here's why starting from a proven template and customizing it beats building from scratch every time.",
    date: "April 14, 2026",
    readTime: "7 min read",
    gradient: "from-purple-700 to-indigo-600",
    featured: true,
  },
  {
    tag: "Design",
    tagColor: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20",
    title: "The 5 Elements Every High-Converting Landing Page Needs",
    excerpt: "After analyzing 200+ client websites, these are the conversion drivers that consistently outperform everything else.",
    date: "April 8, 2026",
    readTime: "5 min read",
    gradient: "from-sky-600 to-cyan-600",
    featured: false,
  },
  {
    tag: "Growth",
    tagColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    title: "From Zero to Live in 48 Hours: A Real Client Story",
    excerpt: "How a local restaurant went from no online presence to a fully optimized, booking-enabled website in two days flat.",
    date: "March 29, 2026",
    readTime: "6 min read",
    gradient: "from-emerald-600 to-teal-600",
    featured: false,
  },
  {
    tag: "Technical",
    tagColor: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    title: "Why We Build on Next.js (And What It Means for Your Speed)",
    excerpt: "A non-technical breakdown of why our tech stack delivers faster load times and better SEO than WordPress or Wix.",
    date: "March 21, 2026",
    readTime: "4 min read",
    gradient: "from-amber-600 to-orange-600",
    featured: false,
  },
  {
    tag: "Strategy",
    tagColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    title: "The Real Cost of a Bad Website (And How to Fix It)",
    excerpt: "Slow sites, confusing navigation, and weak CTAs are quietly costing businesses thousands. Here's the math.",
    date: "March 14, 2026",
    readTime: "8 min read",
    gradient: "from-rose-600 to-pink-600",
    featured: false,
  },
  {
    tag: "Design",
    tagColor: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20",
    title: "Dark Mode Done Right: Design Principles for Dual Themes",
    excerpt: "It's not just inverting colors. Here's our approach to building interfaces that feel native in both light and dark.",
    date: "March 6, 2026",
    readTime: "5 min read",
    gradient: "from-neutral-800 to-neutral-600",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = POSTS.find(p => p.featured);
  const rest = POSTS.filter(p => !p.featured);

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        <div className="mb-16">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">BLOG</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
            Insights &amp; ideas.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Strategy, design thinking, and practical advice for businesses building their digital presence.
          </p>
        </div>

        {/* Featured Post */}
        {featured && (
          <div className="mb-16 group cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/30 dark:hover:border-purple-500/30 hover:shadow-2xl transition-all duration-500">
              <div className={`w-full h-64 lg:h-auto bg-gradient-to-br ${featured.gradient} flex items-center justify-center`}>
                <Icon icon="solar:pen-new-round-linear" width="80" className="text-white/20 group-hover:text-white/40 transition-all duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${featured.tagColor}`}>{featured.tag}</span>
                  <span className="text-xs text-neutral-400">Featured</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition">{featured.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-neutral-400">
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full" />
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(post => (
            <article key={post.title} className="group bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 dark:hover:border-purple-500/30 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col">
              <div className={`w-full h-40 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                <Icon icon="solar:document-text-linear" width="40" className="text-white/20 group-hover:text-white/40 transition-all duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${post.tagColor}`}>{post.tag}</span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition">{post.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-neutral-400 mt-4 pt-4 border-t border-black/5 dark:border-white/5">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
