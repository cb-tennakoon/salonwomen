"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

import {
  Scissors,
  Sparkles,
  Hand,
  Flower2,
  ChevronRight,
  Clock,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const categories = [
  {
    id: "hair",
    title: "Hair Services",
    icon: Scissors,
    description: "Cuts, color, treatments and styling for the whole family.",
    services: [
      {
        name: "Women's Haircut & Style",
        duration: "45–60 min",
        price: "From $45",
        description: "Consultation, shampoo, cut and blow-dry style.",
      },
      {
        name: "Men's Haircut",
        duration: "30 min",
        price: "From $28",
        description: "Precision cut with shampoo and style.",
      },
      {
        name: "Children's Haircut",
        duration: "30 min",
        price: "From $22",
        description: "Gentle cuts for kids of all ages.",
      },
      {
        name: "Full Color",
        duration: "90–120 min",
        price: "From $85",
        description: "Single process permanent or demi-permanent color.",
      },
      {
        name: "Highlights / Balayage",
        duration: "120–180 min",
        price: "From $120",
        description: "Foil highlights or hand-painted balayage techniques.",
      },
      {
        name: "Keratin Treatment",
        duration: "120–150 min",
        price: "From $200",
        description: "Smoothing treatment that reduces frizz for months.",
      },
      {
        name: "Blowout / Styling",
        duration: "45 min",
        price: "From $40",
        description: "Shampoo and professional blow-dry style.",
      },
      {
        name: "Bridal / Special Occasion",
        duration: "60–90 min",
        price: "From $75",
        description: "Elegant updos and styles for weddings and events.",
      },
    ],
  },
  {
    id: "nails",
    title: "Nail Services",
    icon: Hand,
    description: "Manicures, pedicures, enhancements and nail art.",
    services: [
      {
        name: "Classic Manicure",
        duration: "30 min",
        price: "From $25",
        description: "Shape, cuticle care, massage and polish.",
      },
      {
        name: "Gel Manicure",
        duration: "45 min",
        price: "From $40",
        description: "Long-lasting gel polish application.",
      },
      {
        name: "Classic Pedicure",
        duration: "45 min",
        price: "From $40",
        description: "Soak, exfoliation, massage and polish.",
      },
      {
        name: "Gel Pedicure",
        duration: "60 min",
        price: "From $55",
        description: "Full pedicure with gel polish.",
      },
      {
        name: "Acrylic / Gel Full Set",
        duration: "75–90 min",
        price: "From $65",
        description: "Full set of enhancements with shape of choice.",
      },
      {
        name: "Fill / Rebalance",
        duration: "60 min",
        price: "From $45",
        description: "Maintenance fill for existing enhancements.",
      },
      {
        name: "Nail Art (per nail)",
        duration: "5–15 min",
        price: "From $5",
        description: "Custom designs, gems, and hand-painted details.",
      },
    ],
  },
  {
    id: "spa",
    title: "Spa & Skin",
    icon: Flower2,
    description: "Massages, facials and skin treatments to restore balance.",
    services: [
      {
        name: "Swedish Massage",
        duration: "60 / 90 min",
        price: "From $80",
        description: "Classic full-body relaxation massage.",
      },
      {
        name: "Deep Tissue Massage",
        duration: "60 / 90 min",
        price: "From $95",
        description: "Focused pressure for muscle tension relief.",
      },
      {
        name: "Hot Stone Massage",
        duration: "75 min",
        price: "From $110",
        description: "Heated stones combined with massage techniques.",
      },
      {
        name: "Signature Facial",
        duration: "60 min",
        price: "From $85",
        description: "Customized facial with cleanse, extract and mask.",
      },
      {
        name: "Dermaplaning",
        duration: "45 min",
        price: "From $95",
        description: "Exfoliation that removes dead skin and peach fuzz.",
      },
      {
        name: "Microdermabrasion",
        duration: "45 min",
        price: "From $110",
        description: "Mechanical exfoliation for smoother, brighter skin.",
      },
      {
        name: "Steam Room Session",
        duration: "20 min",
        price: "From $25",
        description: "Relaxing steam with essential oils.",
      },
    ],
  },
  {
    id: "beauty",
    title: "Beauty & More",
    icon: Sparkles,
    description: "Makeup, lashes, waxing and tanning services.",
    services: [
      {
        name: "Makeup Application",
        duration: "45–60 min",
        price: "From $55",
        description: "Full face makeup for day or evening.",
      },
      {
        name: "Bridal Makeup",
        duration: "75–90 min",
        price: "From $95",
        description: "Long-lasting bridal look with trial available.",
      },
      {
        name: "Classic Lash Extensions",
        duration: "90–120 min",
        price: "From $120",
        description: "One-to-one lash application for a natural look.",
      },
      {
        name: "Hybrid / Volume Lashes",
        duration: "120–150 min",
        price: "From $160",
        description: "Fuller, more dramatic lash sets.",
      },
      {
        name: "Lash Lift + Tint",
        duration: "60 min",
        price: "From $75",
        description: "Curl and tint your natural lashes.",
      },
      {
        name: "Brow Wax / Shape",
        duration: "15–20 min",
        price: "From $18",
        description: "Clean, defined brows tailored to your face.",
      },
      {
        name: "Full Leg Wax",
        duration: "45–60 min",
        price: "From $65",
        description: "Smooth results from thigh to ankle.",
      },
      {
        name: "Spray Tan",
        duration: "30 min",
        price: "From $45",
        description: "Custom airbrush tan for a natural glow.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-stone-800 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-3xl px-4">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-400">
              What we offer
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
              Our Services
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-stone-300">
              From hair and nails to spa therapy and beauty — everything you
              need is under one roof. Browse our full menu below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Category navigation */}
      <section className="sticky top-[73px] z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:justify-center lg:gap-4 lg:px-8">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-600 transition hover:border-stone-400 hover:bg-stone-50 hover:text-stone-900"
            >
              <cat.icon className="h-4 w-4" />
              {cat.title}
            </a>
          ))}
        </div>
      </section>

      {/* Service categories */}
      {categories.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className="border-b border-stone-100 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category header */}
            <FadeIn delay={catIndex * 0.05}>
              <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100">
                    <category.icon className="h-6 w-6 text-stone-600" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl text-stone-900 sm:text-3xl">
                      {category.title}
                    </h2>
                    <p className="mt-1 text-sm text-stone-500">
                      {category.description}
                    </p>
                  </div>
                </div>
                <Link
                  href="/#book"
                  className="inline-flex items-center gap-1 rounded-full bg-stone-800 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700"
                >
                  Book now
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>

            {/* Service list */}
            <div className="grid gap-4 sm:grid-cols-2">
              {category.services.map((service, i) => (
                <FadeIn key={service.name} delay={0.1 + i * 0.05}>
                  <div className="group flex h-full flex-col justify-between rounded-xl border border-stone-100 bg-stone-50 p-5 transition hover:border-stone-200 hover:shadow-sm">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-medium text-stone-800">
                          {service.name}
                        </h3>
                        <span className="shrink-0 text-sm font-semibold text-stone-700">
                          {service.price}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-stone-500">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 text-xs text-stone-400">
                      <Clock className="h-3.5 w-3.5" />
                      {service.duration}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-stone-100 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl text-stone-900">
              Ready to book?
            </h2>
            <p className="mt-3 text-stone-500">
              Call us or schedule online — we can&apos;t wait to take care of
              you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:9209223325"
                className="rounded-full bg-stone-800 px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-stone-700"
              >
                Call 920-922-3325
              </a>
              <Link
                href="/#contact"
                className="rounded-full border border-stone-300 px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-stone-700 transition hover:border-stone-500 hover:bg-white"
              >
                Send a message
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}