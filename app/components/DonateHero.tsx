"use client";

import React, { useState } from "react";
import type { ChangeEvent } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { CheckCircle2, MapPin } from "lucide-react";

// ── Shared data ────────────────────────────────────────────────────────────────
const STATES = ["Abuja (FCT)", "Lagos", "Ogun", "Oyo", "Kaduna", "Nasarawa", "Niger"];
const AGE_GROUPS = ["Under 18", "18–25", "26–35", "36–45", "46–55", "56+"];

const CLOTHING_TYPES = [
  { id: "adult",       label: "Adult Clothing" },
  { id: "children",   label: "Children's Clothing" },
  { id: "denim",      label: "Denim / Jeans" },
  { id: "traditional",label: "Traditional Wears",         sub: "Ankara, Ashokie" },
  { id: "accessories",label: "Accessories",               sub: "Bags, belts, scarves" },
  { id: "shoes",      label: "Shoes" },
  { id: "mixed",      label: "Mixed Fabrics / Scrap Textile" },
  { id: "other",      label: "Other" },
];

const CONDITIONS = [
  { id: "clean",   label: "Clean & Intact",        desc: "Ready for upcycling or reuse" },
  { id: "worn",    label: "Slightly Worn / Faded", desc: "Minor repairs or creative reposing possible" },
  { id: "damaged", label: "Damaged / Torn",        desc: "Suitable for recycling into new materials or art pieces" },
  { id: "mixed",   label: "Mixed Condition",       desc: "A combination of all of the above" },
];

// ── Animation variants ─────────────────────────────────────────────────────────
const textContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

// ── Shared styles ──────────────────────────────────────────────────────────────
const fieldClass =
  "w-full rounded-[9px] border border-white/20 bg-white/[0.05] px-4 py-[clamp(0.72rem,1.2vw,0.92rem)] text-[clamp(0.72rem,1vw,0.95rem)] font-normal leading-design text-white placeholder:text-white/40 outline-none transition-all focus:border-primary/70 focus:bg-white/10";

const selectClass = `${fieldClass} appearance-none cursor-pointer`;

// ── Section label ──────────────────────────────────────────────────────────────
function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-[clamp(0.75rem,1.5vw,1.2rem)] flex items-center gap-3">
      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-[0.6rem] font-bold text-white">
        {number}
      </span>
      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white/50">
        {title}
      </span>
      <div className="h-[1px] flex-1 bg-white/10" />
    </div>
  );
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function DonateHero() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    ageGroup: "",
    email: "",
    state: "",
    lga: "",
    ready: "" as "" | "yes" | "no",
    pickupAddress: "",
    clothingTypes: [] as string[],
    otherClothing: "",
    pieces: "",
    condition: "",
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function toggleClothingType(id: string) {
    setForm((prev) => ({
      ...prev,
      clothingTypes: prev.clothingTypes.includes(id)
        ? prev.clothingTypes.filter((t) => t !== id)
        : [...prev.clothingTypes, id],
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to API route / form service
    console.log("Donor intake submitted:", form);
  }

  return (
    <section className="relative w-full overflow-hidden bg-primary-deepest">

      {/* SVG background pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/svg-background-image-pattern.svg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Left green accent bar */}
      <div className="absolute bottom-0 left-0 top-0 z-10 w-[3px] bg-primary/50" />

      <div className="relative z-10 mx-auto max-w-[1728px] px-[5%] pt-[clamp(7rem,13vw,10rem)] pb-[clamp(4rem,8vw,7rem)]">
        <div className="flex flex-col gap-[clamp(3rem,6vw,5rem)] lg:flex-row lg:items-start lg:gap-[clamp(4rem,6vw,6rem)]">

          {/* ════════════════════════════════════════
               LEFT — Editorial panel (sticky)
              ════════════════════════════════════════ */}
          <motion.div
            className="flex flex-col gap-[clamp(1.2rem,2.5vw,2rem)] lg:flex-[0_0_38%] lg:sticky lg:top-[clamp(6rem,10vw,8rem)]"
            variants={textContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="inline-block rounded-full bg-primary px-5 py-[4px] text-[0.72rem] font-medium text-white">
                Donate
              </span>
              <div className="h-[1px] w-[clamp(1.5rem,4vw,3rem)] bg-primary/50" />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/25">
                Intake Form
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp}>
              <h1 className="flex flex-col gap-0 leading-none">
                <span className="mb-[0.3em] text-[clamp(0.82rem,1.4vw,1.1rem)] font-normal text-white/50">
                  Thank you for supporting
                </span>
                <span className="text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold uppercase leading-none tracking-tight text-primary">
                  Refab
                </span>
                <span className="text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold uppercase leading-none tracking-tight text-white">
                  Africa
                </span>
              </h1>
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="h-[2px] w-8 rounded-full bg-primary" />
              <div className="h-[1px] flex-1 bg-white/10" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-[clamp(0.72rem,0.95vw,0.88rem)] leading-[1.75] text-white/55"
            >
              We accept clothing donations year-round as part of our commitment
              to recycling and upcycling textile waste — not just to reduce
              environmental harm, but to spark creativity, empower communities,
              and drive climate action.
            </motion.p>

            {/* Confidentiality card */}
            <motion.div
              variants={fadeUp}
              className="rounded-[12px] border border-white/10 bg-white/[0.04] p-[clamp(0.82rem,1.5vw,1.2rem)]"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                  strokeWidth={2}
                />
                <p className="text-[0.68rem] leading-[1.65] text-white/40">
                  All information provided in this form will be treated with
                  strict confidentiality and used solely for the purpose of
                  onboarding and coordination within the Refab Africa network.
                </p>
              </div>
            </motion.div>

            {/* What to expect */}
            <motion.div variants={fadeUp} className="flex flex-col gap-[0.45rem]">
              {[
                "We'll contact you via WhatsApp to arrange pickup.",
                "All clothing types are welcome — even damaged items.",
                "Your donation directly fuels local creativity and climate action.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="mt-[0.35em] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-[0.68rem] leading-snug text-white/40">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════════
               RIGHT — Form
              ════════════════════════════════════════ */}
          <motion.div
            className="lg:flex-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[clamp(2rem,4vw,3rem)] rounded-[20px] border border-white/10 bg-white/[0.04] p-[clamp(1.5rem,3vw,2.8rem)] backdrop-blur-sm"
            >

              {/* ── SECTION 01: Personal Info ── */}
              <div>
                <SectionLabel number="01" title="Personal Information" />
                <div className="flex flex-col gap-[clamp(0.62rem,1vw,0.82rem)]">
                  <div className="grid grid-cols-1 gap-[clamp(0.62rem,1vw,0.82rem)] sm:grid-cols-2">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      className={fieldClass}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (WhatsApp)"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className={fieldClass}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-[clamp(0.62rem,1vw,0.82rem)] sm:grid-cols-2">
                    <select
                      name="ageGroup"
                      value={form.ageGroup}
                      onChange={handleChange}
                      required
                      className={selectClass}
                    >
                      <option value="" disabled className="bg-[#041F00]">Age Group</option>
                      {AGE_GROUPS.map((g) => (
                        <option key={g} value={g} className="bg-[#041F00]">{g}</option>
                      ))}
                    </select>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={fieldClass}
                    />
                  </div>
                </div>
              </div>

              {/* ── SECTION 02: Location ── */}
              <div>
                <SectionLabel number="02" title="Location" />
                <div className="flex flex-col gap-[clamp(0.62rem,1vw,0.82rem)]">
                  <div className="grid grid-cols-1 gap-[clamp(0.62rem,1vw,0.82rem)] sm:grid-cols-2">
                    <select
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      required
                      className={selectClass}
                    >
                      <option value="" disabled className="bg-[#041F00]">Select State</option>
                      {STATES.map((s) => (
                        <option key={s} value={s} className="bg-[#041F00]">{s}</option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="lga"
                      placeholder="Local Government Area (LGA)"
                      value={form.lga}
                      onChange={handleChange}
                      required
                      className={fieldClass}
                    />
                  </div>
                </div>
              </div>

              {/* ── SECTION 03: Donation Details ── */}
              <div>
                <SectionLabel number="03" title="Your Donation" />
                <div className="flex flex-col gap-[clamp(1rem,2vw,1.65rem)]">

                  {/* Readiness */}
                  <div>
                    <p className="mb-2 text-[0.65rem] font-medium text-white/40">
                      Are you ready to donate now?
                    </p>
                    <div className="grid max-w-[260px] grid-cols-2 gap-2">
                      {(["yes", "no"] as const).map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, ready: opt }))}
                          className={`rounded-[8px] border py-[clamp(0.6rem,1vw,0.75rem)] text-[0.75rem] font-bold transition-all duration-300 ${
                            form.ready === opt
                              ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                              : "border-white/15 bg-white/[0.04] text-white/50 hover:border-white/30 hover:text-white"
                          }`}
                        >
                          {opt === "yes" ? "Yes, I'm Ready" : "Not Yet"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pickup address */}
                  <div className="relative">
                    <MapPin
                      className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30"
                      strokeWidth={1.8}
                    />
                    <input
                      type="text"
                      name="pickupAddress"
                      placeholder="Pickup Address"
                      value={form.pickupAddress}
                      onChange={handleChange}
                      required
                      className={`${fieldClass} pl-10`}
                    />
                  </div>

                  {/* Clothing type multi-select */}
                  <div>
                    <p className="mb-[0.4rem] text-[0.65rem] font-medium text-white/40">
                      What type of clothing are you donating?{" "}
                      <span className="text-primary/60">(select all that apply)</span>
                    </p>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                      {CLOTHING_TYPES.map(({ id, label, sub }) => {
                        const active = form.clothingTypes.includes(id);
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => toggleClothingType(id)}
                            className={`flex flex-col items-start rounded-[10px] border px-3 py-[clamp(0.5rem,0.9vw,0.72rem)] text-left transition-all duration-300 ${
                              active
                                ? "border-primary bg-primary/10 shadow-sm shadow-primary/15"
                                : "border-white/10 bg-white/[0.03] hover:border-white/20"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {/* Custom checkbox */}
                              <div
                                className={`flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-sm border transition-all ${
                                  active ? "border-primary bg-primary" : "border-white/30"
                                }`}
                              >
                                {active && (
                                  <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
                                    <path
                                      d="M2 6l3 3 5-5"
                                      stroke="white"
                                      strokeWidth="1.8"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                )}
                              </div>
                              <span
                                className={`text-[0.68rem] font-semibold leading-snug ${
                                  active ? "text-primary" : "text-white/60"
                                }`}
                              >
                                {label}
                              </span>
                            </div>
                            {sub && (
                              <span className="ml-5 mt-0.5 text-[0.58rem] text-white/30">{sub}</span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Other — free text */}
                    {form.clothingTypes.includes("other") && (
                      <motion.input
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        type="text"
                        name="otherClothing"
                        placeholder="Please describe the other clothing type..."
                        value={form.otherClothing}
                        onChange={handleChange}
                        className={`${fieldClass} mt-2`}
                      />
                    )}
                  </div>

                  {/* Number of pieces */}
                  <input
                    type="number"
                    name="pieces"
                    placeholder="Approximately how many pieces?"
                    value={form.pieces}
                    onChange={handleChange}
                    min={1}
                    required
                    className={fieldClass}
                  />

                  {/* Clothing condition */}
                  <div>
                    <p className="mb-[0.4rem] text-[0.65rem] font-medium text-white/40">
                      What condition are the clothes in?
                    </p>
                    <p className="mb-[0.75rem] text-[0.62rem] leading-snug text-white/25">
                      All types of clothing are welcome. Refab Africa specialises in transforming
                      discarded textile into meaningful creations — even damaged items can make a
                      difference.
                    </p>
                    <div className="flex flex-col gap-2">
                      {CONDITIONS.map(({ id, label, desc }) => {
                        const active = form.condition === id;
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => setForm((p) => ({ ...p, condition: id }))}
                            className={`flex items-start gap-3 rounded-[10px] border px-4 py-[clamp(0.6rem,1vw,0.82rem)] text-left transition-all duration-300 ${
                              active
                                ? "border-primary bg-primary/10"
                                : "border-white/10 bg-white/[0.03] hover:border-white/20"
                            }`}
                          >
                            {/* Radio dot */}
                            <div
                              className={`mt-[0.2em] flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                                active ? "border-primary" : "border-white/25"
                              }`}
                            >
                              {active && (
                                <div className="h-[7px] w-[7px] rounded-full bg-primary" />
                              )}
                            </div>
                            <div>
                              <p
                                className={`text-[0.72rem] font-semibold ${
                                  active ? "text-primary" : "text-white/70"
                                }`}
                              >
                                {label}
                              </p>
                              <p className="text-[0.62rem] text-white/35">{desc}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>

              {/* ── Submit ── */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-[10px] bg-primary py-[clamp(0.82rem,1.4vw,1.1rem)] text-[clamp(0.82rem,1.1vw,1rem)] font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
              >
                <span className="relative z-10">Submit Donation Form</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
