import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl tracking-[0.2em] text-white">
              CREATE
            </p>
            <p className="mt-1 text-xs tracking-[0.3em]">SALON & SPA</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-stone-800 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Create Salon & Spa. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}