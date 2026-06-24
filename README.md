# Agro-Youth Foundation — Website

A front-end-only React site for Agro-Youth Foundation, a community nonprofit in Faraba, The
Gambia, coaching youth into agriculture through coaching, seminars, plant education, land
protection, and a 100,000-tree-a-year planting initiative.

## Pages

- **Home** — mission overview, the 100,000-trees-a-year counter, and program highlights.
- **About** — values, community-centred goals, and the leadership team.
- **Programs** — an in-depth look at each initiative, plus the flagship tree-planting program.
- **Donate** — fundable campaigns (seminars, outreach travel, the seed bank, tree planting, and
  a general fund), each with a progress bar and an inline pledge form.
- **Contact** — email, phone, SMS, a map of Faraba, and a message form.

## Running it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview
```

## Important notes before you go live

- **Placeholder content.** The email, phone number, leadership bios, and donation campaign
  targets/amounts are realistic examples, not real data. Replace them in:
  - `src/components/Navbar.jsx` / `Footer.jsx` / `Contact.jsx` — contact details
  - `src/pages/About.jsx` — leadership team and copy
  - `src/data/campaigns.js` — donation campaigns, targets, and starting totals
- **No backend.** This is a front-end-only app, as requested. The donation pledges and contact
  form both work and update on-screen instantly, but nothing is saved or sent anywhere — refreshing
  the page resets every pledge back to its starting value. To make donations or messages persist or
  actually process payment, you'll need to connect a backend (e.g. Stripe/PayPal for payments, or an
  email service / form endpoint like Formspree for the contact form).
- **Map embed.** The Contact page embeds a basic Google Maps view of Faraba with no API key
  required. If you want a pinned exact address, swap the `q=` value in
  `src/pages/Contact.jsx` for your precise address or coordinates.

## Stack

Vite + React 18, React Router for the 5 pages, Tailwind CSS for styling, and lucide-react for
icons. No backend, no database, no external API keys required to run it.
