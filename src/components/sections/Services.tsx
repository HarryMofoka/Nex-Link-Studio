"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

type TabState = "dashboard" | "projects" | "feedback";

export function Services() {
  const [activeTab, setActiveTab] = useState<TabState>("dashboard");

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
          <div className="w-full bg-neutral-50 border border-black/5 rounded-xl lg:rounded-2xl h-[600px] lg:h-[700px] flex overflow-hidden relative dark:bg-[#0a0a0a] dark:border-white/5">
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
                  <button
                    onClick={() => setActiveTab("dashboard")}
                    className={`w-full h-10 rounded-lg flex items-center px-3 gap-3 transition ${
                      activeTab === "dashboard"
                        ? "bg-black/5 dark:bg-white/10"
                        : "hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <Icon
                      icon="solar:home-smile-linear"
                      width="20"
                      height="20"
                      className={
                        activeTab === "dashboard"
                          ? "text-purple-700 dark:text-purple-500"
                          : "text-neutral-500"
                      }
                      style={{ strokeWidth: 1.5 }}
                    />
                    <span
                      className={`text-sm font-medium hidden lg:block ${
                        activeTab === "dashboard"
                          ? "text-neutral-900 dark:text-white"
                          : "text-neutral-500"
                      }`}
                    >
                      Dashboard
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab("projects")}
                    className={`w-full h-10 rounded-lg flex items-center px-3 gap-3 transition ${
                      activeTab === "projects"
                        ? "bg-black/5 dark:bg-white/10"
                        : "hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <Icon
                      icon="solar:folder-with-files-linear"
                      width="20"
                      height="20"
                      className={
                        activeTab === "projects"
                          ? "text-purple-700 dark:text-purple-500"
                          : "text-neutral-500"
                      }
                      style={{ strokeWidth: 1.5 }}
                    />
                    <span
                      className={`text-sm font-medium hidden lg:block ${
                        activeTab === "projects"
                          ? "text-neutral-900 dark:text-white"
                          : "text-neutral-500"
                      }`}
                    >
                      Projects
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab("feedback")}
                    className={`w-full h-10 rounded-lg flex items-center px-3 gap-3 transition ${
                      activeTab === "feedback"
                        ? "bg-black/5 dark:bg-white/10"
                        : "hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <Icon
                      icon="solar:chat-round-dots-linear"
                      width="20"
                      height="20"
                      className={
                        activeTab === "feedback"
                          ? "text-purple-700 dark:text-purple-500"
                          : "text-neutral-500"
                      }
                      style={{ strokeWidth: 1.5 }}
                    />
                    <span
                      className={`text-sm font-medium hidden lg:block ${
                        activeTab === "feedback"
                          ? "text-neutral-900 dark:text-white"
                          : "text-neutral-500"
                      }`}
                    >
                      Feedback
                    </span>
                  </button>
                </nav>
              </div>

              {/* Bottom Sidebar Action */}
              <div className="px-4 lg:px-6">
                <button className="w-full h-10 flex items-center justify-center lg:justify-start lg:px-3 gap-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-neutral-500 transition">
                  <Icon icon="solar:logout-2-linear" width="20" height="20" />
                  <span className="text-sm font-medium hidden lg:block">Log out</span>
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 lg:p-10 flex flex-col overflow-y-auto no-scrollbar relative transition-opacity duration-300">
              
              {/* Dashboard Content */}
              {activeTab === "dashboard" && (
                <div className="animate-[fadeIn_0.5s_ease-out]">
                  <div className="flex justify-between items-center mb-10">
                    <div>
                      <h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-1 dark:text-white">
                        Overview
                      </h3>
                      <p className="text-sm text-neutral-500">
                        A bird&apos;s eye view of your website&apos;s delivery process.
                      </p>
                    </div>
                    <button className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      New Request
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white border border-black/5 rounded-xl p-5 shadow-sm dark:bg-white/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition cursor-default">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon icon="solar:rocket-linear" width="16" className="text-purple-700" />
                        <span className="text-neutral-500 text-xs font-medium uppercase tracking-wider">Active</span>
                      </div>
                      <span className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-white">2 <span className="text-base text-neutral-400">Projects</span></span>
                    </div>
                    <div className="bg-white border border-black/5 rounded-xl p-5 shadow-sm dark:bg-white/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition cursor-default">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon icon="solar:stopwatch-linear" width="16" className="text-purple-700" />
                        <span className="text-neutral-500 text-xs font-medium uppercase tracking-wider">ETA</span>
                      </div>
                      <span className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-white">48<span className="text-base text-neutral-400">h</span></span>
                    </div>
                    <div className="bg-white border border-black/5 rounded-xl p-5 shadow-sm dark:bg-white/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition cursor-default">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon icon="solar:check-circle-linear" width="16" className="text-purple-700" />
                        <span className="text-neutral-500 text-xs font-medium uppercase tracking-wider">Revisions</span>
                      </div>
                      <span className="text-3xl font-medium tracking-tight text-purple-700 dark:text-purple-500">0 <span className="text-base text-neutral-400">Pending</span></span>
                    </div>
                  </div>

                  <div className="w-full bg-white border border-black/5 rounded-xl flex-1 flex flex-col shadow-sm dark:bg-white/[0.02] dark:border-white/5">
                     <div className="p-5 border-b border-black/5 dark:border-white/5">
                        <h4 className="text-sm font-medium text-neutral-900 dark:text-white">Recent Activity</h4>
                     </div>
                     <div className="p-5 flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-700 shrink-0">
                           <Icon icon="solar:pen-new-round-linear" width="16" />
                        </div>
                        <div>
                           <p className="text-sm text-neutral-900 dark:text-white font-medium mb-1">Design Draft Uploaded</p>
                           <p className="text-xs text-neutral-500 mb-2">The initial wireframes for your landing page are ready for review.</p>
                           <span className="text-[10px] text-neutral-400 font-medium tracking-wide uppercase">2 hours ago</span>
                        </div>
                     </div>
                     <div className="p-5 flex items-start gap-4 border-t border-black/5 dark:border-white/5">
                        <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-600 shrink-0">
                           <Icon icon="solar:check-circle-linear" width="16" />
                        </div>
                        <div>
                           <p className="text-sm text-neutral-900 dark:text-white font-medium mb-1">Onboarding Completed</p>
                           <p className="text-xs text-neutral-500 mb-2">Brand assets and typography guidelines have been successfully imported.</p>
                           <span className="text-[10px] text-neutral-400 font-medium tracking-wide uppercase">1 day ago</span>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {/* Projects Content */}
              {activeTab === "projects" && (
                <div className="h-full flex flex-col animate-[fadeIn_0.5s_ease-out]">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white">
                      Your Projects
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="group bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-purple-500/50 dark:hover:border-purple-500/50 transition duration-300 w-full cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 px-3 py-1 rounded-bl-lg rounded-tr-xl text-xs font-medium border-b border-l border-yellow-500/20">In Progress</div>
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-700 mb-4">
                           <Icon icon="solar:figma-linear" width="24" />
                        </div>
                        <h4 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">TechCorp Main Site</h4>
                        <p className="text-sm text-neutral-500 mb-6">Redesigning the primary SaaS conversion flow and billing portal.</p>
                        <div className="flex justify-between items-center w-full">
                           <div className="flex -space-x-2">
                              <div className="w-6 h-6 rounded-full bg-neutral-200 border-2 border-white dark:border-neutral-900"></div>
                              <div className="w-6 h-6 rounded-full bg-neutral-300 border-2 border-white dark:border-neutral-900"></div>
                           </div>
                           <div className="flex items-center gap-1 text-purple-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                              View Project <Icon icon="solar:arrow-right-linear" />
                           </div>
                        </div>
                     </div>

                     <div className="group bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-black/20 dark:hover:border-white/20 transition duration-300 w-full cursor-pointer relative">
                        <div className="absolute top-0 right-0 bg-green-500/10 text-green-600 dark:text-green-500 px-3 py-1 rounded-bl-lg rounded-tr-xl text-xs font-medium border-b border-l border-green-500/20">Live</div>
                        <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-white/10 border border-black/5 dark:border-white/10 flex items-center justify-center text-neutral-400 mb-4">
                           <Icon icon="solar:global-linear" width="24" />
                        </div>
                        <h4 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">Acme Inc Store</h4>
                        <p className="text-sm text-neutral-500 mb-6">E-commerce storefront deployed successfully to production.</p>
                        <div className="flex justify-between items-center w-full">
                           <div className="w-full bg-green-500/20 h-1.5 rounded-full mr-4"><div className="w-full bg-green-500 h-1.5 rounded-full"></div></div>
                           <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">100%</span>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {/* Feedback Content */}
              {activeTab === "feedback" && (
                <div className="h-full flex flex-col animate-[fadeIn_0.5s_ease-out]">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white">
                      Design Feedback
                    </h3>
                  </div>

                  <div className="flex-1 bg-white dark:bg-[#111] border border-black/5 dark:border-white/5 rounded-2xl flex flex-col overflow-hidden">
                     <div className="p-4 border-b border-black/5 dark:border-white/5 flex items-center gap-3 bg-neutral-50 dark:bg-transparent">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-700 font-medium">N</div>
                        <div>
                           <p className="text-sm font-medium text-neutral-900 dark:text-white">Nexlink Designer</p>
                           <p className="text-xs text-neutral-500">Typically replies in 1 hour</p>
                        </div>
                     </div>
                     
                     <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto bg-neutral-50/30 dark:bg-white/[0.01]">
                        <div className="flex gap-4">
                           <div className="w-8 h-8 rounded-full bg-purple-500/20 shrink-0 flex items-center justify-center text-purple-700 text-xs font-bold">N</div>
                           <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 p-4 rounded-2xl rounded-tl-sm max-w-[80%] shadow-sm">
                              <p className="text-sm text-neutral-700 dark:text-neutral-300">Hi there! We finished the hero section for TechCorp. Can you review the typography choice for the primary headline?</p>
                           </div>
                        </div>

                        <div className="flex gap-4 flex-row-reverse">
                           <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 shrink-0 flex items-center justify-center text-neutral-600 dark:text-neutral-300 text-xs font-bold">You</div>
                           <div className="bg-purple-600 p-4 rounded-2xl rounded-tr-sm max-w-[80%] shadow-md">
                              <p className="text-sm text-white">Looks amazing. Really crisp. Can we make the "Get Started" button slightly wider?</p>
                           </div>
                        </div>
                     </div>

                     <div className="p-4 bg-white dark:bg-[#111] border-t border-black/5 dark:border-white/5 flex gap-2">
                        <input type="text" placeholder="Type a message..." disabled className="flex-1 bg-neutral-100 dark:bg-white/5 border-none rounded-full px-4 outline-none text-sm text-neutral-500" />
                        <button className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition">
                           <Icon icon="solar:plain-2-linear" width="20" />
                        </button>
                     </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
