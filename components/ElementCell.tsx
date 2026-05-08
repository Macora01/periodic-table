'use client';

import { memo } from 'react';
import type { ChemElement } from '@/types/element';
import { useElement } from '@/context/ElementContext';
import { categoryColors } from './categoryColors';

interface Props {
  element: ChemElement;
  dimmed: boolean;
}

function ElementCell({ element, dimmed }: Props) {
  const { selected, setSelected } = useElement();
  const isSelected = selected?.number === element.number;
  const colors = categoryColors[element.category];

  const handleClick = () => setSelected(isSelected ? null : element);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`${element.name}, número atómico ${element.number}`}
      aria-pressed={isSelected}
      style={{ gridColumn: element.col, gridRow: element.row }}
      className={[
        'relative flex flex-col items-center justify-center rounded border transition-all duration-150 cursor-pointer select-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-1 focus-visible:ring-offset-zinc-900',
        'p-0.5 min-h-[3.2rem] md:min-h-[4rem]',
        colors.cell,
        // Texto oscuro porque los fondos son pasteles claros
        'text-zinc-800',
        isSelected ? 'ring-2 ring-zinc-600 scale-105 z-10 brightness-95' : '',
        dimmed ? 'opacity-20' : 'opacity-100',
      ].join(' ')}
    >
      {/* Número atómico */}
      <span className="absolute top-0.5 left-1 text-[0.45rem] md:text-[0.5rem] text-zinc-500 font-mono leading-none">
        {element.number}
      </span>
      {/* Símbolo */}
      <span className="text-sm md:text-base font-bold text-zinc-800 leading-none mt-1">
        {element.symbol}
      </span>
      {/* Nombre */}
      <span className="text-[0.38rem] md:text-[0.45rem] text-zinc-600 leading-none mt-0.5 truncate w-full text-center px-0.5">
        {element.name}
      </span>
    </button>
  );
}

export default memo(ElementCell);
