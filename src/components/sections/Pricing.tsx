"use client";

import { Icon } from "@iconify/react";
import { TransitionLink } from "@/components/ui/TransitionLink";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full relative py-32 border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col items-center mb-16 lg:mb-24 text-center">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 dark:text-purple-500">
            DIGITAL INVESTMENT
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 mb-6 dark:text-white">
            Proven conversion architectures.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
            For clients who want a standardized, battle-tested system ready to deploy immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Starter Tier */}
          <div className="bg-white border border-black/5 rounded-3xl p-8 flex flex-col shadow-sm dark:bg-white/[0.02] dark:border-white/5">
            <h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2 dark:text-white">
              Starter Build
            </h3>
            <p className="text-sm text-neutral-600 mb-6 dark:text-neutral-500">
              Foundational online presence.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">
                R 4,500+
              </span>
            </div>
            <TransitionLink href="/pricing" className="w-full block text-center bg-black/5 hover:bg-black/10 border border-black/10 text-neutral-900 py-3 rounded-full text-sm font-medium transition mb-8 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white">
              Get Started
            </TransitionLink>
            <ul className="flex flex-col gap-4 text-sm text-neutral-600 flex-1 dark:text-neutral-400">
              <li className="flex items-center gap-3"><Icon icon="solar:check-circle-linear" width="18" height="18" className="text-neutral-500" /> 1-3 Page Layout</li>
              <li className="flex items-center gap-3"><Icon icon="solar:check-circle-linear" width="18" height="18" className="text-neutral-500" /> Mobile Responsive</li>
              <li className="flex items-center gap-3"><Icon icon="solar:check-circle-linear" width="18" height="18" className="text-neutral-500" /> Basic SEO Setup</li>
              <li className="flex items-center gap-3"><Icon icon="solar:check-circle-linear" width="18" height="18" className="text-neutral-500" /> WhatsApp Integration</li>
            </ul>
          </div>

          {/* Growth Tier (Highlighted) */}
          <div className="bg-white border border-purple-600 rounded-3xl p-8 flex flex-col relative shadow-[0_0_40px_rgba(147,51,234,0.3)] transform lg:-translate-y-4 dark:bg-neutral-900/60 dark:border-purple-500 dark:shadow-[0_0_40px_rgba(52,25,224,0.05)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-xs font-medium px-4 py-1 rounded-full tracking-wide dark:from-purple-600 dark:to-purple-600">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2 dark:text-white">
              Growth System
            </h3>
            <p className="text-sm text-neutral-600 mb-6 dark:text-neutral-400">
              Proper UX/UI structuring.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">
                R 8,000+
              </span>
            </div>
            <TransitionLink href="/pricing" className="w-full block text-center bg-neutral-900 text-white py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition mb-8 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
              Start Now
            </TransitionLink>
            <ul className="flex flex-col gap-4 text-sm text-neutral-700 flex-1 dark:text-neutral-300">
              <li className="flex items-center gap-3"><Icon icon="solar:check-circle-linear" width="18" height="18" className="text-purple-700 dark:text-purple-500" /> 4-8 Custom Pages</li>
              <li className="flex items-center gap-3"><Icon icon="solar:check-circle-linear" width="18" height="18" className="text-purple-700 dark:text-purple-500" /> Lead Capture Forms</li>
              <li className="flex items-center gap-3"><Icon icon="solar:check-circle-linear" width="18" height="18" className="text-purple-700 dark:text-purple-500" /> Google Analytics Init</li>
              <li className="flex items-center gap-3"><Icon icon="solar:check-circle-linear" width="18" height="18" className="text-purple-700 dark:text-purple-500" /> Advanced Metadata Setup</li>
              <li className="flex items-center gap-3"><Icon icon="solar:check-circle-linear" width="18" height="18" className="text-purple-700 dark:text-purple-500" /> Multiple Revisions</li>
            </ul>
          </div>

          {/* Ecosystem Tier */}
          <div className="bg-white border border-black/5 rounded-3xl p-8 flex flex-col shadow-sm dark:bg-white/[0.02] dark:border-white/5">
            <h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2 dark:text-white">
              Conversion Ecosystem
            </h3>
            <p className="text-sm text-neutral-600 mb-6 dark:text-neutral-500">
              Built for paid traffic.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">
                R 20,000+
              </span>
            </div>
            <TransitionLink href="/pricing" className="w-full block text-center bg-black/5 hover:bg-black/10 border border-black/10 text-neutral-900 py-3 rounded-full text-sm font-medium transition mb-8 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white">
              Build Platform
            </TransitionLink>
            <ul className="flex flex-col gap-4 text-sm text-neutral-600 flex-1 dark:text-neutral-400">
              <li className="flex items-center gap-3"><Icon icon="solar:check-circle-linear" width="18" height="18" className="text-neutral-500" /> Tailored User Journeys</li>
              <li className="flex items-center gap-3"><Icon icon="solar:check-circle-linear" width="18" height="18" className="text-neutral-500" /> Dedicated Landing Pages</li>
              <li className="flex items-center gap-3"><Icon icon="solar:check-circle-linear" width="18" height="18" className="text-neutral-500" /> Automated Email Flows</li>
              <li className="flex items-center gap-3"><Icon icon="solar:check-circle-linear" width="18" height="18" className="text-neutral-500" /> CRM Integrations</li>
              <li className="flex items-center gap-3"><Icon icon="solar:check-circle-linear" width="18" height="18" className="text-neutral-500" /> Performance Dashboards</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <TransitionLink href="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-purple-700 hover:text-purple-800 transition dark:text-purple-400 dark:hover:text-purple-300">
            View full detailed pricing logic & interactive estimator <Icon icon="solar:arrow-right-linear" />
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
