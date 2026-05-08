export type ElementCategory =
  | 'alkali-metal'
  | 'alkaline-earth-metal'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'reactive-nonmetal'
  | 'halogen'
  | 'noble-gas'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

export type ElementState = 'solid' | 'liquid' | 'gas' | 'unknown';

export type ElementBlock = 's' | 'p' | 'd' | 'f';

export interface ChemElement {
  number: number;
  symbol: string;
  name: string;
  nameEn: string;
  mass: number;
  category: ElementCategory;
  state: ElementState;
  electronegativity: number | null;
  electronConfig: string;
  period: number;
  group: number | null;
  block: ElementBlock;
  /** CSS grid row (1-10, rows 8 separator, 9 lanthanides, 10 actinides) */
  row: number;
  /** CSS grid column (1-18) */
  col: number;
  history: string;
  uses: string[];
  facts: string[];
}

export interface ElementContextValue {
  selected: ChemElement | null;
  setSelected: (el: ChemElement | null) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  highlightedCategory: ElementCategory | null;
  setHighlightedCategory: (c: ElementCategory | null) => void;
}
