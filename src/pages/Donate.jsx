import { useState } from "react";
import { HandHeart } from "lucide-react";
import SectionHeading from "../components/SectionHeader.jsx";
import DonationCard from "../components/DonationCard.jsx";
import { initialCampaigns } from "../data/campaigns.js";

export default function Donate() {
  const [campaigns, setCampaigns] = useState(initialCampaigns);

  const handleDonate = (id, amount) => {
    setCampaigns((prev) =>
      prev.map((c) => (c.id === id ? { ...c, raised: c.raised + amount } : c)),
    );
  };

  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:px-8 md:pt-20">
        <p className="eyebrow flex items-center gap-1.5">
          <HandHeart size={14} /> Fund The Work
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-[1.1] sm:text-5xl">
          Every program here runs on community support.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">
          Pick a program below and pledge what you can. Every Dalasi goes toward
          seminars, outreach, seed preservation, and the trees we plant across
          The Gambia each year.
        </p>
        <p className="mt-4 max-w-2xl rounded-xl bg-gold/15 px-4 py-3 text-sm text-forest-dark">
          We're finalising secure online payments. For now, pledges are logged
          here and our team will follow up directly &mdash; no payment is
          collected on this page.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <SectionHeading
          eyebrow="Active Programs"
          title="Choose where your support goes"
          subtitle="Each program below is funded separately, so you can support exactly the work that matters most to you."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <DonationCard
              key={campaign.id}
              campaign={campaign}
              onDonate={handleDonate}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="rounded-3xl bg-forest-dark p-8 text-cream sm:p-10">
          <h3 className="text-2xl font-semibold sm:text-3xl">
            Prefer to give another way?
          </h3>
          <p className="mt-2 max-w-xl text-cream/80">
            Bank transfers, in-kind donations, and partnership funding are all
            welcome &mdash; reach out and our Head of Finance will help arrange
            it.
          </p>
        </div>
      </section>
    </div>
  );
}
