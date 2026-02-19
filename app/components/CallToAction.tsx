"use client";

import { FadeIn } from "./animations";
import Button from "./ui/Button";
import { FormEvent, useState } from "react";

export default function CallToAction() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement email submission logic
    console.log("Email submitted:", email);
  };

  return (
    <section className="mx-[5%] overflow-hidden rounded-sm md:rounded-l bg-primary-deepest py-[clamp(4rem,8vw,7rem)] my-20">
      <div className="mx-auto max-w-321 px-[5%]">
        <FadeIn direction="up" as="div">
          <div className="flex flex-col items-center gap-[clamp(2rem,4vw,3rem)] text-center">
            {/* Title */}
            <h2 className="text-[clamp(2rem,4.5vw,3.1rem)] font-semibold leading-design text-primary">
              Ready to journey with us?
            </h2>

            {/* Description */}
            <p className="text-[clamp(0.875rem,1.5vw,1.2rem)] leading-design text-white">
              Refab Africa exists to transform textile waste into meaningful
              impact, but lasting change is never built alone. Whether you&apos;re a
              creative, brand, organization, or individual who believes in
              responsible design and collaboration, there&apos;s a place to build
              together.
            </p>

            {/* Email Form */}
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-213 flex-col gap-[clamp(0.75rem,1.5vw,1rem)] sm:flex-row"
            >
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-sm border border-white bg-white/12 px-[clamp(1rem,1.5vw,1.25rem)] py-[clamp(0.875rem,1.5vw,1.125rem)] text-[clamp(0.875rem,1.2vw,1.25rem)] leading-design text-white placeholder-white/70 outline-none transition-colors focus:border-primary focus:bg-white/20"
              />

              <Button variant="outline" type="submit">
                Start a Conversation
              </Button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
