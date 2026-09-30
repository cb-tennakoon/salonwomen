"use client";

import FadeIn from "@/components/ui/FadeIn";

const team = [
  {
    name: "Audra",
    role: "Owner & Color Specialist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Jessica",
    role: "Senior Stylist",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Maria",
    role: "Nail Artist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Elena",
    role: "Esthetician",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-stone-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-stone-500">
              Our professional beauty team will take care of you. We continue
              education monthly to bring you the most current trends and highest
              quality products.
            </p>
          </div>
        </FadeIn>

        {/* Cards – staggered */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.1}>
              <div className="text-center">
                <div className="mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-serif text-xl text-stone-800">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-stone-500">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}