"use client";

import { Heart, Scissors, Flower2, Hand, Sparkles, Star } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const specialties = [
  { icon: Heart, text: "Davines products — farm to salon" },
  { icon: Scissors, text: "Hair treatments of all types" },
  { icon: Flower2, text: "Specialized body massages" },
  { icon: Hand, text: "Manicure & pedicure procedures" },
  { icon: Sparkles, text: "Spa steam room experience" },
  { icon: Star, text: "Eye lash extension artistry" },
];

export default function About() {
  return (
    <section id="about" className="bg-stone-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <FadeIn>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">
                We&apos;re Create
              </p>
              <h2 className="mt-3 font-serif text-3xl text-stone-900 sm:text-4xl">
                About Create
              </h2>
              <p className="mt-6 leading-relaxed text-stone-600">
                Each person working here brings something unique to the salon
                environment. Some specialize in color treatments and halo
                extensions, while others work on lash extensions and body
                waxing. We have women who work magic on your hands and feet,
                while others turn your skin into silk.
              </p>
              <p className="mt-4 leading-relaxed text-stone-600">
                With an array of product lines to choose from and services that
                meet your every need, Create is where all your services are in
                one place.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {specialties.map((item, i) => (
                  <FadeIn key={item.text} delay={0.1 + i * 0.05}>
                    <li className="flex items-start gap-2.5">
                      <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" />
                      <span className="text-sm text-stone-600">{item.text}</span>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                  alt="Salon experience"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-5 shadow-lg sm:block">
                <p className="font-serif text-3xl text-stone-800">15+</p>
                <p className="text-sm text-stone-500">Years of excellence</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}