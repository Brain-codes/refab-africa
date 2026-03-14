"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "./ui/Button";
import { FadeIn } from "./animations";

const faqs = [
  {
    id: "1",
    question: "What is Refab Africa and what do you do?",
    answer:
      "Refab Africa is a sustainability-driven collective that transforms discarded textiles into purposeful, impact-led products. We partner with communities, healthcare organisations, and creatives to prove that responsible fashion can be both beautiful and deeply meaningful.",
  },
  {
    id: "2",
    question: "How can I donate or drop off textile waste?",
    answer:
      "You can donate textile waste by reaching out to us via phone or email to arrange a convenient drop-off or collection. We welcome donations from individuals, businesses, and organisations across Nigeria. Our team will walk you through the simple process.",
  },
  {
    id: "3",
    question: "What types of textiles do you accept?",
    answer:
      "We accept a wide range of textile waste including clothing, fabric scraps, uniforms, and industrial offcuts. Items should be dry and free from hazardous materials. If you're unsure whether your donation qualifies, don't hesitate to contact us — we're happy to help.",
  },
  {
    id: "4",
    question: "How can businesses or organisations partner with Refab Africa?",
    answer:
      "We welcome partnerships with brands, healthcare organisations, schools, and community groups. Whether you'd like to collaborate on a project, sponsor our work, or take part in our programmes, reach out and our team will explore the best way to build together.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="bg-background px-[5%] py-[clamp(3.3rem,6.5vw,5.7rem)]">
      <div className="mx-auto max-w-432">

        {/* ── Header ── */}
        <FadeIn direction="up" className="flex flex-col items-center gap-[clamp(0.62rem,1.2vw,0.82rem)] text-center">
          <h2 className="text-[clamp(1.65rem,3.3vw,3rem)] font-medium leading-design text-primary-deepest">
            Frequently Asked <span className="font-extrabold text-primary uppercase">Questions </span>
          </h2>
          <p className="max-w-[1018px] text-[clamp(0.72rem,1vw,1rem)] font-normal leading-design text-foreground">
            Here are some common questions about our services to help you understand Refab Africa better.
          </p>
        </FadeIn>

        {/* ── Accordion ── */}
        <FadeIn
          direction="up"
          delay={0.2}
          className="mx-auto mt-[clamp(2rem,3.3vw,3.3rem)] max-w-[1062px]"
        >
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-primary/40 last:border-b-0">
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between py-[clamp(1.23rem,2vw,1.65rem)] text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[clamp(0.82rem,1vw,1rem)] font-normal leading-design text-foreground">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" as const }}
                    className="ml-6 flex-shrink-0 text-[1.75rem] leading-none text-primary"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" as const }}
                      className="overflow-hidden"
                    >
                      <p className="pb-[clamp(1.23rem,2vw,1.65rem)] text-[clamp(0.72rem,0.82vw,0.87rem)] leading-design text-foreground/70">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </FadeIn>

        {/* ── Closing CTAs ── */}
        <FadeIn direction="up" delay={0.3} as="div">
          <div className="mx-auto mt-[clamp(2rem,3.3vw,3rem)] flex max-w-[1062px] flex-wrap justify-center gap-3">
            <Button variant="primary" href="/donate">Donate Textiles</Button>
            <Button variant="outline" href="/agent">Become an Agent</Button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
