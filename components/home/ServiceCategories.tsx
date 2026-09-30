"use client";

import Link from "next/link";
import { Hand, Scissors, Flower2, Sparkles } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import PageTransition from "@/components/ui/PageTransition";

const serviceCategories = [
  {
    icon: Hand,
    title: "Nails",
    description:
      "Manicures, pedicures with or without gel polish, nail enhancements, rebalancing and nail art.",
  },
  {
    icon: Scissors,
    title: "Hair & Beauty",
    description:
      "Hair care for the entire family. Cuts, color, keratin treatments, perms, wedding and birthday parties.",
  },
  {
    icon: Flower2,
    title: "Spa Therapy",
    description:
      "Therapeutic and relaxing massages, facials, dermaplaning, microdermabrasion and steam room.",
  },
  {
    icon: Sparkles,
    title: "Complete Salon",
    description:
      "Tanning, full body waxing, makeup services, eye lash extensions, permanent & temporary, plus lash lifts.",
  },
];

export default function ServiceCategories() {
  return (
    <PageTransition>
    <section className="border-b border-stone-100 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <Link
                href="/services"
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 transition group-hover:scale-110 group-hover:bg-stone-200">
                  <item.icon
                    className="h-7 w-7 text-stone-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-serif text-xl text-stone-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">
                  {item.description}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
    </PageTransition>
  );
}