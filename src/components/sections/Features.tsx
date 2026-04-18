"use client";

import { Icon } from "@iconify/react";

export function Features() {
  const featureItems = [
    {
      title: "Brand Impact",
      description:
        "Build trust instantly. We give your business a professional look that reassures your customers.",
      icon: "solar:star-fall-minimalistic-linear",
    },
    {
      title: "Proven Designs",
      description:
        "Simple, clean layouts designed to turn casual visitors into paying customers without friction.",
      icon: "solar:smartphone-update-linear",
    },
    {
      title: "Fast Execution",
      description:
        "Websites constructed with solid technology, guaranteeing fast load times and no downtime.",
      icon: "solar:code-1-linear",
    },
    {
      title: "Engaging Interfaces",
      description:
        "Keep your website engaging. Smooth interactions that make navigating your site a pleasure.",
      icon: "solar:video-frame-linear",
    },
    {
      title: "High-Converting Layouts",
      description:
        "Pre-built, vigorously tested page structures that are proven to maximize engagement and sales.",
      icon: "solar:layers-linear",
    },
    {
      title: "Expert Guidance",
      description:
        "Guidance to help your website drive real results, tailored to your exact business goals.",
      icon: "solar:lightbulb-bolt-linear",
    },
  ];

  return (
    <section
      id="features"
      className="w-full relative py-32 border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-orange-500">
            SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 mb-6 dark:text-white">
            Everything you need to stand out
          </h2>
          <p className="text-neutral-600 text-lg mx-auto max-w-2xl dark:text-neutral-400">
            Comprehensive design solutions to handle the complexity of digital
            brand building without the clutter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureItems.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-black/5 hover:border-black/10 hover:bg-neutral-50 transition duration-300 rounded-2xl p-8 group shadow-sm dark:bg-white/[0.03] dark:border-white/5 dark:hover:border-white/10 dark:hover:bg-white/[0.05]"
            >
              <div className="w-12 h-12 bg-black/5 rounded-xl border border-black/10 flex items-center justify-center mb-6 text-neutral-900 group-hover:text-purple-700 transition dark:bg-white/5 dark:border-white/10 dark:text-white dark:group-hover:text-orange-500">
                <Icon
                  icon={feature.icon}
                  width="24"
                  height="24"
                  style={{ strokeWidth: 1.5 }}
                />
              </div>
              <h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed dark:text-neutral-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
