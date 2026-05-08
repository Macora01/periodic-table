'use client';

import { useEffect, useRef } from 'react';
import { useElement } from '@/context/ElementContext';
import { categoryColors, stateLabels } from './categoryColors';

const stateIcons: Record<string, string> = { solid: '⬛', liquid: '💧', gas: '💨', unknown: '?' };

export default function ElementDetail() {
  const { selected, setSelected } = useElement();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selected) closeRef.current?.focus();
  }, [selected]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [setSelected]);

  if (!selected) return null;

  const colors = categoryColors[selected.category];

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-30 lg:hidden animate-fade-in"
        onClick={() => setSelected(null)}
        aria-hidden="true"
      />

      <aside
        ref={panelRef}
        role="complementary"
        aria-label={`Detalles de ${selected.name}`}
        className={[
          'fixed right-0 top-0 h-full w-full max-w-sm z-40',
          'bg-zinc-900 border-l border-zinc-700/60 overflow-y-auto',
          'animate-slide-in shadow-2xl',
        ].join(' ')}
      >
        {/* Header */}
        <div className={`relative p-5 border-b border-zinc-700/60`}>
          <button
            ref={closeRef}
            onClick={() => setSelected(null)}
            aria-label="Cerrar panel"
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            ✕
          </button>

          <div className="flex items-start gap-4">
            <div className={`w-16 h-16 rounded-lg border flex flex-col items-center justify-center shrink-0 ${colors.cell}`}>
              <span className="text-xs text-white/40 font-mono">{selected.number}</span>
              <span className="text-2xl font-bold text-white/95 leading-none">{selected.symbol}</span>
            </div>
            <div className="min-w-0">
              <h2 className="text-xl font-bold text-white leading-tight">{selected.name}</h2>
              <p className="text-sm text-zinc-400">{selected.nameEn}</p>
              <span className={`inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full font-medium ${colors.badge}`}>
                {colors.label}
              </span>
            </div>
          </div>
        </div>

        {/* Properties grid */}
        <div className="p-5 space-y-5 text-sm">
          <section aria-labelledby="props-heading">
            <h3 id="props-heading" className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
              Propiedades
            </h3>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <dt className="text-xs text-zinc-500">Masa atómica</dt>
                <dd className="text-zinc-100 font-mono font-medium">{selected.mass} u</dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">Estado</dt>
                <dd className="text-zinc-100">
                  {stateIcons[selected.state]} {stateLabels[selected.state]}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">Período / Grupo</dt>
                <dd className="text-zinc-100 font-mono">{selected.period} / {selected.group ?? '—'}</dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">Bloque</dt>
                <dd className="text-zinc-100 font-mono uppercase">{selected.block}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs text-zinc-500">Electronegatividad (Pauling)</dt>
                <dd className="text-zinc-100 font-mono">
                  {selected.electronegativity !== null ? selected.electronegativity : '—'}
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs text-zinc-500">Configuración electrónica</dt>
                <dd className="text-zinc-100 font-mono text-xs break-all">{selected.electronConfig}</dd>
              </div>
            </dl>
          </section>

          <hr className="border-zinc-700/60" />

          <section aria-labelledby="history-heading">
            <h3 id="history-heading" className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
              Historia y descubrimiento
            </h3>
            <p className="text-zinc-300 leading-relaxed">{selected.history}</p>
          </section>

          <hr className="border-zinc-700/60" />

          <section aria-labelledby="uses-heading">
            <h3 id="uses-heading" className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
              Usos principales
            </h3>
            <ul className="space-y-1.5" role="list">
              {selected.uses.map((use, i) => (
                <li key={i} className="flex gap-2 text-zinc-300">
                  <span className="text-zinc-600 mt-0.5 shrink-0">›</span>
                  {use}
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-zinc-700/60" />

          <section aria-labelledby="facts-heading">
            <h3 id="facts-heading" className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
              Curiosidades
            </h3>
            <ul className="space-y-2" role="list">
              {selected.facts.map((fact, i) => (
                <li key={i} className="text-zinc-300 leading-relaxed border-l-2 border-zinc-700 pl-3">
                  {fact}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </aside>
    </>
  );
}
