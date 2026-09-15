import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { RESPONSE_HOURS } from '@/lib/site';

export function ApplyCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--gp-navy)] py-20">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(0,189,227,0.4) 0%, transparent 60%), radial-gradient(ellipse at bottom left, rgba(250,206,0,0.15) 0%, transparent 50%)',
        }}
      />
      <div className="container-page relative text-center">
        <p className="section-label-accent">Take the first step</p>
        <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
          Ready to apply for a DHHS grant?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
          One form. A coordinator is assigned to your file and replies by email within{' '}
          {RESPONSE_HOURS} hours.
        </p>
        <Link href="/apply" className="btn-accent mt-9">
          Apply now
          <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="mt-6 text-xs text-white/50">Awards range from $100,000 to $1,000,000</p>
      </div>
    </section>
  );
}
