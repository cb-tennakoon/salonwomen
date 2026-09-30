import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";

const services = [
  {
    title: "Hair Cuts",
    description: "Men, women & children of all ages.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Color",
    description: "Semi to permanent, highlights to balayage.",
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Massage",
    description: "Specialized therapy + essential oil steam.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Makeup",
    description: "Shape, fill and correct for any occasion.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Eyelash Extensions",
    description: "Classic, hybrid, volume + keratin lifts.",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Skin Treatments",
    description: "Facials that leave your skin glowing.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Nails",
    description: "Gel, acrylic, art and classic manicures.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Waxing",
    description: "From brows to full legs — expert care.",
    image:
      "https://images.unsplash.com/photo-1519415387723-a1ac54a94e17?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ServicesGrid() {
  return (
    <PageTransition>
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-stone-900 sm:text-4xl">
            Salon Services
          </h2>
          <p className="mt-4 text-stone-500">
            We offer a full range of beauty services. Our professionals know how
            to handle a wide range of treatments.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-xl bg-stone-50 transition hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-stone-800">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-stone-500">
                  {service.description}
                </p>
                <Link
                  href="/#book"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-stone-700 transition group-hover:gap-2"
                >
                  Book now
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    </PageTransition>
  );
}