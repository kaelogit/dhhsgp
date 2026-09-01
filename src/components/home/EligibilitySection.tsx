import Link from 'next/link';
import { GRANT_PROGRAMS } from '@/data/programs';
import { ELIGIBILITY_OPEN } from '@/lib/site';

export function EligibilitySection() {
  return (
    <section className="bg-white py-20">
      <div className="container-page">
        <p className="section-label">Eligibility</p>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">Who can apply</h2>
        <div className="accent-bar mt-4" />
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--gp-muted)] md:text-base">
          {ELIGIBILITY_OPEN} DHHS awards grants to individuals each and every day across a variety
          of goals. Choose the closest category  -  completeness matters more than a perfect label.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GRANT_PROGRAMS.map((p) => (
            <Link
              key={p.slug}
              href={`/programs/${p.slug}`}
              className="card-flat block p-5 transition-colors hover:border-[var(--gp-blue-light)]"
            >
              <h3 className="text-base font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--gp-muted)]">{p.who}</p>
            </Link>
          ))}
        </div>
        <Link href="/eligibility" className="btn-outline mt-10">
          Full eligibility
        </Link>
      </div>
    </section>
  );
}
