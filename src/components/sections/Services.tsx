"use client";

import { Icon } from "@iconify/react";

export function Services() {
  return (
    <section
      id="services"
      className="w-full relative py-32 border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">
            HOW IT WORKS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 mb-6 dark:text-white">
            Choose, customize,
            <br />
            and launch.
          </h2>
        </div>

        {/* Dashboard Mockup */}
        <div className="w-full bg-white/80 backdrop-blur-3xl border border-black/10 rounded-2xl lg:rounded-[2rem] p-4 lg:p-6 shadow-2xl overflow-hidden dark:bg-neutral-950/80 dark:border-white/10">
          <div className="w-full bg-neutral-50 border border-black/5 rounded-xl lg:rounded-2xl h-[500px] lg:h-[700px] flex overflow-hidden relative dark:bg-[#0a0a0a] dark:border-white/5">
            {/* Sidebar */}
            <div className="w-16 lg:w-64 border-r border-black/5 bg-white/50 hidden md:flex flex-col justify-between py-6 dark:border-white/5 dark:bg-black/50">
              <div className="px-4 lg:px-6 flex flex-col gap-8">
                <span className="text-neutral-900 font-medium tracking-tighter text-xl hidden lg:block dark:text-white">
                  NS
                </span>
                <span className="text-neutral-900 font-medium tracking-tighter text-xl lg:hidden text-center dark:text-white">
                  N
                </span>
                <nav className="flex flex-col gap-2">
                  <div className="w-full h-10 bg-black/5 rounded-lg flex items-center px-3 gap-3 dark:bg-white/10">
                    <Icon
                      icon="solar:home-smile-linear"
                      width="20"
                      height="20"
                      className="text-neutral-900 dark:text-white"
                      style={{ strokeWidth: 1.5 }}
                    />
                    <span className="text-sm text-neutral-900 font-medium hidden lg:block dark:text-white">
                      Dashboard
                    </span>
                  </div>
                  <div className="w-full h-10 hover:bg-black/5 rounded-lg flex items-center px-3 gap-3 cursor-pointer transition dark:hover:bg-white/5">
                    <Icon
                      icon="solar:folder-with-files-linear"
                      width="20"
                      height="20"
                      className="text-neutral-500"
                      style={{ strokeWidth: 1.5 }}
                    />
                    <span className="text-sm text-neutral-500 font-medium hidden lg:block">
                      Projects
                    </span>
                  </div>
                  <div className="w-full h-10 hover:bg-black/5 rounded-lg flex items-center px-3 gap-3 cursor-pointer transition dark:hover:bg-white/5">
                    <Icon
                      icon="solar:chat-round-dots-linear"
                      width="20"
                      height="20"
                      className="text-neutral-500"
                      style={{ strokeWidth: 1.5 }}
                    />
                    <span className="text-sm text-neutral-500 font-medium hidden lg:block">
                      Feedback
                    </span>
                  </div>
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 lg:p-10 flex flex-col overflow-y-auto no-scrollbar relative">
              {/* Top Header */}
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-1 dark:text-white">
                    Launch Process
                  </h3>
                  <p className="text-sm text-neutral-500">
                    Three simple steps to a better website.
                  </p>
                </div>
                <button className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                  New Project
                </button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
                <div className="bg-white border border-black/5 rounded-xl p-5 shadow-sm dark:bg-white/5 dark:border-white/5">
                  <span className="text-neutral-500 text-sm mb-2 block">
                    Step 1
                  </span>
                  <span className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-white">
                    Choose a design
                  </span>
                </div>
                <div className="bg-white border border-black/5 rounded-xl p-5 shadow-sm dark:bg-white/5 dark:border-white/5">
                  <span className="text-neutral-500 text-sm mb-2 block">
                    Step 2
                  </span>
                  <span className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-white">
                    Tell us changes
                  </span>
                </div>
                <div className="bg-white border border-black/5 rounded-xl p-5 shadow-sm dark:bg-white/5 dark:border-white/5">
                  <span className="text-neutral-500 text-sm mb-2 block">
                    Step 3
                  </span>
                  <span className="text-3xl font-medium tracking-tight text-purple-700 dark:text-purple-500">
                    Launch fast
                  </span>
                </div>
              </div>

              {/* Table Area */}
              <div className="w-full bg-white border border-black/5 rounded-xl flex-1 flex flex-col shadow-sm dark:bg-white/[0.02] dark:border-white/5">
                <div className="h-12 border-b border-black/5 flex items-center px-6 gap-4 dark:border-white/5">
                  <div className="w-4 h-4 rounded border border-black/20 dark:border-white/20" />
                  <div className="w-1/3 h-3 bg-black/10 rounded dark:bg-white/10" />
                  <div className="w-1/4 h-3 bg-black/10 rounded dark:bg-white/10" />
                  <div className="w-1/4 h-3 bg-black/10 rounded dark:bg-white/10" />
                </div>
                <div className="h-16 border-b border-black/5 flex items-center px-6 gap-4 hover:bg-black/5 transition dark:border-white/5 dark:hover:bg-white/5">
                  <div className="w-4 h-4 rounded bg-black/20 dark:bg-white/20" />
                  <div className="w-1/3 h-3 bg-black/20 rounded dark:bg-white/20" />
                  <div className="w-1/4 h-3 bg-black/10 rounded dark:bg-white/10" />
                  <div className="w-1/4 h-3 bg-purple-600/80 rounded dark:bg-purple-600" />
                </div>
                <div className="h-16 border-b border-black/5 flex items-center px-6 gap-4 hover:bg-black/5 transition dark:border-white/5 dark:hover:bg-white/5">
                  <div className="w-4 h-4 rounded border border-black/20 dark:border-white/20" />
                  <div className="w-1/3 h-3 bg-black/10 rounded dark:bg-white/10" />
                  <div className="w-1/4 h-3 bg-black/10 rounded dark:bg-white/10" />
                  <div className="w-1/4 h-3 bg-black/5 rounded dark:bg-white/5" />
                </div>
                <div className="h-16 flex items-center px-6 gap-4 hover:bg-black/5 transition dark:hover:bg-white/5">
                  <div className="w-4 h-4 rounded border border-black/20 dark:border-white/20" />
                  <div className="w-1/3 h-3 bg-black/10 rounded dark:bg-white/10" />
                  <div className="w-1/4 h-3 bg-black/10 rounded dark:bg-white/10" />
                  <div className="w-1/4 h-3 bg-purple-600/80 rounded dark:bg-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
