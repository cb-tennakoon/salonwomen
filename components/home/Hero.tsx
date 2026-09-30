"use client";

import Link from "next/link";
import { Scissors } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";

export default function Hero() {
  return (
    <PageTransition>
    <section className="relative overflow-hidden bg-stone-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Text */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex justify-center lg:justify-start"
          >
            <Scissors className="h-8 w-8 text-stone-400" strokeWidth={1.25} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl lg:text-6xl"
          >
            Give Yourself
            <span className="mt-1 block font-light italic text-stone-500">
              a moment of happiness
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-6 h-px w-16 origin-left bg-stone-300 lg:mx-0"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 text-lg font-medium uppercase tracking-widest text-stone-700"
          >
            Welcome to Create
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mx-auto mt-3 max-w-md text-stone-500 lg:mx-0"
          >
            A wellness luxury spa & beauty salon dedicated to inspiring life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Link
              href="/#book"
              className="rounded-full bg-stone-800 px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-stone-700"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-stone-300 px-8 py-3.5 text-sm font-medium uppercase tracking-wider text-stone-700 transition hover:border-stone-500 hover:bg-white"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Images */}
        <div className="relative order-1 mx-auto h-[340px] w-full max-w-md sm:h-[420px] lg:order-2 lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -3 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute left-0 top-4 z-10 w-[55%] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
          >
            <img
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80"
              alt="Beautiful woman smiling"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="absolute bottom-0 right-0 w-[58%] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
          >
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
              alt="Spa massage experience"
              className="aspect-[3/4] w-full object-cover"
            />
          </motion.div>

          <div className="absolute -right-4 top-1/3 -z-10 h-48 w-48 rounded-full bg-rose-100/60 blur-3xl" />
          <div className="absolute -left-6 bottom-10 -z-10 h-40 w-40 rounded-full bg-amber-100/50 blur-3xl" />
        </div>
      </div>
    </section>
    </PageTransition>
  );
}