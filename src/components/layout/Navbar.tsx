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
              className="lg:hidden w-12 h-12 rounded-full bg-black/5 flex items-center justify-center border border-black/10 dark:bg-white/5 dark:border-white/10 text-neutral-900 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Icon
                icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}
                width="24"
                height="24"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide-over */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85vw] sm:w-[350px] bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-black/5 dark:border-white/5 z-40 transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-28 flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-8 text-2xl font-medium text-neutral-900 dark:text-white">
            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-purple-700 dark:hover:text-[#ff2a00] transition"
            >
              About us
            </Link>
            <div className="w-full h-px bg-black/5 dark:bg-white/5" />
            <Link
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-purple-700 dark:hover:text-[#ff2a00] transition"
            >
              Services
            </Link>
            <div className="w-full h-px bg-black/5 dark:bg-white/5" />
            <Link
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-purple-700 dark:hover:text-[#ff2a00] transition"
            >
              Features
            </Link>
            <div className="w-full h-px bg-black/5 dark:bg-white/5" />
            <Link
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-purple-700 dark:hover:text-[#ff2a00] transition"
            >
              Pricing
            </Link>
            <div className="w-full h-px bg-black/5 dark:bg-white/5" />
            <Link
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-purple-700 dark:hover:text-[#ff2a00] transition"
            >
              FAQ
            </Link>
          </nav>
        </div>

        {/* Glowing Contact Bottom Area */}
        <div className="p-6 border-t border-black/5 dark:border-white/5 bg-neutral-50/50 dark:bg-black/50">
          <Link
            href="#pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center py-4 rounded-xl text-lg font-medium text-purple-700 dark:text-red-500 bg-purple-500/10 dark:bg-red-500/10 border border-purple-500 dark:border-red-500 shadow-[0_0_20px_rgba(98,0,234,0.3)] dark:shadow-[0_0_20px_rgba(255,42,0,0.3)] hover:bg-purple-500/20 dark:hover:bg-red-500/20 transition duration-300"
          >
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
}
