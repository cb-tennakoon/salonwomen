import Hero from "@/components/home/Hero";
import ServiceCategories from "@/components/home/ServiceCategories";
import About from "@/components/home/About";
import ServicesGrid from "@/components/home/ServicesGrid";
import Team from "@/components/home/Team";
import CTA from "@/components/home/CTA";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCategories />
      <About />
      <ServicesGrid />
      <Team />
      <CTA />
      <Contact />
    </>
  );
}