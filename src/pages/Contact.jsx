import { useState } from 'react'
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react'
import SectionHeading from "../components/SectionHeader";
//import Accordion from '../components/Accordion'

const faqs = [
  {
    question: 'How can I get involved as a volunteer?',
    answer:
      'Send us a message below or call our office \u2014 we place volunteers in coaching, seminar logistics, and our community planting days throughout the year.',
  },
  {
    question: 'Can my community request a seminar?',
    answer:
      'Yes. We hold seminars regularly across The Gambia, including communities far from Faraba. Reach out and our Head of Implementation will help schedule a visit.',
  },
  {
    question: 'Do you accept donations other than money?',
    answer:
      'Definitely. Seeds, tools, land for demonstration plots, and transport support are all welcome \u2014 contact our Head of Finance to arrange an in-kind donation.',
  },
  {
    question: 'Is the tree planting initiative open to the public?',
    answer:
      'Yes \u2014 our planting days are open to anyone who wants to help reach our goal of 100,000 trees a year. Ask us about the next one near you.',
  },
  {
    question: 'How do I know my donation is being used well?',
    answer:
      'Every program on our Donate page is funded and tracked separately, and our Head of Finance oversees how each contribution is spent.',
  },
]

const channels = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@agroyouthfoundation.gm',
    note: 'Best for detailed questions, partnership, and media inquiries.',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+220 700 0000',
    note: 'Reach our office directly during the week.',
  },
  {
    icon: MessageCircle,
    title: 'SMS',
    value: '+220 700 0000',
    note: 'Quick questions about seminars or upcoming planting days.',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Faraba, The Gambia',
    note: 'Our team works out of Faraba and travels to communities nationwide.',
  },
]

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Fill in your name, email, and message before sending.')
      return
    }
    setError('')
    setSent(true)
    setForm(initialForm)
  }

  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:px-8 md:pt-20">
        <p className="eyebrow">Get In Touch</p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.1] sm:text-5xl">
          We'd love to hear from you.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
          Whether you want to attend a seminar, host a planting day, or just ask a question &mdash;
          here's how to reach the Agro-Youth Foundation team.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6 md:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, title, value, note }) => (
            <div key={title} className="rounded-2xl border border-forest/10 bg-white/40 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf/15 text-leaf-dark">
                <Icon size={20} strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-ink/50">{title}</h3>
              <p className="mt-1 font-display text-lg font-semibold text-forest-dark">{value}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          {/* FAQ */}
          <div>
            <SectionHeading eyebrow="Common Questions" title="Things people often ask us" />
            <div className="mt-6">
              
            </div>
          </div>

          {/* Form */}
          <div>
            <SectionHeading eyebrow="Send A Message" title="Drop us a note" />
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-2xl border border-forest/10 bg-white/40 p-6">
              {sent && (
                <div className="flex items-start gap-2.5 rounded-xl bg-leaf/15 p-4 text-sm text-forest-dark">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-leaf-dark" />
                  <p>Thanks for reaching out! A member of our team will get back to you soon.</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="text-xs font-semibold text-ink/70">Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange('name')}
                  placeholder="Your full name"
                  className="mt-1 w-full rounded-lg border border-forest/15 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-leaf"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs font-semibold text-ink/70">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg border border-forest/15 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-leaf"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs font-semibold text-ink/70">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder="How can we help?"
                  className="mt-1 w-full rounded-lg border border-forest/15 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-leaf"
                />
              </div>

              {error && <p className="text-xs font-semibold text-clay">{error}</p>}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 font-body text-sm font-bold text-cream transition-colors hover:bg-forest-light active:scale-95 transtion"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}