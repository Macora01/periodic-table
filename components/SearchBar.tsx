'use client';

import { useRef } from 'react';
import { useElement } from '@/context/ElementContext';

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useElement();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative w-full max-w-xs">
      <label htmlFor="element-search" className="sr-only">
        Buscar elemento
      </label>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" aria-hidden="true">
        ⌕
      </span>
      <input
        ref={inputRef}
        id="element-search"
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Buscar elemento..."
        autoComplete="off"
        className={[
          'w-full bg-zinc-800 border border-zinc-700 rounded-lg pl-8 pr-3 py-1.5',
          'text-sm text-zinc-100 placeholder-zinc-500',
          'focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent',
          'transition-colors',
        ].join(' ')}
      />
      {searchQuery && (
        <button
          onClick={() => { setSearchQuery(''); inputRef.current?.focus(); }}
          aria-label="Limpiar búsqueda"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors text-xs"
        >
          ✕
        </button>
      )}
    </div>
  );
}
