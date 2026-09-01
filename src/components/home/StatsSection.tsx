'use client';

import type { ComponentType } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Clock, DollarSign, Sun, TrendingUp } from 'lucide-react';

function Stat({
  value,
  suffix,
  prefix = '',
  label,
  icon: Icon,
  visible,
  delay,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  visible: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!visible || done.current) return;
    done.current = true;
    const timer = setTimeout(() => {
      const start = performance.now();
      const duration = 1600;
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setCount(Math.floor((1 - Math.pow(1 - p, 3)) * value));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timer);
  }, [visible, value, delay]);

  return (
    <div className="stat-card">
      <div className="icon-badge mx-auto">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-3xl font-bold text-[var(--gp-blue)] md:text-4xl">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-[var(--gp-navy)]">{label}</p>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">By the numbers</p>
          <h2 className="mt-3 text-3xl md:text-4xl">A program built for real people</h2>
          <div className="accent-bar mx-auto mt-4" />
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          <Stat value={24} suffix="h" label="First email reply" icon={Clock} visible={visible} delay={0} />
          <div className="stat-card">
            <div className="icon-badge mx-auto">
              <DollarSign className="h-5 w-5" />
            </div>
            <p className="mt-4 text-3xl font-bold text-[var(--gp-blue)] md:text-4xl">$B+</p>
            <p className="mt-2 text-sm font-medium text-[var(--gp-navy)]">Grant money issued each year</p>
          </div>
          <div className="stat-card">
            <div className="icon-badge mx-auto">
              <TrendingUp className="h-5 w-5" />
            </div>
            <p className="mt-4 text-3xl font-bold text-[var(--gp-blue)] md:text-4xl">$100K–$1M</p>
            <p className="mt-2 text-sm font-medium text-[var(--gp-navy)]">Typical award range</p>
          </div>
          <div className="stat-card">
            <div className="icon-badge mx-auto">
              <Sun className="h-5 w-5" />
            </div>
            <p className="mt-4 text-3xl font-bold text-[var(--gp-blue)] md:text-4xl">Daily</p>
            <p className="mt-2 text-sm font-medium text-[var(--gp-navy)]">Awards to individuals</p>
          </div>
        </div>
      </div>
    </section>
  );
}
