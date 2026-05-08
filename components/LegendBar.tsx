'use client';

import { useState } from 'react';
import { useElement } from '@/context/ElementContext';
import { categoryColors } from './categoryColors';
import type { ElementCategory } from '@/types/element';

const categories = Object.entries(categoryColors) as [
  ElementCategory,
  (typeof categoryColors)[ElementCategory]
][];

export default function LegendBar() {
  const { highlightedCategory, setHighlightedCategory } = useElement();
  const [tooltip, setTooltip] = useState<ElementCategory | null>(null);

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filtrar por categoría">
        {/* Botón "Todos" — siempre visible, activo cuando no hay filtro */}
        <button
          onClick={() => setHighlightedCategory(null)}
          aria-pressed={highlightedCategory === null}
          className={[
            'text-xs px-2.5 py-1 rounded-full border transition-all duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
            highlightedCategory === null
              ? 'bg-white text-zinc-900 border-white scale-105 font-semibold shadow-sm'
              : 'bg-zinc-800/60 border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-500',
          ].join(' ')}
        >
          Todos
        </button>

        {categories.map(([key, val]) => (
          <div key={key} className="relative">
            <button
              onClick={() => setHighlightedCategory(highlightedCategory === key ? null : key)}
              onMouseEnter={() => setTooltip(key)}
              onMouseLeave={() => setTooltip(null)}
              onFocus={() => setTooltip(key)}
              onBlur={() => setTooltip(null)}
              aria-pressed={highlightedCategory === key}
              aria-describedby={`tooltip-${key}`}
              className={[
                'text-xs px-2.5 py-1 rounded-full border transition-all duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
                highlightedCategory === key
                  ? val.badge + ' border-white/30 scale-105 shadow-sm'
                  : 'bg-zinc-800/60 border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-500',
              ].join(' ')}
            >
              {val.label}
            </button>

            {/* Tooltip — aparece DEBAJO del botón para no salirse de pantalla */}
            {tooltip === key && (
              <div
                id={`tooltip-${key}`}
                role="tooltip"
                className={[
                  'absolute top-full left-0 mt-2 z-50',
                  'w-72 p-3 rounded-lg border border-zinc-700 shadow-xl',
                  'bg-zinc-900 text-zinc-300 text-xs leading-relaxed',
                  'animate-fade-in',
                  'max-w-[calc(100vw-2rem)]',
                ].join(' ')}
              >
                {/* Flecha apuntando hacia arriba */}
                <span
                  className="absolute bottom-full left-4 border-4 border-transparent border-b-zinc-700"
                  aria-hidden="true"
                />
                {/* Indicador de color + título */}
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className={`inline-block w-2.5 h-2.5 rounded-sm shrink-0 ${val.badge}`} aria-hidden="true" />
                  <span className="font-semibold text-white">{val.label}</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">{val.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Hint */}
      <p className="text-xs text-zinc-600">
        Pasa el cursor sobre una categoría para ver su definición · Haz clic para filtrar · <span className="text-zinc-500">Todos</span> para mostrar la tabla completa
      </p>
    </div>
  );
}
