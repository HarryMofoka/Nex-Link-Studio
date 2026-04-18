"use client";

import { Icon } from "@iconify/react";

export function FAQ() {
  const faqs = [
    {
      question: "How fast will my website be ready?",
      answer:
        "On average, most standard website builds are customized and launched in just a few days.",
    },
    {
      question: "Is the process complicated?",
      answer:
        "Not at all. You select a design, tell us your business details, and we take care of the rest. It is completely hands-off for you.",
    },
    {
      question: "What if I need changes later?",
      answer:
        "No worries! We'll happily revise the text and layout elements until the website accurately reflects your business.",
    },
    {
      question: "Are the sites fast and reliable?",
      answer:
        "Absolutely. We focus extensively on performance, ensuring your website loads instantly to keep potential customers engaged.",
    },
  ];

  return (
    <section
      id="faq"
      className="w-full relative py-32 border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-orange-500">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white">
            Frequently asked
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-black/5 border-t border-b border-black/5 dark:divide-white/5 dark:border-white/5">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group py-6 cursor-pointer [&::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between text-lg font-medium tracking-tight text-neutral-900 list-none outline-none dark:text-white">
                {faq.question}
                <Icon
                  icon="solar:add-circle-linear"
                  width="24"
                  height="24"
                  className="text-neutral-500 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed mt-4 font-normal dark:text-neutral-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
