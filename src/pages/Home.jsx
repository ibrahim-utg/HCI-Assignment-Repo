import { NavLink } from "react-router-dom";
import {
  GraduationCap,
  Users,
  Sprout,
  ShieldCheck,
  ArrowRight,
  MapPin,
} from "lucide-react";
import TreeCounter from "../components/TreeCounter.jsx";
import SectionHeading from "../components/SectionHeader.jsx";

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Agricultural Coaching",
    text: "Hands-on, practical training that gives young people real farming skills, not just theory.",
  },
  {
    icon: Users,
    title: "Seminars & Workshops",
    text: "Regular sessions open to youth and adults alike, held across communities throughout the year.",
  },
  {
    icon: Sprout,
    title: "Plant Education",
    text: "Introducing newer, higher-yielding plant varieties alongside the local species farmers already know.",
  },
  {
    icon: ShieldCheck,
    title: "Land Protection",
    text: "Teaching the soil and land care practices that keep Gambian farmland fertile for generations.",
  },
];

const goals = [
  "Grow a generation of confident, skilled young Gambian farmers.",
  "Protect and restore farmland soil across the country.",
  "Put hardier, higher-yielding crop varieties into local hands.",
  "Plant 100,000 trees across The Gambia, every single year.",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-8 md:py-24">
          <div>
            <p className="eyebrow flex items-center gap-1.5">
              <MapPin size={14} /> Faraba, The Gambia
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl">
              Growing tomorrow's farmers,{" "}
              <span className="italic text-leaf-dark">today.</span>
            </h1>
            <p className="mt-5 max-w-lg font-body text-lg leading-relaxed text-ink/75">
              Agro-Youth Foundation is a community-rooted nonprofit coaching
              Gambian youth into agriculture &mdash; through hands-on training,
              regular seminars, plant education, and a nationwide tree-planting
              initiative.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <NavLink
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 font-body font-bold text-cream shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-forest-light"
              >
                Support Our Work <ArrowRight size={18} />
              </NavLink>
              <NavLink
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full border-2 border-forest/20 px-6 py-3.5 font-body font-bold text-forest-dark transition-colors hover:border-forest/40 hover:bg-forest/5"
              >
                See Our Programs
              </NavLink>
            </div>
          </div>

          <div className="rounded-3xl border border-forest/10 bg-white/50 p-7 shadow-sm sm:p-9">
            <TreeCounter
              target={100000}
              label="Trees planted across The Gambia, every year"
            />
            <p className="mt-5 border-t border-forest/10 pt-5 text-sm leading-relaxed text-ink/65">
              Our flagship initiative: a standing commitment to plant{" "}
              <strong className="text-forest-dark">100,000 trees a year</strong>
              , every year, in communities across the country.
            </p>
          </div>
        </div>
        <div className="furrow-divider" />
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="What We Do"
          title="Four ways we nurture youth into agriculture"
          subtitle="Each program feeds the next: learning leads to practice, and practice leads to land that's cared for and trees that stay standing."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-forest/10 bg-white/40 p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf/15 text-leaf-dark transition-colors group-hover:bg-leaf group-hover:text-cream">
                <Icon size={22} strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-forest-dark">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{text}</p>
            </div>
          ))}
        </div>
        <NavLink
          to="/programs"
          className="mt-8 inline-flex items-center gap-1.5 font-body font-bold text-forest-dark hover:text-leaf-dark"
        >
          Explore our programs in depth <ArrowRight size={16} />
        </NavLink>
      </section>

      {/* Goals */}
      <section className="bg-forest-dark py-16 text-cream md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Our Goals"
            title="What we're working toward"
            light
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {goals.map((goal, i) => (
              <div
                key={goal}
                className="flex items-start gap-4 rounded-2xl bg-cream/5 p-5"
              >
                <span className="font-mono text-sm font-bold text-gold-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-cream/85">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gold/20 p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h3 className="text-2xl font-semibold text-forest-dark sm:text-3xl">
              Want to be part of this?
            </h3>
            <p className="mt-2 max-w-md text-ink/70">
              Join a seminar, volunteer with a planting day, or help fund the
              work directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <NavLink
              to="/contact"
              className="rounded-full border-2 border-forest/25 px-6 py-3 font-body font-bold text-forest-dark hover:bg-cream"
            >
              Get In Touch
            </NavLink>
            <NavLink
              to="/donate"
              className="rounded-full bg-forest px-6 py-3 font-body font-bold text-cream hover:bg-forest-light"
            >
              Donate
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
