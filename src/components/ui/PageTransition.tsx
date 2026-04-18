"use client";

import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef, useCallback } from "react";

const PAGE_NAMES: Record<string, string> = {
  "/":        "Home",
  "/designs": "Design Library",
  "/process": "How It Works",
  "/pricing": "Pricing",
  "/contact": "Contact",
};

/*
 * Timeline (~2.4s total):
 *   0ms    — Mount overlay with panel off-screen top (translateY(-100%))
 *   16ms   — "cover" → panel slides to translateY(0%) over 500ms
 *   600ms  — "show-text" → text opacity 1
 *   1700ms — "hide-text" → text opacity 0
 *   1900ms — "reveal" → panel slides to translateY(100%) over 500ms
 *   2400ms — unmount overlay
 */

type Phase = "idle" | "mount" | "cover" | "show-text" | "hide-text" | "reveal";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [phase, setPhase] = useState<Phase>("idle");
  const [label, setLabel] = useState("");
  const prevPath = useRef(pathname);
  const isFirst = useRef(true);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; prevPath.current = pathname; return; }
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;
    clear();

    setLabel(PAGE_NAMES[pathname] || "Nexlink Studio");

    // Mount with panel above viewport
    setPhase("mount");

    // After one frame, trigger the slide-down
    timers.current.push(
      setTimeout(() => setPhase("cover"), 20),
      setTimeout(() => setPhase("show-text"), 600),
      setTimeout(() => setPhase("hide-text"), 1700),
      setTimeout(() => setPhase("reveal"), 1900),
      setTimeout(() => { setPhase("idle"); setLabel(""); }, 2400),
    );

    return clear;
  }, [pathname, clear]);

  if (phase === "idle") return <>{children}</>;

  const isDark = resolvedTheme === "dark";
  const panelBg = isDark ? "#fafafa" : "#050505";

  // Panel transform
  let panelY: string;
  let panelTransition: string;
  switch (phase) {
    case "mount":
      panelY = "-100%";
      panelTransition = "none";
      break;
    case "cover":
    case "show-text":
    case "hide-text":
      panelY = "0%";
      panelTransition = "transform 500ms cubic-bezier(0.76, 0, 0.24, 1)";
      break;
    case "reveal":
      panelY = "100%";
      panelTransition = "transform 500ms cubic-bezier(0.76, 0, 0.24, 1)";
      break;
    default:
      panelY = "-100%";
      panelTransition = "none";
  }

  // Text opacity
  const showText = phase === "show-text";

  return (
    <>
      {children}
      <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
        {/* Sliding panel */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: panelBg,
            transform: `translateY(${panelY})`,
            transition: panelTransition,
          }}
        />
        {/* Centered label */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: showText ? 1 : 0,
            transition: "opacity 200ms ease",
            zIndex: 10,
          }}
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight select-none"
            style={{ color: "#3419e0" }}
          >
            {label}
          </h2>
        </div>
      </div>
    </>
  );
}
