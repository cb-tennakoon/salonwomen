import { Phone, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";

export default function TopBar() {
  return (
    <div className="bg-stone-800 text-stone-200 text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="tel:9209223325"
            className="flex items-center gap-1.5 transition hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>920-922-3325</span>
          </a>
          <a
            href="mailto:createsalonandspa@yahoo.com"
            className="hidden items-center gap-1.5 transition hover:text-white sm:flex"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>createsalonandspa@yahoo.com</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition hover:text-white"
          >
            <FacebookIcon className="h-4 w-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition hover:text-white"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}