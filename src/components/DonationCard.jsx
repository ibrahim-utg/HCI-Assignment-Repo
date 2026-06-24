import { useState } from "react";
import {
  Megaphone,
  Bus,
  Warehouse,
  TreeDeciduous,
  HeartHandshake,
  Sprout,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";
import ProgressBar from "./ProgressBar.jsx";

const iconMap = {
  Megaphone,
  Bus,
  Warehouse,
  TreeDeciduous,
  HeartHandshake,
  Sprout,
};
const presetAmounts = [100, 500, 1000];

export default function DonationCard({ campaign, onDonate }) {
  const Icon = iconMap[campaign.icon] ?? Sprout;
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = Number(amount);

    if (!value || value <= 0) {
      setError("Enter an amount greater than D0.");
      return;
    }

    setError("");
    onDonate(campaign.id, value);
    setConfirmed({ amount: value });
    setName("");
    setAmount("");
  };

  return (
    <div className="rounded-2xl border border-forest/10 bg-white/40 p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf/15 text-leaf-dark">
        <Icon size={22} strokeWidth={2} />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-forest-dark">
        {campaign.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">
        {campaign.blurb}
      </p>

      <div className="mt-5">
        <ProgressBar raised={campaign.raised} target={campaign.target} />
      </div>

      <button
        onClick={() => {
          setOpen((v) => !v);
          setConfirmed(null);
        }}
        className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-full bg-forest px-5 py-2.5 font-body text-sm font-bold text-cream transition-colors hover:bg-forest-light"
      >
        {open ? "Close" : "Pledge to this program"}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {open && (
        <div className="mt-4 rounded-xl bg-forest/5 p-4">
          {confirmed ? (
            <div className="flex items-start gap-2.5 text-sm text-forest-dark">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-leaf-dark"
              />
              <p>
                Thank you{name ? "" : ""}! Your pledge of{" "}
                <strong>D{confirmed.amount.toLocaleString()}</strong> has been
                added to this program. Our team will reach out about next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor={`name-${campaign.id}`}
                  className="text-xs font-semibold text-ink/70"
                >
                  Name{" "}
                  <span className="font-normal text-ink/45">(optional)</span>
                </label>
                <input
                  id={`name-${campaign.id}`}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="mt-1 w-full rounded-lg border border-forest/15 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-leaf"
                />
              </div>

              <div>
                <label
                  htmlFor={`amount-${campaign.id}`}
                  className="text-xs font-semibold text-ink/70"
                >
                  Amount (GMD)
                </label>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {presetAmounts.map((preset) => (
                    <button
                      type="button"
                      key={preset}
                      onClick={() => setAmount(String(preset))}
                      className={`rounded-full border px-3 py-1 text-xs font-bold transition-colors ${
                        Number(amount) === preset
                          ? "border-leaf bg-leaf text-cream"
                          : "border-forest/15 bg-white text-forest-dark hover:border-leaf"
                      }`}
                    >
                      D{preset}
                    </button>
                  ))}
                </div>
                <input
                  id={`amount-${campaign.id}`}
                  type="number"
                  min="1"
                  inputMode="numeric"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Other amount"
                  className="mt-2 w-full rounded-lg border border-forest/15 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-leaf"
                />
              </div>

              {error && (
                <p className="text-xs font-semibold text-clay">{error}</p>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-gold px-5 py-2.5 font-body text-sm font-bold text-forest-dark transition-colors hover:bg-gold-light"
              >
                Confirm Pledge
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
