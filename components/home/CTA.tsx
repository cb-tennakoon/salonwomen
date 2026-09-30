import Link from "next/link";
import { Phone } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";

export default function CTA() {
  return (
    <PageTransition>
    <section id="book" className="bg-stone-800 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl">
          Ready for your moment of happiness?
        </h2>
        <p className="mt-4 text-stone-300">
          Book your appointment online or call us today. We can&apos;t wait to
          welcome you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:9209223325"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-stone-800 transition hover:bg-stone-100"
          >
            <Phone className="h-4 w-4" />
            Call 920-922-3325
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-stone-500 px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-white transition hover:border-stone-300"
          >
            Send a message
          </Link>
        </div>
      </div>
    </section>
    </PageTransition>
  );
}