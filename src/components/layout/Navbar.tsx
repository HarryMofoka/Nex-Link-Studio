import Link from "next/link";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

export function Navbar() {
  return (
    <header className="flex z-50 w-full pt-8 pr-6 pl-6 relative justify-center sticky top-0">
      <div className="flex w-full max-w-[1400px] items-center justify-between">
        {/* Letter Logo */}
        <Link
          href="/"
          className="w-12 h-12 bg-black/5 backdrop-blur-md rounded-full flex items-center justify-center border border-black/10 hover:bg-black/10 transition duration-300 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10"
        >
          <span className="text-lg font-medium tracking-tighter text-neutral-900 dark:text-white">
            NS
          </span>
        </Link>

        {/* Center Nav Pill */}
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

        {/* CTA Pill & Theme Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#pricing"
            className="text-base font-medium text-neutral-700 hover:text-neutral-900 bg-black/5 hover:bg-black/10 border border-black/10 backdrop-blur-md rounded-full px-7 py-3.5 transition duration-300 dark:text-neutral-300 dark:hover:text-white dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10"
          >
            CONTACT US
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
