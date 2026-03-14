"use client";

import React, { useState } from "react";
import type { ChangeEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Waves, Package, MapPin, ChevronRight } from "lucide-react";

// ── Shared data ────────────────────────────────────────────────────────────────
const STATES = ["Abuja (FCT)", "Lagos", "Ogun", "Oyo", "Kaduna", "Nasarawa", "Niger"];
const AGE_GROUPS = ["Under 18", "18–25", "26–35", "36–45", "46–55", "56+"];
const GENDERS = ["Male", "Female", "Prefer not to say"];

// ── Animation variants ─────────────────────────────────────────────────────────
const textContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

// ── Role definitions ───────────────────────────────────────────────────────────
const roles = [
  {
    id: "washer" as const,
    icon: Waves,
    title: "Washer",
    tagline: "Clean & Prepare",
    description:
      "Washers receive collected textile donations, clean and sanitise them, and prepare garments for the sorting and repurposing stage.",
    perks: ["Flexible hours", "Community stipend", "Training provided"],
  },
  {
    id: "picker" as const,
    icon: Package,
    title: "Picker",
    tagline: "Collect & Transport",
    description:
      "Pickers are our field agents — they coordinate with donors, collect donated textiles, and transport them safely to our processing facilities.",
    perks: ["Field allowance", "Transport support", "Network access"],
  },
];

type RoleId = "washer" | "picker";

// ── Shared field styles ────────────────────────────────────────────────────────
const fieldClass =
  "w-full rounded-[9px] border border-white/20 bg-white/[0.05] px-4 py-[clamp(0.72rem,1.2vw,0.92rem)] text-[clamp(0.72rem,1vw,0.95rem)] font-normal leading-design text-white placeholder:text-white/40 outline-none transition-all focus:border-primary/70 focus:bg-white/10";

const selectClass = `${fieldClass} appearance-none cursor-pointer`;

// ── Component ──────────────────────────────────────────────────────────────────
export default function AgentRegister() {
  const [selectedRole, setSelectedRole] = useState<RoleId | null>(null);
  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    phone: "",
    ageGroup: "",
    email: "",
    state: "",
    lga: "",
    homeAddress: "",
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to API route / form service
    console.log("Agent registration:", { role: selectedRole, ...form });
  }

  const activeRole = roles.find((r) => r.id === selectedRole);

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

        {/* ── Header ── */}
        <motion.div
          className="mb-[clamp(2.5rem,5vw,4.5rem)] flex flex-col gap-[clamp(1rem,2vw,1.5rem)]"
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="inline-block rounded-full bg-primary px-5 py-[4px] text-[0.72rem] font-medium text-white">
              Become an Agent
            </span>
            <div className="h-[1px] w-[clamp(1.5rem,4vw,3rem)] bg-primary/50" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/25">
              Refab Africa
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeUp}>
            <h1 className="flex flex-wrap items-baseline gap-x-[0.3em] leading-none">
              <span className="text-[clamp(2.8rem,6.5vw,6rem)] font-extrabold uppercase leading-none tracking-tight text-white">
                Join
              </span>
              <span className="text-[clamp(2.8rem,6.5vw,6rem)] font-extrabold uppercase leading-none tracking-tight text-primary">
                Our
              </span>
              <span className="text-[clamp(2.8rem,6.5vw,6rem)] font-extrabold uppercase leading-none tracking-tight text-white">
                Network
              </span>
            </h1>
            <p className="mt-[0.4em] text-[clamp(0.82rem,1.4vw,1.1rem)] font-normal text-white/50">
              Be the hands that turn waste into impact.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="h-[2px] w-8 rounded-full bg-primary" />
            <div className="h-[1px] flex-1 bg-white/10" />
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="max-w-[620px] text-[clamp(0.72rem,0.95vw,0.92rem)] font-normal leading-[1.75] text-white/55"
          >
            Refab Africa agents are the heartbeat of our circular fashion
            network. All information provided will be treated with strict
            confidentiality and used solely for onboarding and coordination
            within the Refab Africa network.
          </motion.p>
        </motion.div>

        {/* ── Step 1: Role selection ── */}
        <motion.div
          className="mb-[clamp(2rem,4vw,3.5rem)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" as const }}
        >
          <p className="mb-[0.4rem] text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white/40">
            Step 1 — Choose Your Role
          </p>
          <p className="mb-[clamp(0.82rem,1.5vw,1.2rem)] text-[0.65rem] text-white/25">
            Please select the position best aligned with your skills and interests.
          </p>

          <div className="grid grid-cols-1 gap-[clamp(0.75rem,1.5vw,1.2rem)] sm:grid-cols-2 xl:max-w-[820px]">
            {roles.map((role) => {
              const Icon = role.icon;
              const isActive = selectedRole === role.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRole(role.id)}
                  className={`group relative overflow-hidden rounded-[16px] border-2 p-[clamp(1.2rem,2.5vw,2rem)] text-left transition-all duration-400 ${
                    isActive
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                      : "border-white/10 bg-white/[0.04] hover:border-white/25"
                  }`}
                >
                  {/* Selection indicator */}
                  <div
                    className={`absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isActive ? "border-primary bg-primary" : "border-white/20"
                    }`}
                  >
                    {isActive && <div className="h-2 w-2 rounded-full bg-white" />}
                  </div>

                  {/* Icon */}
                  <div
                    className={`mb-[clamp(0.82rem,1.5vw,1.2rem)] flex h-12 w-12 items-center justify-center rounded-[10px] transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-white/10 text-white/60 group-hover:bg-white/15"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  {/* Title + tagline */}
                  <div className="mb-2 flex items-center gap-2">
                    <h3
                      className={`text-[clamp(1.1rem,1.8vw,1.5rem)] font-extrabold uppercase leading-none transition-colors ${
                        isActive ? "text-primary" : "text-white"
                      }`}
                    >
                      {role.title}
                    </h3>
                    <span
                      className={`rounded-full px-2 py-[2px] text-[0.58rem] font-bold uppercase tracking-wider transition-all ${
                        isActive ? "bg-primary text-white" : "bg-white/10 text-white/50"
                      }`}
                    >
                      {role.tagline}
                    </span>
                  </div>

                  <p className="mb-[clamp(0.75rem,1.2vw,1rem)] text-[clamp(0.65rem,0.85vw,0.82rem)] leading-[1.65] text-white/50">
                    {role.description}
                  </p>

                  {/* Perks */}
                  <div className="flex flex-col gap-[0.35rem]">
                    {role.perks.map((perk) => (
                      <div key={perk} className="flex items-center gap-2">
                        <div
                          className={`h-[5px] w-[5px] flex-shrink-0 rounded-full ${
                            isActive ? "bg-primary" : "bg-white/25"
                          }`}
                        />
                        <span className="text-[0.65rem] font-medium text-white/45">{perk}</span>
                      </div>
                    ))}
                  </div>

                  {/* Shimmer */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Step 2: Registration form — reveals when role selected ── */}
        <AnimatePresence>
          {selectedRole && (
            <motion.form
              key="agent-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.55, ease: "easeOut" as const }}
              className="rounded-[20px] border border-white/10 bg-white/[0.04] p-[clamp(1.5rem,3vw,2.8rem)] backdrop-blur-sm xl:max-w-[820px]"
            >
              {/* Form header */}
              <div className="mb-[clamp(1.5rem,3vw,2.5rem)] flex items-center gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  {activeRole && (
                    <activeRole.icon className="h-4 w-4 text-white" strokeWidth={2} />
                  )}
                </div>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-white/30">
                    Step 2 — Register as
                  </p>
                  <h2 className="text-[clamp(0.9rem,1.4vw,1.2rem)] font-bold uppercase text-primary">
                    {activeRole?.title}
                  </h2>
                </div>
                <div className="ml-auto h-[1px] flex-1 bg-white/10" />
              </div>

              <div className="flex flex-col gap-[clamp(0.75rem,1.2vw,1rem)]">

                {/* Row 1: Full Name + Gender */}
                <div className="grid grid-cols-1 gap-[clamp(0.75rem,1.2vw,1rem)] sm:grid-cols-2">
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

                {/* Row 2: Phone + Age Group */}
                <div className="grid grid-cols-1 gap-[clamp(0.75rem,1.2vw,1rem)] sm:grid-cols-2">
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

                {/* Row 3: Email + State */}
                <div className="grid grid-cols-1 gap-[clamp(0.75rem,1.2vw,1rem)] sm:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                  />
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
                </div>

                {/* Row 4: LGA + Home Address */}
                <div className="grid grid-cols-1 gap-[clamp(0.75rem,1.2vw,1rem)] sm:grid-cols-2">
                  <input
                    type="text"
                    name="lga"
                    placeholder="Local Government Area (LGA)"
                    value={form.lga}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                  />
                  <div className="relative">
                    <MapPin
                      className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30"
                      strokeWidth={1.8}
                    />
                    <input
                      type="text"
                      name="homeAddress"
                      placeholder="Home Address"
                      value={form.homeAddress}
                      onChange={handleChange}
                      required
                      className={`${fieldClass} pl-10`}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group relative mt-2 w-full overflow-hidden rounded-[10px] bg-primary py-[clamp(0.82rem,1.4vw,1.1rem)] text-[clamp(0.82rem,1.1vw,1rem)] font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Register as {activeRole?.title}
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
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Prompt when no role selected */}
        {!selectedRole && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-[0.72rem] font-normal text-white/25"
          >
            ↑ Select a role above to continue your registration.
          </motion.p>
        )}

      </div>
    </section>
  );
}
