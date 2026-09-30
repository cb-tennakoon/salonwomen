"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left column */}
          <FadeIn>
            <div>
              <h2 className="font-serif text-3xl text-stone-900 sm:text-4xl">
                Visit Us
              </h2>
              <p className="mt-4 text-stone-500">
                We&apos;d love to see you. Drop by or get in touch — we&apos;re
                here to help you look and feel your best.
              </p>

              <ul className="mt-10 space-y-6">
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100">
                    <MapPin className="h-5 w-5 text-stone-600" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">Address</p>
                    <p className="mt-0.5 text-stone-500">
                      Your Street Address, City, WI 53000
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100">
                    <Phone className="h-5 w-5 text-stone-600" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">Phone</p>
                    <a
                      href="tel:9209223325"
                      className="mt-0.5 block text-stone-500 hover:text-stone-800"
                    >
                      920-922-3325
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100">
                    <Mail className="h-5 w-5 text-stone-600" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">Email</p>
                    <a
                      href="mailto:createsalonandspa@yahoo.com"
                      className="mt-0.5 block text-stone-500 hover:text-stone-800"
                    >
                      createsalonandspa@yahoo.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100">
                    <Clock className="h-5 w-5 text-stone-600" />
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">Hours</p>
                    <p className="mt-0.5 text-stone-500">
                      Mon – Fri: 9am – 7pm
                      <br />
                      Sat: 9am – 4pm
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.15}>
            <form
              className="rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-serif text-xl text-stone-800">
                Send a message
              </h3>
              <div className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-stone-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-stone-500 focus:ring-1 focus:ring-stone-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-stone-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-stone-500 focus:ring-1 focus:ring-stone-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-stone-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1.5 w-full resize-none rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-stone-500 focus:ring-1 focus:ring-stone-500"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-stone-800 py-3 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-stone-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}