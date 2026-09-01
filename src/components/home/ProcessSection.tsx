'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FileText, Mail, BadgeCheck } from 'lucide-react';
import { applicantContactWithin } from '@/lib/site';

const steps = [
  {
    n: '1',
    title: 'Submit your application',
    body: 'Complete the secure form. Choose a category and tell us, in your own words, why you are applying.',
    icon: FileText,
  },
  {
    n: '2',
    title: 'Personal review',
    body: `Our coordinator reads every file. ${applicantContactWithin()}`,
    icon: Mail,
  },
  {
    n: '3',
    title: 'Grant decision',
    body: 'Selected applicants receive next steps by email. Awards are not guaranteed.',
    icon: BadgeCheck,
  },
];

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="container-page">
        <p className="section-label">Process</p>
        <h2 className="mt-3 text-3xl md:text-4xl">How a DHHS grant works</h2>
        <div className="accent-bar mt-4" />
        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div
            className="absolute top-10 right-[16.67%] left-[16.67%] hidden h-0.5 bg-gradient-to-r from-[var(--gp-blue)] via-[var(--gp-yellow)] to-[var(--gp-blue-vivid)] md:block"
            aria-hidden
          />
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className={`card-flat relative p-8 transition-all duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gp-navy)] text-white ring-4 ring-white">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <p className="mt-5 text-center text-xs font-bold tracking-widest text-[var(--gp-yellow-dark)]">
                  STEP {s.n}
                </p>
                <h3 className="mt-2 text-center text-xl">{s.title}</h3>
                <p className="mt-3 text-center text-sm leading-relaxed text-[var(--gp-muted)]">{s.body}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link href="/how-it-works" className="btn-outline">
            Full process
          </Link>
        </div>
      </div>
    </section>
  );
}
