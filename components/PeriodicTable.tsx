'use client';

import { useMemo } from 'react';
import { elements } from '@/data/elements';
import { useElement } from '@/context/ElementContext';
import ElementCell from './ElementCell';

const PERIOD_LABELS = ['1', '2', '3', '4', '5', '6', '7', '', 'La', 'Ac'];
const GROUP_LABELS = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18'];

export default function PeriodicTable() {
  const { searchQuery, highlightedCategory } = useElement();

  const filteredNumbers = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return new Set(
      elements
        .filter(el =>
          el.name.toLowerCase().includes(q) ||
          el.nameEn.toLowerCase().includes(q) ||
          el.symbol.toLowerCase().includes(q) ||
          String(el.number) === q
        )
        .map(el => el.number)
    );
  }, [searchQuery]);

  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="min-w-[52rem] relative">
        {/* Group labels */}
        <div className="grid gap-0.5 mb-0.5" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))' }}>
          {GROUP_LABELS.map((g) => (
            <div key={g} className="text-center text-[0.5rem] text-zinc-500 font-mono py-0.5">
              {g}
            </div>
          ))}
        </div>

        <div className="flex gap-1">
          {/* Period labels */}
          <div className="flex flex-col gap-0.5 justify-start pt-0.5">
            {PERIOD_LABELS.map((label, i) => (
              <div
                key={i}
                className={`text-[0.45rem] text-zinc-500 font-mono flex items-center justify-end pr-0.5 ${
                  i === 7 ? 'invisible' : ''
                }`}
                style={{ minHeight: i === 7 ? '0.6rem' : '3.2rem' }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Element grid */}
          <div
            className="flex-1 grid gap-0.5"
            style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))', gridTemplateRows: 'repeat(10, auto)' }}
          >
            {/* Lanthanide placeholder cell in main table */}
            <div
              style={{ gridColumn: 3, gridRow: 6 }}
              className="rounded border border-pink-800/40 bg-pink-950/20 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-[0.4rem] text-pink-400/60 font-mono">57–71</span>
            </div>

            {/* Actinide placeholder cell in main table */}
            <div
              style={{ gridColumn: 3, gridRow: 7 }}
              className="rounded border border-rose-800/40 bg-rose-950/20 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-[0.4rem] text-rose-400/60 font-mono">89–103</span>
            </div>

            {/* Row separator */}
            <div style={{ gridColumn: '1 / -1', gridRow: 8 }} className="h-2" aria-hidden="true" />

            {elements.map((el) => {
              const isDimmedBySearch = filteredNumbers !== null && !filteredNumbers.has(el.number);
              const isDimmedByCategory = highlightedCategory !== null && el.category !== highlightedCategory;
              return (
                <ElementCell
                  key={el.number}
                  element={el}
                  dimmed={isDimmedBySearch || isDimmedByCategory}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
