"use client";

import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

const PAGE_NAMES: Record<string, string> = {
  "/":        "Home",
  "/designs": "Design Library",
  "/process": "How It Works",
  "/pricing": "Pricing",
  "/contact": "Contact",
};

type Phase = "idle" | "cover" | "hold" | "reveal";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [phase, setPhase] = useState<Phase>("idle");
  const [label, setLabel] = useState("");
  const prevPath = useRef(pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the very first render — no transition needed on initial load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPath.current = pathname;
      return;
    }

    // Only fire if the path actually changed
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;

    const pageName = PAGE_NAMES[pathname] || "Nexlink Studio";
    setLabel(pageName);

    // Phase 1: Cover slides down
    setPhase("cover");

    const holdTimer = setTimeout(() => {
      // Phase 2: Hold with text visible
      setPhase("hold");
    }, 350);

    const revealTimer = setTimeout(() => {
      // Phase 3: Reveal slides down, pushing cover out
      setPhase("reveal");
    }, 650);

    const doneTimer = setTimeout(() => {
      setPhase("idle");
      setLabel("");
    }, 1050);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, [pathname]);

  const isDark = resolvedTheme === "dark";

  return (
    <>
      {children}

      {/* Transition Overlay */}
      {phase !== "idle" && (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
          {/* Cover Panel — slides down from top */}
          <div
            className="absolute inset-x-0 h-full transition-transform duration-[350ms] ease-[cubic-bezier(0.7,0,0.3,1)]"
            style={{
              backgroundColor: isDark ? "#fafafa" : "#050505",
              transform:
                phase === "cover" || phase === "hold"
                  ? "translateY(0%)"
                  : phase === "reveal"
                  ? "translateY(100%)"
                  : "translateY(-100%)",
            }}
          />

          {/* Reveal Panel — slides down from top, restoring original bg */}
          <div
            className="absolute inset-x-0 h-full transition-transform duration-[400ms] ease-[cubic-bezier(0.7,0,0.3,1)]"
            style={{
              backgroundColor: isDark ? "#050505" : "#fafafa",
              transform:
                phase === "reveal"
                  ? "translateY(0%)"
                  : "translateY(-100%)",
              transitionDelay: phase === "reveal" ? "0ms" : "0ms",
            }}
          />

          {/* Page Name Label */}
          <div
            className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-200"
            style={{
              opacity: phase === "hold" ? 1 : 0,
            }}
          >
            <h2
              className="text-4xl md:text-6xl font-semibold tracking-tight"
              style={{ color: "#3419e0" }}
            >
              {label}
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
