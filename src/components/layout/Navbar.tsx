"use client";

import Link from "next/link";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="flex z-40 w-full pt-8 pr-6 pl-6 relative justify-center sticky top-0">
        <div className="flex w-full max-w-[1400px] items-center justify-between">
          {/* Letter Logo */}
          <Link
            href="/"
            className="w-12 h-12 bg-black/5 backdrop-blur-md rounded-full flex items-center justify-center border border-black/10 hover:bg-black/10 transition duration-300 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 relative z-50"
          >
            <span className="text-lg font-medium tracking-tighter text-neutral-900 dark:text-white">
              NS
            </span>
          </Link>

          {/* Center Nav Pill (Desktop) */}
          <nav className="hidden lg:flex items-center bg-white/50 backdrop-blur-md border border-black/10 rounded-full px-8 py-3.5 gap-6 text-base font-normal text-neutral-600 shadow-xl shadow-black/5 dark:bg-white/5 dark:border-white/10 dark:text-neutral-400 dark:shadow-black/50">
            <Link
              href="#about"
              className="hover:text-neutral-900 transition duration-200 dark:hover:text-white"
            >
              About us
            </Link>
            <div className="w-1 h-1 bg-neutral-300 rounded-full dark:bg-neutral-600" />
            <Link
              href="#services"
              className="hover:text-neutral-900 transition duration-200 dark:hover:text-white"
            >
              Services
            </Link>
            <div className="w-1 h-1 bg-neutral-300 rounded-full dark:bg-neutral-600" />
            <Link
              href="#features"
              className="hover:text-neutral-900 transition duration-200 dark:hover:text-white"
            >
              Features
            </Link>
            <div className="w-1 h-1 bg-neutral-300 rounded-full dark:bg-neutral-600" />
            <Link
              href="#pricing"
              className="hover:text-neutral-900 transition duration-200 dark:hover:text-white"
            >
              Pricing
            </Link>
            <div className="w-1 h-1 bg-neutral-300 rounded-full dark:bg-neutral-600" />
            <Link
              href="#faq"
              className="hover:text-neutral-900 transition duration-200 dark:hover:text-white"
            >
              FAQ
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 relative z-50">
            <Link
              href="#pricing"
              className="hidden md:flex text-base font-medium text-neutral-700 hover:text-neutral-900 bg-black/5 hover:bg-black/10 border border-black/10 backdrop-blur-md rounded-full px-7 py-3.5 transition duration-300 dark:text-neutral-300 dark:hover:text-white dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
            >
              CONTACT US
            </Link>
            <ThemeSwitcher />
            
            {/* Hamburger Icon */}
            <button
              className="lg:hidden w-12 h-12 rounded-full bg-black/5 flex items-center justify-center border border-black/10 dark:bg-white/5 dark:border-white/10 text-neutral-900 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className={`transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"} absolute`}>
                <Icon icon="solar:hamburger-menu-linear" width="24" height="24" />
              </div>
              <div className={`transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"} absolute`}>
                <Icon icon="solar:close-circle-linear" width="24" height="24" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-neutral-900/40 dark:bg-black/50 backdrop-blur-[4px] z-40 lg:hidden transition-opacity duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-over */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-[85vw] sm:w-[350px] bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-2xl border-l border-black/5 dark:border-white/5 z-50 transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col shadow-[-20px_0_40px_rgba(0,0,0,0.05)] dark:shadow-[-20px_0_40px_rgba(0,0,0,0.3)] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Explicit Close Area */}
        <div className="flex justify-between items-center p-6 pb-2 border-b border-black/5 dark:border-white/5">
          <span className="text-sm font-medium tracking-tight text-neutral-500 dark:text-neutral-400">Navigation</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-400 transition-colors duration-300"
          >
            <Icon icon="solar:arrow-right-linear" width="22" height="22" />
          </button>
        </div>

        {/* Links Area with Staggered Fade Effect */}
        <div className="px-8 py-10 flex-1 overflow-y-auto no-scrollbar">
          <nav className="flex flex-col gap-8 text-2xl font-medium text-neutral-900 dark:text-white">
            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transform transition-all duration-500 delay-[50ms] hover:text-purple-700 dark:hover:text-purple-600 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              About us
            </Link>
            <div className={`w-full h-px bg-black/5 dark:bg-white/5 transition-opacity duration-500 delay-[100ms] ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} />
            <Link
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transform transition-all duration-500 delay-[150ms] hover:text-purple-700 dark:hover:text-purple-600 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              Services
            </Link>
            <div className={`w-full h-px bg-black/5 dark:bg-white/5 transition-opacity duration-500 delay-[200ms] ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} />
            <Link
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transform transition-all duration-500 delay-[250ms] hover:text-purple-700 dark:hover:text-purple-600 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              Features
            </Link>
            <div className={`w-full h-px bg-black/5 dark:bg-white/5 transition-opacity duration-500 delay-[300ms] ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} />
            <Link
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transform transition-all duration-500 delay-[350ms] hover:text-purple-700 dark:hover:text-purple-600 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              Pricing
            </Link>
            <div className={`w-full h-px bg-black/5 dark:bg-white/5 transition-opacity duration-500 delay-[400ms] ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} />
            <Link
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transform transition-all duration-500 delay-[450ms] hover:text-purple-700 dark:hover:text-purple-600 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              FAQ
            </Link>
          </nav>
        </div>

        {/* Glowing Contact Bottom Area */}
        <div className={`p-6 border-t border-black/5 dark:border-white/5 bg-neutral-50/50 dark:bg-black/50 transform transition-all duration-500 delay-[500ms] ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <Link
            href="#pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center py-4 rounded-xl text-lg font-medium text-purple-700 dark:text-purple-500 bg-purple-500/10 dark:bg-purple-500/10 border border-purple-500 dark:border-purple-500 shadow-[0_0_20px_rgba(98,0,234,0.3)] dark:shadow-[0_0_20px_rgba(52,25,224,0.3)] hover:bg-purple-500/20 dark:hover:bg-purple-500/20 transition duration-300"
          >
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
}
