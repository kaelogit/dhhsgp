'use client';

import { useEffect, useMemo, useState } from 'react';
import { allAwards } from '@/data/awards';

function shuffleAwards<T>(rows: T[]): T[] {
  const copy = [...rows];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function LiveTicker() {
  const [awards, setAwards] = useState(allAwards);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setAwards(shuffleAwards(allAwards));
    setIndex(0);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % awards.length), 4200);
    return () => clearInterval(t);
  }, [awards.length]);

  const item = awards[index];

  return (
    <div className="border-y border-[var(--gp-line)] bg-[var(--gp-yellow-pale)] py-3">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm text-[var(--gp-muted)]">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--gp-yellow)] px-3 py-0.5 text-[10px] font-bold tracking-wider text-[var(--gp-navy)] uppercase">
          Awarded today
        </span>
        <span>
          <span className="font-bold text-[var(--gp-navy)]">{item.name}</span>
          {' '}in {item.location} received a {item.category.toLowerCase()} grant of{' '}
          <span className="font-bold text-[var(--gp-blue)]">{item.amount}</span>
        </span>
      </div>
    </div>
  );
}
