"use client";

import React, { useState } from "react";
import type { ChangeEvent } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, ChevronRight, Facebook, Instagram } from "lucide-react";

// ── Shared data ────────────────────────────────────────────────────────────────
const STATES = ["Abuja (FCT)", "Lagos", "Ogun", "Oyo", "Kaduna", "Nasarawa", "Niger"];
const AGE_GROUPS = ["Under 18", "18–25", "26–35", "36–45", "46–55", "56+"];
const GENDERS = ["Male", "Female", "Prefer not to say"];

const SKILLS = [
  { id: "fashion-design",       label: "Fashion Design" },
  { id: "tailoring",            label: "Tailoring / Sewing" },
  { id: "textile-art",          label: "Textile Art / Fabric Manipulation" },
  { id: "pattern-making",       label: "Pattern Making" },
  { id: "embroidery",           label: "Embroidery / Beading" },
  { id: "dyeing",               label: "Dyeing, Batik, Tie & Dye" },
  { id: "accessory-design",     label: "Accessory Design", sub: "Bags, shoes, jewelry" },
  { id: "creative-direction",   label: "Creative Direction / Styling" },
  { id: "waste-transformation", label: "Waste Material Transformation" },
  { id: "teaching",             label: "Teaching / Workshop Facilitation" },
  { id: "social-media",         label: "Social Media / Content Creation" },
  { id: "other",                label: "Other" },
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

// ── Shared field styles ────────────────────────────────────────────────────────
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

// ── TikTok icon (not in lucide) ────────────────────────────────────────────────
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.28 8.28 0 0 0 4.84 1.54V6.82a4.85 4.85 0 0 1-1.07-.13z" />
    </svg>
  );
}

// ── Social media fields config ─────────────────────────────────────────────────
const SOCIAL_PLATFORMS = [
  { id: "facebook",  label: "Facebook",  icon: Facebook,   placeholder: "Facebook profile URL or username" },
  { id: "instagram", label: "Instagram", icon: Instagram,  placeholder: "@instagram_handle" },
  { id: "tiktok",    label: "TikTok",    icon: TikTokIcon, placeholder: "@tiktok_handle" },
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function UpcyclerRegister() {
  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    phone: "",
    ageGroup: "",
    email: "",
    state: "",
    lga: "",
    shopAddress: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    skills: [] as string[],
    otherSkill: "",
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function toggleSkill(id: string) {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(id)
        ? prev.skills.filter((s) => s !== id)
        : [...prev.skills, id],
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to API route / form service
    console.log("Upcycler registration:", form);
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
                Upcycler
              </span>
              <div className="h-[1px] w-[clamp(1.5rem,4vw,3rem)] bg-primary/50" />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/25">
                Join the Movement
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp}>
              <h1 className="flex flex-col gap-0 leading-none">
                <span className="mb-[0.3em] text-[clamp(0.82rem,1.4vw,1.1rem)] font-normal text-white/50">
                  Thank you for your interest in
                </span>
                <span className="text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold uppercase leading-none tracking-tight text-primary">
                  Refab
                </span>
                <span className="text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold uppercase leading-none tracking-tight text-white">
                  Upcycling
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
              We are building a vibrant community of creatives, artisans, and
              change-makers who transform textile waste into purposeful design,
              art, and innovation.
            </motion.p>

            {/* Pull quote */}
            <motion.div
              variants={fadeUp}
              className="rounded-[12px] border-l-2 border-primary bg-white/[0.04] px-[clamp(1rem,1.8vw,1.5rem)] py-[clamp(0.82rem,1.5vw,1.2rem)]"
            >
              <p className="text-[clamp(0.72rem,0.9vw,0.88rem)] font-medium italic leading-[1.65] text-white/70">
                "Refab isn't just about fashion — it's about climate action,
                circular economy, and empowering local talent to reimagine what
                others discarded."
              </p>
            </motion.div>

            {/* What you bring */}
            <motion.div variants={fadeUp} className="flex flex-col gap-[0.45rem]">
              <p className="mb-1 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-white/30">
                What you gain
              </p>
              {[
                "Access to a growing network of creatives across Nigeria.",
                "Opportunities to showcase your work and collaborate.",
                "Training, mentorship, and community support.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="mt-[0.35em] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-[0.68rem] leading-snug text-white/40">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Confidentiality */}
            <motion.p variants={fadeUp} className="text-[0.62rem] leading-snug text-white/20">
              All information provided will be treated with strict confidentiality
              and used solely for onboarding and coordination within the Refab
              Africa network.
            </motion.p>
          </motion.div>

          {/* ════════════════════════════════════════
               RIGHT — Registration form
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
                    <select
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      required
                      className={selectClass}
                    >
                      <option value="" disabled className="bg-[#041F00]">Gender</option>
                      {GENDERS.map((g) => (
                        <option key={g} value={g} className="bg-[#041F00]">{g}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 gap-[clamp(0.62rem,1vw,0.82rem)] sm:grid-cols-2">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (WhatsApp)"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className={fieldClass}
                    />
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
                  </div>
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
                  <div className="relative">
                    <MapPin
                      className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30"
                      strokeWidth={1.8}
                    />
                    <input
                      type="text"
                      name="shopAddress"
                      placeholder="Shop / Studio Address"
                      value={form.shopAddress}
                      onChange={handleChange}
                      required
                      className={`${fieldClass} pl-10`}
                    />
                  </div>
                </div>
              </div>

              {/* ── SECTION 03: Social Media ── */}
              <div>
                <SectionLabel number="03" title="Social Media" />
                <div className="flex flex-col gap-[clamp(0.62rem,1vw,0.82rem)]">
                  {SOCIAL_PLATFORMS.map(({ id, label, icon: Icon, placeholder }) => (
                    <div key={id} className="relative">
                      <div className="absolute left-4 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center text-white/30">
                        <Icon className="h-4 w-4" />
                      </div>
                      <input
                        type="text"
                        name={id}
                        placeholder={placeholder}
                        value={form[id as keyof typeof form] as string}
                        onChange={handleChange}
                        className={`${fieldClass} pl-10`}
                        aria-label={label}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* ── SECTION 04: Skills ── */}
              <div>
                <SectionLabel number="04" title="Skills & Expertise" />
                <p className="mb-[clamp(0.5rem,1vw,0.75rem)] text-[0.65rem] text-white/30">
                  Let us know which skills or areas of expertise you bring to the upcycling movement.{" "}
                  <span className="text-primary/60">Select all that apply.</span>
                </p>

                {/* Skill grid */}
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {SKILLS.map(({ id, label, sub }) => {
                    const active = form.skills.includes(id);
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => toggleSkill(id)}
                        className={`group flex flex-col items-start rounded-[10px] border px-3 py-[clamp(0.5rem,0.9vw,0.75rem)] text-left transition-all duration-300 ${
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
                            className={`text-[0.67rem] font-semibold leading-snug ${
                              active ? "text-primary" : "text-white/60"
                            }`}
                          >
                            {label}
                          </span>
                        </div>
                        {sub && (
                          <span className="ml-5 mt-0.5 text-[0.57rem] text-white/30">{sub}</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Other skill text */}
                {form.skills.includes("other") && (
                  <motion.input
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    type="text"
                    name="otherSkill"
                    placeholder="Describe your other skill or expertise..."
                    value={form.otherSkill}
                    onChange={handleChange}
                    className={`${fieldClass} mt-2`}
                  />
                )}

                {/* Selection count badge */}
                {form.skills.length > 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-[0.62rem] text-primary/70"
                  >
                    {form.skills.length} skill{form.skills.length !== 1 ? "s" : ""} selected
                  </motion.p>
                )}
              </div>

              {/* ── Submit ── */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-[10px] bg-primary py-[clamp(0.82rem,1.4vw,1.1rem)] text-[clamp(0.82rem,1.1vw,1rem)] font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Join the Upcycling Movement
                  <ChevronRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              <p className="text-center text-[0.62rem] text-white/25">
                Our team will reach out within 3 business days to confirm your onboarding.
              </p>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
