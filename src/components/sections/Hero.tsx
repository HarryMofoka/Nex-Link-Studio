"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export function Hero() {
  return (
    <main className="w-full max-w-[1400px] mx-auto px-6 flex-grow flex flex-col justify-center relative z-10 pb-16 lg:pb-8 pt-16 lg:pt-20 min-h-[90vh]">
      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full mt-auto mb-16 lg:mb-24">
        {/* Left: Headline & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="max-w-3xl lg:pr-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-neutral-900 leading-[1.05] mb-12 dark:text-white">
              Launch a premium website
              <br />
              in days—not months
            </h1>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="#services"
                className="bg-neutral-900 text-white px-9 py-4 rounded-full text-lg font-medium hover:bg-neutral-800 transition duration-300 flex items-center gap-2 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                Browse Designs
              </Link>
              <Link
                href="#pricing"
                className="bg-transparent text-neutral-900 border border-black/20 px-9 py-4 rounded-full text-lg font-medium hover:bg-black/5 transition duration-300 dark:text-white dark:border-white/20 dark:hover:bg-white/5"
              >
                Start Your Website
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Card UI */}
        <div className="lg:col-span-5 relative w-full flex lg:justify-end items-center h-full">
          <div className="bg-white/60 backdrop-blur-2xl border border-black/5 rounded-[2rem] p-8 pb-0 w-full max-w-[440px] relative overflow-hidden shadow-2xl shadow-purple-900/5 mb-0 dark:bg-neutral-900/40 dark:border-white/5 dark:shadow-purple-900">
            {/* Card Header */}
            <div className="flex justify-between items-start mb-10">
              <h3 className="text-3xl font-medium text-neutral-900 tracking-tight leading-[1.2] max-w-[220px] dark:text-white">
                New era of digital design
              </h3>
              <div
                className="w-12 h-12 rounded-full bg-purple-600/20 border border-purple-600/50 flex items-center justify-center text-purple-700 shadow-[0_0_20px_rgba(147,51,234,0.5)] dark:bg-purple-600 dark:border-purple-600 dark:text-purple-600 dark:shadow-[0_0_15px_rgba(255,42,0,0.2)]"
              >
                <Icon
                  icon="solar:pen-new-round-linear"
                  width="24"
                  height="24"
                  style={{ strokeWidth: 1.5 }}
                />
              </div>
            </div>

            {/* Phone Mockup inside Card */}
            <div className="w-full bg-neutral-50 border-[4px] border-neutral-200 rounded-t-[2.5rem] pt-5 px-5 h-[320px] relative mt-4 shadow-inner dark:bg-black dark:border-neutral-800">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-200 rounded-full flex items-center justify-between px-3 border border-black/5 dark:bg-black dark:border-white/5">
                <span className="text-xs text-neutral-900 font-medium tracking-tight dark:text-white">
                  12:48
                </span>
                <div className="flex gap-1.5 items-center">
                  <Icon
                    icon="solar:chart-2-linear"
                    width="12"
                    height="12"
                    className="text-neutral-900 dark:text-white"
                    style={{ strokeWidth: 1.5 }}
                  />
                  <Icon
                    icon="solar:battery-charge-linear"
                    width="14"
                    height="14"
                    className="text-neutral-900 dark:text-white"
                    style={{ strokeWidth: 1.5 }}
                  />
                </div>
              </div>

              {/* Mockup Content */}
              <div className="mt-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center dark:bg-white/10">
                    <Icon
                      icon="solar:pen-new-round-linear"
                      width="16"
                      height="16"
                      className="text-neutral-900 dark:text-white"
                      style={{ strokeWidth: 1.5 }}
                    />
                  </div>
                  <h4 className="text-neutral-900 font-medium text-lg tracking-tight dark:text-white">
                    Design Team
                  </h4>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl rounded-tl-sm p-4 w-[85%] border border-black/5 dark:bg-neutral-800/60 dark:border-white/5">
                    <p className="text-neutral-600 text-base font-normal leading-relaxed dark:text-neutral-300">
                      Hi. I&apos;ve finished the new wireframes and UI concepts for the project.
                    </p>
                  </div>
                  <p className="text-neutral-400 text-xs ml-1 -mt-2 dark:text-neutral-600">
                    Just now
                  </p>

                  <div className="bg-black/5 hover:bg-black/10 transition cursor-pointer border border-black/10 rounded-xl p-3 w-[70%] flex items-center justify-between self-end mt-2 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10">
                    <span className="text-neutral-900 text-base font-medium dark:text-white">
                      Review Designs
                    </span>
                    <Icon
                      icon="solar:arrow-right-linear"
                      width="16"
                      height="16"
                      className="text-neutral-500 dark:text-neutral-400"
                      style={{ strokeWidth: 1.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Details & Stats */}
      <div className="w-full flex justify-between items-end border-t border-black/5 pt-10 pb-4 mt-auto dark:border-white/5">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-12 w-full lg:w-[85%] pr-0 lg:pr-12">
          {/* Description */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-lg font-medium text-neutral-900 mb-3 tracking-tight dark:text-white">
              <span>Proven Designs</span>
              <div className="w-1.5 h-1.5 bg-neutral-300 rounded-full dark:bg-neutral-600" />
              <span>Fast Execution</span>
            </div>
            <p className="text-neutral-600 text-lg leading-relaxed font-normal dark:text-neutral-400">
              Start from a proven design, customize it to your business, and go
              live fast. We design and build high-converting websites for
              businesses that want results—not delays.
            </p>
          </div>

          {/* Stats Metric */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="flex items-center -space-x-3">
              <div className="w-10 h-10 rounded-full bg-neutral-100/80 backdrop-blur-sm border border-neutral-200/50 dark:bg-neutral-800/80 dark:border-neutral-700/50" />
              <div className="w-10 h-10 rounded-full bg-neutral-200/80 backdrop-blur-sm border border-neutral-300/50 dark:bg-neutral-700/80 dark:border-neutral-600/50" />
              <div className="w-10 h-10 rounded-full bg-neutral-300/80 backdrop-blur-sm border border-neutral-400/50 dark:bg-neutral-600/80 dark:border-neutral-500/50" />
              <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center dark:bg-white dark:border-neutral-300">
                <div className="w-2.5 h-2.5 bg-white rounded-full dark:bg-neutral-900" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-neutral-500 text-base mb-1 font-normal">
                Built for speed, clarity, and
              </span>
              <div className="flex items-start text-neutral-900 leading-none dark:text-white">
                <span className="text-3xl font-medium tracking-tight mt-2">
                  Real Business Growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
