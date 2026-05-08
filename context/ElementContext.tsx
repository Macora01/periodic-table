'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import type { ChemElement, ElementCategory, ElementContextValue } from '@/types/element';

const ElementContext = createContext<ElementContextValue | null>(null);

export function ElementProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<ChemElement | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedCategory, setHighlightedCategory] = useState<ElementCategory | null>(null);

  return (
    <ElementContext.Provider value={{ selected, setSelected, searchQuery, setSearchQuery, highlightedCategory, setHighlightedCategory }}>
      {children}
    </ElementContext.Provider>
  );
}

export function useElement(): ElementContextValue {
  const ctx = useContext(ElementContext);
  if (!ctx) throw new Error('useElement must be used within ElementProvider');
  return ctx;
}
