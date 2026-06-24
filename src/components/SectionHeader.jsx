export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      {eyebrow && (
        <p className={`eyebrow ${light ? "text-gold-light" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className={`mt-2 text-3xl font-semibold sm:text-4xl ${light ? "text-cream" : ""}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 font-body text-base leading-relaxed ${light ? "text-cream/75" : "text-ink/70"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
