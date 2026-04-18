"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="w-full relative py-32 border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col items-center mb-16 lg:mb-24 text-center">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 dark:text-orange-500">
            PRICING
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 mb-8 dark:text-white">
            Simple, transparent pricing
          </h2>

          {/* Custom Pricing Toggle */}
          <label className="flex items-center gap-4 cursor-pointer group">
            <span
              className={`text-sm font-medium transition ${
                !isYearly
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </span>
            <div
              className="w-12 h-6 bg-black/10 rounded-full relative border border-black/5 flex items-center p-1 transition-colors group-hover:bg-black/20 dark:bg-white/10 dark:border-white/5 dark:group-hover:bg-white/20"
              onClick={() => setIsYearly(!isYearly)}
            >
              <div
                className={`w-4 h-4 rounded-full shadow-sm transition-transform duration-300 dark:bg-white bg-neutral-900 ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </div>
            <span
              className={`text-sm font-medium transition ${
                isYearly
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-900 dark:text-white"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly{" "}
              <span className="text-purple-700 ml-1 text-xs px-2 py-0.5 bg-purple-600/20 rounded-full border border-purple-600/50 dark:text-orange-500 dark:bg-orange-500/10 dark:border-orange-500/20">
                -20%
              </span>
            </span>
          </label>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Starter Tier */}
          <div className="bg-white border border-black/5 rounded-3xl p-8 flex flex-col shadow-sm dark:bg-white/[0.02] dark:border-white/5">
            <h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2 dark:text-white">
              Design Plan
            </h3>
            <p className="text-sm text-neutral-600 mb-6 dark:text-neutral-500">
              Perfect for a standard website launch.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">
                ${isYearly ? "1,999" : "2,499"}
              </span>
              <span className="text-sm text-neutral-500">/mo</span>
            </div>
            <button className="w-full bg-black/5 hover:bg-black/10 border border-black/10 text-neutral-900 py-3 rounded-full text-sm font-medium transition mb-8 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white">
              Get Started
            </button>
            <ul className="flex flex-col gap-4 text-sm text-neutral-600 flex-1 dark:text-neutral-400">
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:check-circle-linear"
                  width="18"
                  height="18"
                  className="text-neutral-500"
                />
                Fast Website Build
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:check-circle-linear"
                  width="18"
                  height="18"
                  className="text-neutral-500"
                />
                Average 48 hour delivery
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:check-circle-linear"
                  width="18"
                  height="18"
                  className="text-neutral-500"
                />
                Included Customization
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:check-circle-linear"
                  width="18"
                  height="18"
                  className="text-neutral-500"
                />
                Unlimited team users
              </li>
            </ul>
          </div>

          {/* Pro Tier (Highlighted) */}
          <div className="bg-white border border-purple-600 rounded-3xl p-8 flex flex-col relative shadow-[0_0_40px_rgba(147,51,234,0.3)] transform lg:-translate-y-4 dark:bg-neutral-900/60 dark:border-orange-500/30 dark:shadow-[0_0_40px_rgba(255,42,0,0.05)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-xs font-medium px-4 py-1 rounded-full tracking-wide dark:from-orange-600 dark:to-red-600">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2 dark:text-white">
              Pro Plan
            </h3>
            <p className="text-sm text-neutral-600 mb-6 dark:text-neutral-400">
              Everything you need for a complex business.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">
                ${isYearly ? "3,999" : "4,999"}
              </span>
              <span className="text-sm text-neutral-500">/mo</span>
            </div>
            <button className="w-full bg-neutral-900 text-white py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition mb-8 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
              Start Now
            </button>
            <ul className="flex flex-col gap-4 text-sm text-neutral-700 flex-1 dark:text-neutral-300">
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:check-circle-linear"
                  width="18"
                  height="18"
                  className="text-purple-700 dark:text-orange-500"
                />
                Full Suite Website Build
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:check-circle-linear"
                  width="18"
                  height="18"
                  className="text-purple-700 dark:text-orange-500"
                />
                Webflow Development
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:check-circle-linear"
                  width="18"
                  height="18"
                  className="text-purple-700 dark:text-orange-500"
                />
                Priority Support
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:check-circle-linear"
                  width="18"
                  height="18"
                  className="text-purple-700 dark:text-orange-500"
                />
                Included Customization
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:check-circle-linear"
                  width="18"
                  height="18"
                  className="text-purple-700 dark:text-orange-500"
                />
                Unlimited team users
              </li>
            </ul>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-white border border-black/5 rounded-3xl p-8 flex flex-col shadow-sm dark:bg-white/[0.02] dark:border-white/5">
            <h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2 dark:text-white">
              Dedicated
            </h3>
            <p className="text-sm text-neutral-600 mb-6 dark:text-neutral-500">
              Custom capacity for enterprise teams.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">
                Custom
              </span>
              <span className="text-sm text-neutral-500">/mo</span>
            </div>
            <button className="w-full bg-black/5 hover:bg-black/10 border border-black/10 text-neutral-900 py-3 rounded-full text-sm font-medium transition mb-8 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-white">
              Contact Us
            </button>
            <ul className="flex flex-col gap-4 text-sm text-neutral-600 flex-1 dark:text-neutral-400">
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:check-circle-linear"
                  width="18"
                  height="18"
                  className="text-neutral-500"
                />
                Dedicated Designers
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:check-circle-linear"
                  width="18"
                  height="18"
                  className="text-neutral-500"
                />
                Real-time Collaboration
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:check-circle-linear"
                  width="18"
                  height="18"
                  className="text-neutral-500"
                />
                Dedicated Product Manager
              </li>
              <li className="flex items-center gap-3">
                <Icon
                  icon="solar:check-circle-linear"
                  width="18"
                  height="18"
                  className="text-neutral-500"
                />
                Daily Syncs & Reports
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
