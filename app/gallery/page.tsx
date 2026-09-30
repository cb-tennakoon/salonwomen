"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const filters = ["All", "Hair", "Color", "Nails", "Lashes", "Spa"] as const;

const works = [
  {
    id: 1,
    category: "Color",
    title: "Balayage blend",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    category: "Hair",
    title: "Precision cut & style",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    category: "Nails",
    title: "Gel art set",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    category: "Lashes",
    title: "Classic lash extensions",
    image:
      "https://images.unsplash.com/photo-1583005239135-8b8a0c0c0c0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    category: "Color",
    title: "Soft lived-in color",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    category: "Spa",
    title: "Facial & glow",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    category: "Hair",
    title: "Bridal updo",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    category: "Nails",
    title: "Clean classic manicure",
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Work() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered =
    active === "All" ? works : works.filter((w) => w.category === active);

  return (
    <section id="work" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">
              Our craft
            </p>
            <h2 className="mt-3 font-serif text-3xl text-stone-900 sm:text-4xl">
              Our Work
            </h2>
            <p className="mt-4 text-stone-500">
              Real results from the chair — hair, color, nails, lashes, and
              skin. Scroll through a selection of recent looks.
            </p>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === f
                    ? "bg-stone-800 text-white"
                    : "border border-stone-200 text-stone-600 hover:border-stone-400 hover:bg-stone-50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item, i) => (
            <FadeIn key={item.id} delay={0.05 + i * 0.05}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-medium uppercase tracking-wider text-stone-300">
                    {item.category}
                  </p>
                  <p className="mt-0.5 font-serif text-lg text-white">
                    {item.title}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-stone-500">
            No looks in this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}