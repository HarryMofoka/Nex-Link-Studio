"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRef } from "react";
import { useSteamyPhysics } from "@/hooks/useSteamyPhysics";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const maskGroupRef = useRef<SVGGElement>(null);

  // Bind the vanilla JS physics logic strictly to this component's DOM lifecycle
  useSteamyPhysics(footerRef, maskGroupRef);

  return (
    <footer
      id="steamy-footer"
      ref={footerRef}
      className="max-w-[1400px] mx-auto w-[calc(100%-2rem)] rounded-3xl relative overflow-hidden pt-20 pb-10 mb-8 mt-12 z-20 shadow-2xl bg-white/5 border border-black/5 dark:border-white/5 dark:bg-white/5 dark:shadow-black/50"
    >
      {/* SVG Definitions for Masks */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <filter id="soft-edge" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <mask id="fog-mask">
            {/* Base white fills the entire area, keeping the blur */}
            <rect width="100%" height="100%" fill="white" />
            <g id="steam-wipes" ref={maskGroupRef} filter="url(#soft-edge)" />
          </mask>
        </defs>
      </svg>

      {/* Steamy Glass Layer */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-white/10 dark:bg-black/40"
        style={{
          backdropFilter: "blur(24px) contrast(0.85) brightness(1.1)",
          WebkitBackdropFilter: "blur(24px) contrast(0.85) brightness(1.1)",
          boxShadow: "inset 0 0 60px rgba(255, 255, 255, 0.4)",
          maskImage: "url(#fog-mask)",
          WebkitMaskImage: "url(#fog-mask)",
        }}
      />

      {/* Droplets Container (No longer directly manipulated via ID in React, just kept for styling if any) */}
      <div
        id="drops-container"
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2 flex flex-col items-start pr-10">
            <Link
              href="/"
              className="w-10 h-10 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center border border-black/10 dark:border-white/10 mb-6"
            >
              <span className="text-base font-medium tracking-tighter text-neutral-900 dark:text-white">
                NS
              </span>
            </Link>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm font-normal leading-relaxed mb-6">
              Elevating brands through strategic design. Build better products,
              engage your audience, and stand out.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition"
              >
                <Icon
                  icon="solar:pallete-2-linear"
                  width="20"
                  height="20"
                  style={{ strokeWidth: 1.5 }}
                />
              </Link>
              <Link
                href="#"
                className="text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition"
              >
                <Icon
                  icon="solar:programming-linear"
                  width="20"
                  height="20"
                  style={{ strokeWidth: 1.5 }}
                />
              </Link>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-neutral-900 dark:text-white font-medium text-sm tracking-tight mb-5">
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="#features"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-neutral-900 dark:text-white font-medium text-sm tracking-tight mb-5">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-neutral-900 dark:text-white font-medium text-sm tracking-tight mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="#about"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-neutral-500 dark:text-white/60 text-xs">
            © 2024 Nexlink Studio. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-xs text-neutral-500 dark:text-white/60">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
