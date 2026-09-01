export function PageHero({
  label,
  title,
  description,
  dark = false,
}: {
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  if (dark) {
    return (
      <section className="border-b border-[var(--gp-line)] bg-[var(--gp-navy)] pt-16 pb-12 text-white">
        <div className="container-page max-w-4xl">
          <p className="section-label-accent">{label}</p>
          <h1 className="mt-3 text-4xl font-bold text-white">{title}</h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className="page-hero">
      <div className="container-page max-w-4xl">
        <p className="section-label">{label}</p>
        <h1 className="mt-3 text-4xl">{title}</h1>
        <div className="accent-bar mt-4" />
        {description ? (
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--gp-muted)] md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
