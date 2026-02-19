"use client";

import React, { useState } from "react";
import type { ChangeEvent } from "react";
import Image from "next/image";
import { motion } from "motion/react";

// ── Animation variants (same pattern as AboutHero / ProjectDetailHero) ────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

// ── Shared field class ────────────────────────────────────────────────────────
const fieldClass =
  "w-full rounded-[9px] border border-white/40 bg-white/[0.04] px-4 py-[clamp(0.72rem,1.2vw,0.92rem)] text-[clamp(0.72rem,1vw,1rem)] font-normal leading-design text-white placeholder:text-white/60 outline-none transition-colors focus:border-white/70 focus:bg-white/10";

// ── Component ─────────────────────────────────────────────────────────────────
export default function ContactHero() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to an API route / email service
    console.log("Contact form submitted:", form);
  }

  return (
    <section className="relative w-full overflow-hidden bg-primary-deepest px-[5%] pt-[clamp(6.5rem,12.3vw,9.8rem)] pb-[clamp(3.2rem,6.5vw,5.7rem)]">
      {/* SVG background pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/svg-background-image-pattern.svg"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-432">

        {/* ── Text block ── */}
        <motion.div
          className="flex flex-col items-center gap-[clamp(0.82rem,1.65vw,1.23rem)] text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.span
            className="inline-block rounded-full bg-primary px-6 py-[4px] text-[clamp(0.62rem,0.82vw,0.72rem)] font-medium text-white"
            variants={itemVariants}
          >
            Contact
          </motion.span>

          {/* Headline */}
          <motion.h1
            className="text-[clamp(1.65rem,3.3vw,3.3rem)] font-semibold leading-design text-white"
            variants={itemVariants}
          >
            We&apos;re here for you
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="max-w-[835px] text-[clamp(0.72rem,1vw,1rem)] font-normal leading-design text-white/80"
            variants={itemVariants}
          >
            Have questions or need to schedule an appointment? We&apos;d love to
            hear from you! Whether it&apos;s a routine check-up, our team is
            ready to assist.
          </motion.p>
        </motion.div>

        {/* ── Contact form ── */}
        <motion.form
          onSubmit={handleSubmit}
          className="mx-auto mt-[clamp(2.5rem,4.1vw,4.1rem)] flex max-w-[618px] flex-col gap-[clamp(0.62rem,0.82vw,0.82rem)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" as const }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className={fieldClass}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className={fieldClass}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className={fieldClass}
          />

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className={`${fieldClass} resize-none`}
          />

          {/* Submit */}
          <button
            type="submit"
            className="mt-[clamp(1.23rem,2vw,2rem)] w-full rounded-[9px] border border-primary bg-primary-light py-[clamp(0.72rem,1.2vw,0.92rem)] text-[clamp(0.72rem,1vw,1rem)] font-bold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Submit
          </button>
        </motion.form>

      </div>
    </section>
  );
}
