import type { ElementCategory } from '@/types/element';

// Paleta pastel clara — fondos claros sobre fondo oscuro (estilo acuarela/prelavado)
// Texto dentro de las celdas debe ser oscuro (ver ElementCell.tsx)

export const categoryColors: Record<
  ElementCategory,
  { cell: string; badge: string; label: string; description: string }
> = {
  'alkali-metal': {
    cell:  'bg-lime-200 border-lime-300 hover:bg-lime-100',
    badge: 'bg-lime-200 text-lime-900',
    label: 'Metal alcalino',
    description:
      'Metales del grupo 1 extremadamente reactivos. Reaccionan con violencia al contacto con el agua, liberando hidrógeno. Son blandos, ligeros y se oxidan al instante en el aire. Ejemplos: litio (Li), sodio (Na), potasio (K).',
  },
  'alkaline-earth-metal': {
    cell:  'bg-orange-200 border-orange-300 hover:bg-orange-100',
    badge: 'bg-orange-200 text-orange-900',
    label: 'Metal alcalinotérreo',
    description:
      'Metales del grupo 2, reactivos pero menos que los alcalinos. Forman óxidos e hidróxidos básicos. Son esenciales en la vida (calcio en huesos, magnesio en la clorofila). Ejemplos: magnesio (Mg), calcio (Ca), bario (Ba).',
  },
  'transition-metal': {
    cell:  'bg-sky-200 border-sky-300 hover:bg-sky-100',
    badge: 'bg-sky-200 text-sky-900',
    label: 'Metal de transición',
    description:
      'Metales de los grupos 3–12 con subcapa d parcialmente llena. Son duros, buenos conductores y forman compuestos de colores variados. La mayoría tiene múltiples estados de oxidación. Ejemplos: hierro (Fe), cobre (Cu), oro (Au), titanio (Ti).',
  },
  'post-transition-metal': {
    cell:  'bg-teal-200 border-teal-300 hover:bg-teal-100',
    badge: 'bg-teal-200 text-teal-900',
    label: 'Metal post-transición',
    description:
      'Metales situados a la derecha de los de transición en la tabla. Más blandos y con puntos de fusión más bajos que los metales de transición. Conductores moderados. Ejemplos: aluminio (Al), estaño (Sn), plomo (Pb), bismuto (Bi).',
  },
  'metalloid': {
    cell:  'bg-stone-200 border-stone-300 hover:bg-stone-100',
    badge: 'bg-stone-200 text-stone-900',
    label: 'Metaloide',
    description:
      'Elementos con propiedades intermedias entre metales y no metales. Son semiconductores por naturaleza, base de toda la electrónica moderna. Su conductividad varía con la temperatura. Ejemplos: boro (B), silicio (Si), germanio (Ge), arsénico (As).',
  },
  'reactive-nonmetal': {
    cell:  'bg-green-200 border-green-300 hover:bg-green-100',
    badge: 'bg-green-200 text-green-900',
    label: 'No metal reactivo',
    description:
      'No metales con alta electronegatividad que forman compuestos covalentes. Son la base de la química orgánica y de la vida. Malos conductores de electricidad. Ejemplos: carbono (C), nitrógeno (N), oxígeno (O), fósforo (P), azufre (S).',
  },
  'halogen': {
    cell:  'bg-pink-200 border-pink-300 hover:bg-pink-100',
    badge: 'bg-pink-200 text-pink-900',
    label: 'Halógeno',
    description:
      'No metales del grupo 17, los más reactivos de todos. "Formadores de sal": reaccionan directamente con los metales para formar sales. Tienen alta electronegatividad y son oxidantes potentes. Ejemplos: flúor (F), cloro (Cl), bromo (Br), yodo (I).',
  },
  'noble-gas': {
    cell:  'bg-blue-200 border-blue-300 hover:bg-blue-100',
    badge: 'bg-blue-200 text-blue-900',
    label: 'Gas noble',
    description:
      'Gases del grupo 18 con capa electrónica externa completa (octeto). Extremadamente estables y casi inertes químicamente. Se encuentran en pequeñísimas cantidades en la atmósfera. Ejemplos: helio (He), neón (Ne), argón (Ar), xenón (Xe).',
  },
  'lanthanide': {
    cell:  'bg-violet-200 border-violet-300 hover:bg-violet-100',
    badge: 'bg-violet-200 text-violet-900',
    label: 'Lantánido',
    description:
      'Serie de 15 elementos del bloque f (números 57–71). También llamados "tierras raras". Tienen propiedades muy similares entre sí. Son claves en tecnología moderna: imanes, láseres, pantallas y vehículos eléctricos. Ejemplos: neodimio (Nd), europio (Eu), gadolinio (Gd).',
  },
  'actinide': {
    cell:  'bg-rose-200 border-rose-300 hover:bg-rose-100',
    badge: 'bg-rose-200 text-rose-900',
    label: 'Actínido',
    description:
      'Serie de 15 elementos radiactivos del bloque f (números 89–103). Todos tienen isótopos inestables. Los más pesados son artificiales, producidos en reactores o aceleradores. Incluyen los elementos nucleares más conocidos. Ejemplos: uranio (U), plutonio (Pu), americio (Am).',
  },
  'unknown': {
    cell:  'bg-slate-300 border-slate-400 hover:bg-slate-200',
    badge: 'bg-slate-300 text-slate-900',
    label: 'Propiedades desconocidas',
    description:
      'Elementos superpesados sintéticos (generalmente Z > 108) cuyas propiedades químicas no han podido confirmarse experimentalmente. Se producen de a pocos átomos por experimento y se desintegran en milisegundos, impidiendo su estudio detallado.',
  },
};

export const stateLabels: Record<string, string> = {
  solid:   'Sólido',
  liquid:  'Líquido',
  gas:     'Gas',
  unknown: 'Desconocido',
};
