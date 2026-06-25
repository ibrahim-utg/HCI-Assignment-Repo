import { Handshake, Sprout, Leaf, Users2 } from 'lucide-react'
import SectionHeading from "../components/SectionHeader";

const values = [
  {
    icon: Handshake,
    title: 'Community First',
    text: 'We work with communities, not just in them. Every seminar and planting day starts with listening to what a community actually needs.',
  },
  {
    icon: Sprout,
    title: 'Knowledge That Travels',
    text: "What's taught in a seminar room doesn't stay there. Our coaching follows up and brings the lesson onto real land.",
  },
  {
    icon: Leaf,
    title: 'Healthy Land, Lasting Harvest',
    text: 'Crops are only as strong as the soil beneath them, so land protection and nourishment sit at the centre of everything we teach.',
  },
  {
    icon: Users2,
    title: 'Room For Everyone',
    text: 'Our seminars welcome youth and adults side by side, because lasting change in agriculture takes a whole community, not just one generation.',
  },
]

const goals = [
  'Equip young people with skills that make agriculture a viable, respected future.',
  'Bring practical training directly to communities, including those far from Faraba.',
  'Build local know-how around plant varieties and land stewardship that outlasts any one visit.',
  'Leave every community we work with more food-secure and more forested than we found it.',
]

const leadership = [
  { role: 'President', initials: 'P', focus: 'Sets the foundation\u2019s direction and represents Agro-Youth Foundation nationally.' },
  { role: 'Vice President', initials: 'VP', focus: 'Supports leadership across programs and steps in to keep operations moving.' },
  { role: 'Head of Finance', initials: 'HF', focus: 'Manages funding, budgets, and keeps every program accountable to its donors.' },
  { role: 'Head of Communications', initials: 'HC', focus: 'Tells the story of our work and keeps communities and partners informed.' },
  { role: 'Head of Implementation', initials: 'HI', focus: 'Runs the day-to-day delivery of seminars, coaching, and planting days on the ground.' },
]

export default function About() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 md:px-8 md:pt-20">
        <p className="eyebrow">What We Stand For</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.1] sm:text-5xl">
          Agriculture is the Gambia's future. We're making sure its youth are ready for it.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
          Agro-Youth Foundation began with a simple observation: young Gambians are this
          country's future farmers, but too few have had the training, tools, or land knowledge to
          make agriculture feel like a real path forward. We exist to close that gap &mdash; one
          seminar, one seedling, one acre at a time.
        </p>
      </section>

      <div className="furrow-divider mx-auto max-w-6xl" />

      {/* Values */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <SectionHeading eyebrow="Our Values" title="What guides every program we run" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-forest/10 bg-white/40 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                <Icon size={22} strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-forest-dark">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community-centric goals */}
      <section className="bg-leaf/10 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Community-Centred Goals"
            title="Why we measure ourselves by communities, not just acres"
            subtitle="Trees and training matter because of what they do for the people who live alongside them. These are the outcomes we're chasing."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {goals.map((goal) => (
              <li key={goal} className="flex items-start gap-3 rounded-xl bg-white/60 p-4 text-[15px] leading-relaxed text-ink/75">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-leaf" />
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="Our People"
          title="Led by a team that shows up"
          subtitle="A leadership team of five guides a staff and volunteer base of more than 50 people working across Faraba and beyond."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map(({ role, initials, focus }) => (
            <div key={role} className="rounded-2xl border border-forest/10 bg-white/40 p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest font-mono text-sm font-bold text-cream">
                {initials}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-forest-dark">{role}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{focus}</p>
            </div>
          ))}
          <div className="flex flex-col items-start justify-center rounded-2xl border-2 border-dashed border-forest/15 p-6">
            <p className="text-lg font-semibold text-forest-dark">+50 staff &amp; volunteers</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Coaches, facilitators, and field staff carrying this work into communities every week.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
