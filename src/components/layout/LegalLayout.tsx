import { PageHero } from '@/components/layout/PageHero';

export function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <PageHero label="Legal" title={title} />
      <div className="container-page max-w-3xl py-12">{children}</div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="mb-2 text-base font-semibold text-[var(--gp-navy)]">{title}</h2>
      <p className="text-sm leading-relaxed text-[var(--gp-muted)]">{children}</p>
    </div>
  );
}
