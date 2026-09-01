import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { FULL_NAME, HERO_INTRO } from '@/lib/site';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--gp-navy)] text-white">
      <Image
        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1800&q=80"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(125deg, rgba(22,46,81,0.97) 0%, rgba(26,68,128,0.88) 45%, rgba(0,94,162,0.55) 100%)',
        }}
      />
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-[var(--gp-blue-vivid)] opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[var(--gp-yellow)] opacity-10 blur-3xl" />

      <div className="container-page relative flex min-h-[72vh] flex-col items-center justify-center py-20 text-center lg:py-28">
        <p className="section-label-accent">{FULL_NAME}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
          The official page to apply for DHHS grants.
        </h1>
        <div className="accent-bar mx-auto mt-5" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          {HERO_INTRO}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/apply" className="btn-accent">
            Apply for a grant
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 rounded-md border-2 border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore programs
          </Link>
        </div>
      </div>
    </section>
  );
}
