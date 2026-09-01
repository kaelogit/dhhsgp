'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { allAwards, AWARDS_PER_PAGE, type AwardRow } from '@/data/awards';

function shuffleAwards(rows: AwardRow[]): AwardRow[] {
  const copy = [...rows];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function AwardsTable() {
  const [page, setPage] = useState(1);
  const [shuffled, setShuffled] = useState<AwardRow[] | null>(null);

  useEffect(() => {
    setShuffled(shuffleAwards(allAwards));
    setPage(1);
  }, []);

  const totalPages = Math.ceil(allAwards.length / AWARDS_PER_PAGE);

  const pageRows = useMemo(() => {
    if (!shuffled) return [];
    const start = (page - 1) * AWARDS_PER_PAGE;
    return shuffled.slice(start, start + AWARDS_PER_PAGE);
  }, [page, shuffled]);

  if (!shuffled) {
    return (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--gp-line)] text-xs tracking-wider text-[var(--gp-blue)] uppercase">
              <th className="py-3 pr-4 font-semibold">Recipient</th>
              <th className="py-3 pr-4 font-semibold">Location</th>
              <th className="py-3 pr-4 font-semibold">Category</th>
              <th className="py-3 font-semibold">Grant</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => (
              <tr key={i} className="border-b border-[var(--gp-line)]">
                <td colSpan={4} className="py-3.5">
                  <div className="h-4 animate-pulse rounded bg-[var(--gp-paper)]" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--gp-line)] text-xs tracking-wider text-[var(--gp-blue)] uppercase">
              <th className="py-3 pr-4 font-semibold">Recipient</th>
              <th className="py-3 pr-4 font-semibold">Location</th>
              <th className="py-3 pr-4 font-semibold">Category</th>
              <th className="py-3 font-semibold">Grant</th>
            </tr>
          </thead>
          <tbody>
            {pageRows.map((row, index) => (
              <tr
                key={`${page}-${row.name}-${row.location}-${row.amount}-${index}`}
                className="border-b border-[var(--gp-line)]"
              >
                <td className="py-3.5 pr-4 font-medium text-[var(--gp-navy)]">{row.name}</td>
                <td className="py-3.5 pr-4 text-[var(--gp-muted)]">{row.location}</td>
                <td className="py-3.5 pr-4 text-[var(--gp-muted)]">{row.category}</td>
                <td className="py-3.5 font-semibold text-[var(--gp-blue)]">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--gp-line)] pt-6">
        <p className="text-sm text-[var(--gp-muted)]">
          Page {page} of {totalPages} · {allAwards.length} recent grants
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="btn-outline inline-flex items-center gap-1.5 px-4 py-2 text-sm disabled:pointer-events-none disabled:opacity-40"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
          <button
            type="button"
            className="btn-outline inline-flex items-center gap-1.5 px-4 py-2 text-sm disabled:pointer-events-none disabled:opacity-40"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
}
