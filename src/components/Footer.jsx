import { NavLink } from "react-router-dom";
import { Sprout, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf text-forest-dark">
                <Sprout size={18} strokeWidth={2.25} />
              </span>
              Agro-Youth Foundation
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              A community-rooted nonprofit in Faraba, The Gambia, coaching young
              people into agriculture and planting 100,000 trees every year for
              the country's future.
            </p>
          </div>

          <div>
            <p className="eyebrow text-gold-light">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/programs", "Programs"],
                ["/donate", "Donate"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-cream/75 transition-colors hover:text-gold-light"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold-light">Reach us</p>
            <ul className="mt-3 space-y-2.5 text-sm text-cream/75">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0 text-leaf-light" />{" "}
                Faraba, The Gambia
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-leaf-light" />{" "}
                info@agroyouthfoundation.gm
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-leaf-light" /> +220
                329 9767
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="shrink-0 text-leaf-light" />{" "}
                SMS +220 329 9767
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Agro-Youth Foundation. Growing youth,
            growing The Gambia.
          </p>
          <p>Built for the community of Faraba and beyond.</p>
        </div>
      </div>
    </footer>
  );
}
