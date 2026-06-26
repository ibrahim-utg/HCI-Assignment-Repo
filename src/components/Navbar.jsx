import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Sprout, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the viewport is resized back up to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClass = ({ isActive }) =>
    `font-body text-[15px] font-semibold transition-colors hover:text-leaf-dark ${
      isActive
        ? "text-forest-dark underline underline-offset-8 decoration-2 decoration-leaf"
        : "text-ink/70"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-display text-lg font-semibold text-forest-dark"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream">
            <Sprout size={18} strokeWidth={2.25} />
          </span>
          <span className="leading-tight">
            Agro-Youth
            <span className="block text-xs font-mono font-normal uppercase tracking-[0.16em] text-leaf-dark">
              Foundation
            </span>
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/donate"
            className="rounded-full bg-gold px-5 py-2.5 font-body text-[15px] font-bold text-forest-dark shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            Donate
          </NavLink>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-forest-dark md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav className="border-t border-forest/10 bg-cream px-5 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-4 pt-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-body text-base font-semibold ${
                    isActive
                      ? "text-forest-dark underline underline-offset-4 decoration-2 decoration-leaf"
                      : "text-ink/70"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-gold px-5 py-3 text-center font-body text-base font-bold text-forest-dark"
            >
              Donate
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
