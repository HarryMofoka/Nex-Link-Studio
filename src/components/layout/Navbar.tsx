"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/designs", label: "Designs" },
  { href: "/process", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
          {/* Logo */}
          <TransitionLink
            href="/"
            className="w-12 h-12 bg-black/5 backdrop-blur-md rounded-full flex items-center justify-center border border-black/10 hover:bg-black/10 transition duration-300 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 relative z-50 overflow-hidden"
          >
            <Image src="/logo.png" alt="Nexlink Studio Logo" width={32} height={32} className="object-contain" />
          </TransitionLink>

          {/* Center Nav Pill (Desktop) */}
          <nav className="hidden lg:flex items-center bg-white/50 backdrop-blur-md border border-black/10 rounded-full px-8 py-3.5 gap-6 text-base font-normal text-neutral-600 shadow-xl shadow-black/5 dark:bg-white/5 dark:border-white/10 dark:text-neutral-400 dark:shadow-black/50">
            {NAV_LINKS.map((link, idx) => (
              <div key={link.href} className="flex items-center gap-6">
                {idx > 0 && <div className="w-1 h-1 bg-neutral-300 rounded-full dark:bg-neutral-600" />}
                <TransitionLink
                  href={link.href}
                  className={`transition duration-200 ${
                    pathname === link.href
                      ? "text-purple-700 dark:text-purple-400 font-medium"
                      : "hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </TransitionLink>
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 relative z-50">
            <TransitionLink
              href="/contact"
              className="hidden md:flex text-base font-medium text-neutral-700 hover:text-neutral-900 bg-black/5 hover:bg-black/10 border border-black/10 backdrop-blur-md rounded-full px-7 py-3.5 transition duration-300 dark:text-neutral-300 dark:hover:text-white dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
            >
              CONTACT US
            </TransitionLink>
            <ThemeSwitcher />
            
            {/* Hamburger Icon */}
            <button
              className="lg:hidden w-12 h-12 rounded-full bg-black/5 flex items-center justify-center border border-black/10 dark:bg-white/5 dark:border-white/10 text-neutral-900 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className={`transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"} absolute`}>
                <Icon icon="solar:hamburger-menu-linear" width="24" height="24" />
              </div>
              <div className={`transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"} absolute`}>
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
        {/* Top Close Area */}
        <div className="flex justify-between items-center p-6 pb-2 border-b border-black/5 dark:border-white/5">
          <span className="text-sm font-medium tracking-tight text-neutral-500 dark:text-neutral-400">Navigation</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-400 transition-colors duration-300"
          >
            <Icon icon="solar:arrow-right-linear" width="22" height="22" />
          </button>
        </div>

        {/* Links */}
        <div className="px-8 py-10 flex-1 overflow-y-auto no-scrollbar">
          <nav className="flex flex-col gap-6">
            <TransitionLink
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-medium transition-all duration-500 ${pathname === "/" ? "text-purple-700 dark:text-purple-400" : "text-neutral-900 dark:text-white hover:text-purple-700 dark:hover:text-purple-500"} ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              Home
            </TransitionLink>
            {NAV_LINKS.map((link, idx) => (
              <div key={link.href}>
                <div className={`w-full h-px bg-black/5 dark:bg-white/5 mb-6 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} />
                <TransitionLink
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-medium transition-all duration-500 block ${
                    pathname === link.href ? "text-purple-700 dark:text-purple-400" : "text-neutral-900 dark:text-white hover:text-purple-700 dark:hover:text-purple-500"
                  } ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                  style={{ transitionDelay: `${(idx + 1) * 80}ms` } as React.CSSProperties}
                >
                  {link.label}
                </TransitionLink>
              </div>
            ))}
          </nav>
        </div>

        {/* Glowing Contact Bottom */}
        <div className={`p-6 border-t border-black/5 dark:border-white/5 bg-neutral-50/50 dark:bg-black/50 transform transition-all duration-500 delay-500 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <TransitionLink
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center py-4 rounded-xl text-lg font-medium text-purple-700 dark:text-purple-500 bg-purple-500/10 dark:bg-purple-500/10 border border-purple-500 dark:border-purple-500 shadow-[0_0_20px_rgba(52,25,224,0.3)] dark:shadow-[0_0_20px_rgba(52,25,224,0.3)] hover:bg-purple-500/20 dark:hover:bg-purple-500/20 transition duration-300"
          >
            Contact us
          </TransitionLink>
        </div>
      </div>
    </>
  );
}
