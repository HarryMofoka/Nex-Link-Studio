"use client";

import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";

type Tab = "dashboard" | "designs" | "projects" | "feedback" | "settings";

interface Message { from: "ns" | "you"; text: string; time: string; }

const DESIGNS = [
  { name: "Minimal Agency",  tag: "Clean",      color: "from-slate-800 to-slate-600",    accentBg: "bg-white/10",   icon: "solar:palette-linear"              },
  { name: "Bold SaaS",       tag: "Conversion", color: "from-purple-700 to-indigo-600",  accentBg: "bg-white/10",   icon: "solar:rocket-linear"               },
  { name: "E-Commerce",      tag: "Shop",       color: "from-emerald-700 to-teal-600",   accentBg: "bg-white/10",   icon: "solar:bag-heart-linear"            },
  { name: "Portfolio",       tag: "Creative",   color: "from-rose-700 to-pink-600",      accentBg: "bg-white/10",   icon: "solar:star-fall-minimalistic-linear"},
  { name: "Restaurant",      tag: "Local",      color: "from-amber-700 to-orange-600",   accentBg: "bg-white/10",   icon: "solar:cup-hot-linear"              },
  { name: "Law Firm",        tag: "Pro",        color: "from-neutral-800 to-neutral-600",accentBg: "bg-white/10",   icon: "solar:document-linear"             },
];

const INIT_MESSAGES: Message[] = [
  { from: "ns",  text: "Hi! We've uploaded the first draft of your landing hero. Can you review the font choice?",  time: "2h ago"  },
  { from: "you", text: "Looks incredible! Can we make the headline slightly larger on desktop?",                      time: "1h ago"  },
  { from: "ns",  text: "Done ✓ — also bumped the button padding. Ready for another review.",                         time: "45m ago" },
];

const TASKS = [
  { id: 1, label: "Confirm brand colours",    done: true  },
  { id: 2, label: "Supply logo assets",       done: true  },
  { id: 3, label: "Review hero wireframe",    done: false },
  { id: 4, label: "Approve pricing layout",   done: false },
  { id: 5, label: "Final sign-off",           done: false },
];

export function Services() {
  const [activeTab, setActiveTab]       = useState<Tab>("dashboard");
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);
  const [messages, setMessages]         = useState<Message[]>(INIT_MESSAGES);
  const [draft, setDraft]               = useState("");
  const [tasks, setTasks]               = useState(TASKS);
  const [notifOpen, setNotifOpen]       = useState(false);
  const [newProject, setNewProject]     = useState(false);
  const chatEndRef                      = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  function sendMessage() {
    if (!draft.trim()) return;
    setMessages(prev => [...prev, { from: "you", text: draft, time: "Just now" }]);
    setDraft("");
    // Simulated reply after 1.2s
    setTimeout(() => {
      setMessages(prev => [...prev, {
        from: "ns",
        text: "Got it — we'll apply that change and send an updated preview shortly!",
        time: "Just now",
      }]);
    }, 1200);
  }

  const completedTasks = tasks.filter(t => t.done).length;
  const progress = Math.round((completedTasks / tasks.length) * 100);

  const navItems: { id: Tab; icon: string; label: string }[] = [
    { id: "dashboard", icon: "solar:home-smile-linear",         label: "Dashboard"    },
    { id: "designs",   icon: "solar:layers-minimalistic-linear",label: "Designs"      },
    { id: "projects",  icon: "solar:folder-with-files-linear",  label: "Projects"     },
    { id: "feedback",  icon: "solar:chat-round-dots-linear",    label: "Feedback"     },
    { id: "settings",  icon: "solar:settings-linear",           label: "Settings"     },
  ];

  return (
    <section id="services" className="w-full relative py-32 border-t border-black/5 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">HOW IT WORKS</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 mb-6 dark:text-white">
            Choose, customize,<br />and launch.
          </h2>
        </div>

        {/* ── Dashboard Shell ───────────────────────────────────── */}
        <div className="w-full bg-white/80 backdrop-blur-3xl border border-black/10 rounded-2xl lg:rounded-[2rem] p-4 lg:p-6 shadow-2xl overflow-hidden dark:bg-neutral-950/80 dark:border-white/10">
          <div className="w-full bg-neutral-50 border border-black/5 rounded-xl lg:rounded-2xl h-[640px] lg:h-[740px] flex overflow-hidden dark:bg-[#0a0a0a] dark:border-white/5">

            {/* Sidebar */}
            <div className="w-16 lg:w-60 border-r border-black/5 bg-white/50 hidden md:flex flex-col justify-between py-6 dark:border-white/5 dark:bg-black/50 shrink-0">
              <div className="px-4 lg:px-5 flex flex-col gap-6">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">NS</span>
                  </div>
                  <span className="text-neutral-900 font-semibold tracking-tight text-sm hidden lg:block dark:text-white">Nexlink Studio</span>
                </div>

                {/* Nav */}
                <nav className="flex flex-col gap-1">
                  {navItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`group w-full h-10 rounded-lg flex items-center px-2.5 gap-3 transition-all duration-200 ${
                        activeTab === item.id
                          ? "bg-purple-600/10 dark:bg-purple-500/15"
                          : "hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                    >
                      <Icon
                        icon={item.icon} width="18" height="18"
                        className={activeTab === item.id ? "text-purple-700 dark:text-purple-400" : "text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition"}
                      />
                      <span className={`text-sm font-medium hidden lg:block transition ${
                        activeTab === item.id ? "text-purple-700 dark:text-purple-400" : "text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white"
                      }`}>{item.label}</span>
                      {item.id === "feedback" && (
                        <span className="ml-auto hidden lg:flex w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold items-center justify-center">1</span>
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              {/* User Avatar at bottom */}
              <div className="px-4 lg:px-5">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0">JD</div>
                  <div className="hidden lg:flex flex-col min-w-0">
                    <span className="text-xs font-semibold text-neutral-900 dark:text-white truncate">John Doe</span>
                    <span className="text-[10px] text-neutral-400 truncate">Pro Plan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Panel */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Top Bar */}
              <div className="h-14 border-b border-black/5 dark:border-white/5 flex items-center justify-between px-5 lg:px-8 shrink-0 bg-white/30 dark:bg-black/20">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white capitalize">
                  {navItems.find(n => n.id === activeTab)?.label}
                </h3>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <button
                      onClick={() => setNotifOpen(o => !o)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition text-neutral-500 relative"
                    >
                      <Icon icon="solar:bell-linear" width="18" />
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-purple-600 border-2 border-white dark:border-neutral-950" />
                    </button>
                    {notifOpen && (
                      <div className="absolute right-0 top-10 w-72 bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-xl shadow-2xl p-4 z-50 animate-[fadeIn_0.2s_ease-out]">
                        <p className="text-xs font-semibold text-neutral-500 mb-3 uppercase tracking-wide">Notifications</p>
                        <div className="flex gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-white/5 transition cursor-pointer">
                          <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-700 shrink-0"><Icon icon="solar:pen-new-round-linear" width="14" /></div>
                          <div><p className="text-xs font-medium text-neutral-900 dark:text-white">Design draft is ready</p><p className="text-[11px] text-neutral-400">2 hours ago</p></div>
                        </div>
                        <div className="flex gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-white/5 transition cursor-pointer">
                          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0"><Icon icon="solar:check-circle-linear" width="14" /></div>
                          <div><p className="text-xs font-medium text-neutral-900 dark:text-white">TechCorp approved revision</p><p className="text-[11px] text-neutral-400">1 day ago</p></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => { setActiveTab("designs"); setNewProject(true); }}
                    className="hidden sm:flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition shadow-[0_0_12px_rgba(52,25,224,0.4)]"
                  >
                    <Icon icon="solar:add-circle-linear" width="16" /> New Project
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto no-scrollbar p-5 lg:p-8">

                {/* ── DASHBOARD ───────────────────────────────── */}
                {activeTab === "dashboard" && (
                  <div className="animate-[fadeIn_0.4s_ease-out] space-y-6">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { label: "Active Projects",  value: "2",    icon: "solar:rocket-linear",       color: "text-purple-700 dark:text-purple-400", bg: "bg-purple-500/10" },
                        { label: "Avg. Delivery",    value: "48h",  icon: "solar:stopwatch-linear",    color: "text-sky-600",   bg: "bg-sky-500/10"    },
                        { label: "Revisions Left",   value: "∞",    icon: "solar:refresh-linear",      color: "text-emerald-600", bg: "bg-emerald-500/10" },
                        { label: "Satisfaction",     value: "100%", icon: "solar:star-linear",         color: "text-amber-600", bg: "bg-amber-500/10"  },
                      ].map(kpi => (
                        <div key={kpi.label} className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-xl p-4 hover:border-black/10 dark:hover:border-white/10 transition">
                          <div className={`w-8 h-8 rounded-lg ${kpi.bg} flex items-center justify-center mb-3`}>
                            <Icon icon={kpi.icon} width="16" className={kpi.color} />
                          </div>
                          <p className="text-[11px] text-neutral-400 uppercase tracking-wider mb-1">{kpi.label}</p>
                          <p className={`text-2xl font-semibold tracking-tight ${kpi.color}`}>{kpi.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Progress Tracker */}
                    <div className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-xl p-5">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm font-semibold text-neutral-900 dark:text-white">Project Checklist</p>
                          <p className="text-xs text-neutral-400">TechCorp Main Site · {completedTasks}/{tasks.length} done</p>
                        </div>
                        <span className="text-xs font-bold text-purple-700 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full">{progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-black/5 dark:bg-white/10 rounded-full mb-5 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full transition-all duration-700"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        {tasks.map(t => (
                          <button
                            key={t.id}
                            onClick={() => setTasks(prev => prev.map(x => x.id === t.id ? { ...x, done: !x.done } : x))}
                            className="flex items-center gap-3 group text-left"
                          >
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition ${t.done ? "bg-purple-600 border-purple-600" : "border-black/20 dark:border-white/20 group-hover:border-purple-500"}`}>
                              {t.done && <Icon icon="solar:check-read-linear" width="12" className="text-white" />}
                            </div>
                            <span className={`text-sm transition ${t.done ? "line-through text-neutral-400" : "text-neutral-700 dark:text-neutral-300"}`}>{t.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-xl p-5">
                      <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Recent Activity</p>
                      <div className="flex flex-col gap-4">
                        {[
                          { icon: "solar:pen-new-round-linear", bg: "bg-purple-500/10", color: "text-purple-700", title: "Design Draft Uploaded", desc: "Hero wireframes ready for review.", time: "2h ago" },
                          { icon: "solar:check-circle-linear",  bg: "bg-green-500/10",  color: "text-green-600", title: "Onboarding Completed",   desc: "Brand assets and fonts imported.", time: "1d ago" },
                          { icon: "solar:chat-square-linear",   bg: "bg-sky-500/10",    color: "text-sky-600",   title: "Feedback Submitted",     desc: "You requested a wider CTA button.", time: "1d ago" },
                        ].map(a => (
                          <div key={a.title} className="flex items-start gap-3">
                            <div className={`w-8 h-8 rounded-full ${a.bg} flex items-center justify-center ${a.color} shrink-0`}>
                              <Icon icon={a.icon} width="15" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-neutral-900 dark:text-white">{a.title}</p>
                              <p className="text-xs text-neutral-400 truncate">{a.desc}</p>
                            </div>
                            <span className="text-[11px] text-neutral-400 shrink-0">{a.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── DESIGNS ─────────────────────────────────── */}
                {activeTab === "designs" && (
                  <div className="animate-[fadeIn_0.4s_ease-out]">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-sm font-semibold text-neutral-900 dark:text-white">Design Library</p>
                        <p className="text-xs text-neutral-400">Pick a template to start your project</p>
                      </div>
                      {selectedDesign !== null && (
                        <button
                          onClick={() => { setSelectedDesign(null); setNewProject(false); }}
                          className="text-xs text-purple-700 dark:text-purple-400 hover:underline"
                        >Clear selection</button>
                      )}
                    </div>
                    {newProject && selectedDesign === null && (
                      <div className="mb-5 flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-xl px-4 py-3 text-sm text-purple-700 dark:text-purple-300">
                        <Icon icon="solar:info-circle-linear" width="18" className="shrink-0" />
                        Select a design below to start your new project.
                      </div>
                    )}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                      {DESIGNS.map((d, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedDesign(i)}
                          className={`group relative rounded-2xl overflow-hidden border-2 text-left transition-all duration-300 ${
                            selectedDesign === i
                              ? "border-purple-600 shadow-[0_0_20px_rgba(52,25,224,0.35)]"
                              : "border-transparent hover:border-black/10 dark:hover:border-white/10"
                          }`}
                        >
                          <div className={`w-full h-28 bg-gradient-to-br ${d.color} flex items-center justify-center`}>
                            <Icon icon={d.icon} width="36" className="text-white/70 group-hover:text-white transition" />
                          </div>
                          <div className="p-3 bg-white dark:bg-white/[0.04]">
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-semibold text-neutral-900 dark:text-white">{d.name}</p>
                              <span className="text-[10px] font-medium px-2 py-0.5 bg-black/5 dark:bg-white/10 text-neutral-500 dark:text-neutral-400 rounded-full">{d.tag}</span>
                            </div>
                          </div>
                          {selectedDesign === i && (
                            <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center shadow-lg">
                              <Icon icon="solar:check-read-linear" width="12" className="text-white" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    {selectedDesign !== null && (
                      <div className="mt-6 p-5 bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-2xl animate-[fadeIn_0.3s_ease-out]">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">You selected: <span className="text-purple-700 dark:text-purple-400">{DESIGNS[selectedDesign].name}</span></p>
                            <p className="text-xs text-neutral-400">We'll customize this design to match your brand. Ready?</p>
                          </div>
                          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition shadow-[0_0_15px_rgba(52,25,224,0.4)]">
                            Request Customization <Icon icon="solar:arrow-right-linear" width="14" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ── PROJECTS ────────────────────────────────── */}
                {activeTab === "projects" && (
                  <div className="animate-[fadeIn_0.4s_ease-out] space-y-5">
                    {/* Kanban-style cards */}
                    {[
                      { name: "TechCorp Main Site", stage: "In Review", pct: 65, color: "bg-yellow-500", tag: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20", icon: "solar:figma-linear", iconBg: "bg-purple-500/10", iconColor: "text-purple-700", update: "Hero section delivered — awaiting font feedback." },
                      { name: "Acme Inc Store",     stage: "Live",      pct: 100, color: "bg-emerald-500", tag: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20", icon: "solar:global-linear", iconBg: "bg-emerald-500/10", iconColor: "text-emerald-600", update: "Successfully deployed. 1,240 visitors in 24 hours." },
                    ].map(p => (
                      <div key={p.name} className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-2xl p-5 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition duration-300 cursor-pointer group">
                        <div className="flex items-start gap-4">
                          <div className={`w-11 h-11 rounded-xl ${p.iconBg} flex items-center justify-center ${p.iconColor} shrink-0`}>
                            <Icon icon={p.icon} width="22" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <p className="text-sm font-semibold text-neutral-900 dark:text-white">{p.name}</p>
                              <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${p.tag}`}>{p.stage}</span>
                            </div>
                            <p className="text-xs text-neutral-400 mb-4 truncate">{p.update}</p>
                            <div className="flex items-center gap-3">
                              <div className="flex-1 h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                                <div className={`h-full ${p.color} rounded-full transition-all duration-700`} style={{ width: `${p.pct}%` }} />
                              </div>
                              <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 shrink-0">{p.pct}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="border-2 border-dashed border-black/10 dark:border-white/10 rounded-2xl p-6 flex items-center justify-center gap-3 text-neutral-400 hover:border-purple-500/50 dark:hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 transition cursor-pointer group" onClick={() => setActiveTab("designs")}>
                      <Icon icon="solar:add-circle-linear" width="22" className="group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Start a new project</span>
                    </div>
                  </div>
                )}

                {/* ── FEEDBACK / CHAT ─────────────────────────── */}
                {activeTab === "feedback" && (
                  <div className="animate-[fadeIn_0.4s_ease-out] h-full flex flex-col" style={{ minHeight: 420 }}>
                    <div className="flex-1 bg-white dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-2xl flex flex-col overflow-hidden">
                      {/* Chat header */}
                      <div className="px-5 py-3 border-b border-black/5 dark:border-white/5 flex items-center gap-3 bg-neutral-50 dark:bg-transparent">
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0">N</div>
                        <div>
                          <p className="text-xs font-semibold text-neutral-900 dark:text-white">Nexlink Designer</p>
                          <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /><p className="text-[11px] text-neutral-400">Online now</p></div>
                        </div>
                      </div>

                      {/* Messages */}
                      <div className="flex-1 p-5 flex flex-col gap-4 overflow-y-auto no-scrollbar">
                        {messages.map((m, i) => (
                          <div key={i} className={`flex gap-3 ${m.from === "you" ? "flex-row-reverse" : ""}`}>
                            <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold ${m.from === "ns" ? "bg-purple-600 text-white" : "bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300"}`}>
                              {m.from === "ns" ? "N" : "J"}
                            </div>
                            <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                              m.from === "ns"
                                ? "bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 text-neutral-700 dark:text-neutral-300 rounded-tl-sm"
                                : "bg-purple-600 text-white rounded-tr-sm"
                            }`}>
                              <p>{m.text}</p>
                              <p className={`text-[10px] mt-1.5 ${m.from === "ns" ? "text-neutral-400" : "text-white/60"}`}>{m.time}</p>
                            </div>
                          </div>
                        ))}
                        <div ref={chatEndRef} />
                      </div>

                      {/* Input */}
                      <div className="p-3 border-t border-black/5 dark:border-white/5 flex gap-2 bg-white dark:bg-black/20">
                        <input
                          type="text"
                          value={draft}
                          onChange={e => setDraft(e.target.value)}
                          onKeyDown={e => e.key === "Enter" && sendMessage()}
                          placeholder="Type your feedback…"
                          className="flex-1 bg-neutral-100 dark:bg-white/5 rounded-full px-4 py-2 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-purple-600/30 transition"
                        />
                        <button
                          onClick={sendMessage}
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition ${draft.trim() ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-neutral-200 dark:bg-white/10 text-neutral-400 cursor-not-allowed"}`}
                        >
                          <Icon icon="solar:plain-2-linear" width="16" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── SETTINGS ────────────────────────────────── */}
                {activeTab === "settings" && (
                  <div className="animate-[fadeIn_0.4s_ease-out] space-y-5">
                    <div className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-2xl p-5">
                      <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Account</p>
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-lg font-bold">JD</div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-900 dark:text-white">John Doe</p>
                          <p className="text-xs text-neutral-400">john@techcorp.io</p>
                          <span className="text-[11px] font-semibold text-purple-700 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full mt-1 inline-block">Pro Plan</span>
                        </div>
                      </div>
                      {[
                        { label: "Email notifications", on: true  },
                        { label: "SMS alerts",          on: false },
                        { label: "Weekly reports",      on: true  },
                      ].map(s => (
                        <div key={s.label} className="flex items-center justify-between py-3 border-t border-black/5 dark:border-white/5">
                          <p className="text-sm text-neutral-700 dark:text-neutral-300">{s.label}</p>
                          <div className={`w-10 h-5 rounded-full flex items-center p-0.5 transition-colors ${s.on ? "bg-purple-600" : "bg-neutral-300 dark:bg-neutral-700"}`}>
                            <div className={`w-4 h-4 rounded-full bg-white shadow transition-transform ${s.on ? "translate-x-5" : "translate-x-0"}`} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-2xl p-5">
                      <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">Current Plan</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-neutral-400 mb-1">Pro Plan · billed monthly</p>
                          <p className="text-2xl font-bold text-neutral-900 dark:text-white">$4,999<span className="text-sm font-normal text-neutral-400">/mo</span></p>
                        </div>
                        <button className="text-xs font-semibold text-purple-700 dark:text-purple-400 px-4 py-2 border border-purple-500/30 rounded-lg hover:bg-purple-500/10 transition">Manage plan</button>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
