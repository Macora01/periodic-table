import { ElementProvider } from '@/context/ElementContext';
import PeriodicTable from '@/components/PeriodicTable';
import ElementDetail from '@/components/ElementDetail';
import SearchBar from '@/components/SearchBar';
import LegendBar from '@/components/LegendBar';

export default function Home() {
  return (
    <ElementProvider>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-20">
          <div className="max-w-screen-2xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="shrink-0">
              <h1 className="text-base font-bold text-white tracking-tight leading-none">
                Tabla Periódica
              </h1>
              <p className="text-xs text-zinc-500 mt-0.5">118 elementos · tpe.facore.cl</p>
            </div>
            <div className="sm:ml-auto">
              <SearchBar />
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 max-w-screen-2xl mx-auto w-full px-3 py-4 flex flex-col gap-4">
          {/* Legend */}
          <section aria-label="Leyenda de categorías">
            <LegendBar />
          </section>

          {/* Periodic Table */}
          <section aria-label="Tabla periódica de los elementos">
            <PeriodicTable />
          </section>

          {/* Stats bar */}
          <footer className="text-xs text-zinc-600 flex flex-wrap gap-x-4 gap-y-1 mt-auto pb-2">
            <span>118 elementos</span>
            <span>7 períodos · 18 grupos</span>
            <span>Bloques s, p, d, f</span>
            <span className="ml-auto">Datos: dominio público · IUPAC 2021</span>
          </footer>
        </main>

        {/* Detail panel */}
        <ElementDetail />
      </div>
    </ElementProvider>
  );
}
