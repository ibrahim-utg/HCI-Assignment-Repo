import { GraduationCap, Users, Sprout, ShieldCheck, TreeDeciduous, Check } from 'lucide-react'
import SectionHeading from "../components/SectionHeader";
import TreeCounter from '../components/TreeCounter'

const steps = [
  { n: '01', title: 'Learn', text: 'Seminars open the door, free and open to youth and adults alike.' },
  { n: '02', title: 'Practice', text: 'Coaching takes the lesson onto real land, with hands-on follow-up.' },
  { n: '03', title: 'Protect', text: 'Land and plant education makes sure the harvest is one that lasts.' },
  { n: '04', title: 'Plant', text: 'Every cycle feeds back into our standing goal: 100,000 trees a year.' },
]

const programs = [
  {
    icon: GraduationCap,
    title: 'Agricultural Coaching',
    text: 'Practical, hands-on coaching that turns a seminar room lesson into a skill someone actually has. Our coaches work directly with young farmers on real land.',
    points: [
      'One-on-one and small-group coaching sessions',
      'Demonstration plots that turn theory into muscle memory',
      'Ongoing follow-up visits so new techniques actually take root',
    ],
  },
  {
    icon: Users,
    title: 'Seminars & Workshops',
    text: 'We hold seminars regularly across communities, inviting both youth and adults, because lasting change in agriculture takes a whole community, not just one generation.',
    points: [
      'Open to youth and adults, side by side',
      'Held regularly throughout the year across different communities',
      'Covers everything from soil health to better growing practices',
    ],
  },
  {
    icon: Sprout,
    title: 'Plant Education',
    text: 'We educate farmers about plants — including newer species and varieties that outperform the local crops many growers have relied on for generations.',
    points: [
      'Introducing higher-yield, more resilient plant varieties',
      'Side-by-side comparisons with familiar local crops',
      'Practical guidance on where and how to access improved seed',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Land Protection & Nourishment',
    text: "Crops are only as strong as the soil beneath them. We teach the land care practices that keep Gambian farmland fertile and productive for the long run.",
    points: [
      'Erosion control and soil-health practices',
      'Composting and natural soil enrichment methods',
      'Protecting farmland from overuse and long-term degradation',
    ],
  },
]

export default function Programs() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:px-8 md:pt-20">
        <p className="eyebrow">Our Programs</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.1] sm:text-5xl">
          How we grow farmers, not just farms.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
          Every program builds on the one before it. Learning leads to practice, practice leads to
          land that's cared for, and care for the land leads to trees that stay standing.
        </p>
      </section>

      {/* Process */}
      <section className="border-y border-forest/10 bg-white/40 py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.n}>
                <p className="font-mono text-sm font-bold text-gold-dark">{step.n}</p>
                <h3 className="mt-2 text-lg font-semibold text-forest-dark">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program detail */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-10">
          {programs.map(({ icon: Icon, title, text, points }) => (
            <div
              key={title}
              className="grid gap-6 rounded-3xl border border-forest/10 bg-white/40 p-7 sm:p-9 md:grid-cols-[auto_1fr] md:items-start"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf/15 text-leaf-dark">
                <Icon size={26} strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-forest-dark">{title}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-ink/75">{text}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink/70">
                      <Check size={16} className="mt-0.5 shrink-0 text-leaf-dark" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flagship: tree planting */}
      <section className="bg-forest-dark py-16 text-cream md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_auto] md:items-center md:px-8">
          <div>
            <p className="eyebrow text-gold-light">Our Flagship Initiative</p>
            <h2 className="mt-2 flex items-center gap-3 text-3xl font-semibold sm:text-4xl">
              <TreeDeciduous className="text-leaf-light" size={32} /> Tree Planting Initiative
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-cream/80">
              Every other program feeds into this one. We organise community planting days,
              distribute and care for seedlings, and hold ourselves to a single standing target:
              100,000 trees planted across The Gambia, every year, without exception.
            </p>
          </div>
          <div className="rounded-3xl bg-cream/5 p-7 sm:p-8">
            <TreeCounter target={100000} label="Trees planted across The Gambia, every year" />
          </div>
        </div>
      </section>
    </div>
  )
}