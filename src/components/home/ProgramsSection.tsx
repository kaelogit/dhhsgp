import Link from 'next/link';
import {
  HeartPulse,
  Home,
  Briefcase,
  GraduationCap,
  BookOpen,
  Landmark,
  Users,
  HandHeart,
} from 'lucide-react';
import { GRANT_PROGRAMS } from '@/data/programs';

const icons = [HeartPulse, Home, Briefcase, GraduationCap, BookOpen, Landmark, Users, HandHeart];

const accents = [
  'border-l-[var(--gp-blue)]',
  'border-l-[var(--gp-blue-vivid)]',
  'border-l-[var(--gp-yellow-dark)]',
  'border-l-[var(--gp-blue)]',
  'border-l-[var(--gp-blue-vivid)]',
  'border-l-[var(--gp-yellow-dark)]',
  'border-l-[var(--gp-blue)]',
  'border-l-[var(--gp-blue-vivid)]',
];

export function ProgramsSection() {
  return (
    <section className="bg-[var(--gp-paper)] py-20">
      <div className="container-page">
        <p className="section-label">Programs</p>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">Who DHHS grants are for</h2>
        <div className="accent-bar mt-4" />
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--gp-muted)] md:text-base">
          Medical care. Housing. Business ventures. School. Educators. Retirees. Seniors. Grants
          are reviewed at every income level — you do not need to be in crisis to apply.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GRANT_PROGRAMS.map((p, i) => {
            const Icon = icons[i] ?? Users;
            return (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className={`program-card border-l-4 ${accents[i]}`}
              >
                <div className="icon-badge">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--gp-muted)]">{p.summary}</p>
                <span className="mt-4 inline-block text-xs font-bold tracking-wide text-[var(--gp-blue)] uppercase">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
