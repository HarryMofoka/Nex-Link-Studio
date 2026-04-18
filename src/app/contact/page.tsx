"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Icon } from "@iconify/react";
import { useState } from "react";

const BUDGETS = ["Under $2,500", "$2,500 – $5,000", "$5,000 – $10,000", "$10,000+", "Not sure yet"];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    website: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        {/* Header */}
        <div className="mb-16">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">
            CONTACT
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
            Let&apos;s build your<br />next website.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Tell us about your business and what you need. We&apos;ll get back to you within 24 hours with a clear plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-3xl p-12 text-center animate-[fadeIn_0.5s_ease-out]">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-600 mx-auto mb-6">
                  <Icon icon="solar:check-circle-linear" width="32" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-3">
                  Message sent!
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-base mb-8 max-w-md mx-auto">
                  Thank you for reaching out. We&apos;ll review your request and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", website: "", budget: "", message: "" }); }}
                  className="text-purple-700 dark:text-purple-400 hover:underline text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-3xl p-8 lg:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState(p => ({ ...p, name: e.target.value }))}
                      placeholder="John Doe"
                      className="w-full bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl px-4 py-3.5 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState(p => ({ ...p, email: e.target.value }))}
                      placeholder="john@company.com"
                      className="w-full bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl px-4 py-3.5 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">Current Website (optional)</label>
                  <input
                    type="url"
                    value={formState.website}
                    onChange={e => setFormState(p => ({ ...p, website: e.target.value }))}
                    placeholder="https://yoursite.com"
                    className="w-full bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl px-4 py-3.5 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                  />
                </div>

                <div className="mb-5">
                  <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">Budget Range</label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map(b => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormState(p => ({ ...p, budget: b }))}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                          formState.budget === b
                            ? "bg-purple-600 text-white shadow-[0_0_12px_rgba(52,25,224,0.3)]"
                            : "bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-white/10 border border-black/5 dark:border-white/5"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">Tell us about your project *</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={e => setFormState(p => ({ ...p, message: e.target.value }))}
                    placeholder="What does your business do? What kind of website do you need? Any specific goals?"
                    className="w-full bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-xl px-4 py-3.5 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full text-base font-semibold transition shadow-[0_0_25px_rgba(52,25,224,0.35)]"
                >
                  Send Message <Icon icon="solar:arrow-right-linear" width="18" />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-700 dark:text-purple-400">
                  <Icon icon="solar:letter-linear" width="22" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">Email us</p>
                  <p className="text-xs text-neutral-500">hello@nexlinkstudio.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <Icon icon="solar:stopwatch-linear" width="22" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">Response time</p>
                  <p className="text-xs text-neutral-500">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-600">
                  <Icon icon="solar:global-linear" width="22" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white">Remote studio</p>
                  <p className="text-xs text-neutral-500">We work with clients worldwide</p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-neutral-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl p-6">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Quick links</p>
              <div className="flex flex-col gap-3">
                <TransitionLink href="/designs" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-purple-700 dark:hover:text-purple-400 transition flex items-center gap-2">
                  <Icon icon="solar:arrow-right-linear" width="14" /> Browse Designs
                </TransitionLink>
                <TransitionLink href="/process" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-purple-700 dark:hover:text-purple-400 transition flex items-center gap-2">
                  <Icon icon="solar:arrow-right-linear" width="14" /> How It Works
                </TransitionLink>
                <TransitionLink href="/pricing" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-purple-700 dark:hover:text-purple-400 transition flex items-center gap-2">
                  <Icon icon="solar:arrow-right-linear" width="14" /> Pricing
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
