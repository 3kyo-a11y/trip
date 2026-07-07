import { filterAttractions } from '../data/attractions';
import AttractionCard from '../components/AttractionCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import { useAppStore } from '../hooks/useStore';
import { Camera } from 'lucide-react';

export default function AttractionList() {
  const filters = useAppStore((s) => s.filters);
  const updateFilters = useAppStore((s) => s.updateFilters);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);
  const isFavorite = useAppStore((s) => s.isFavorite);

  const filtered = filterAttractions(filters.search, filters.region, filters.category, filters.season);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">全部攻略</h1>
          <div className="space-y-4">
            <SearchBar value={filters.search} onChange={(v) => updateFilters({ search: v })} placeholder="搜索景点或城市..." />
            <FilterPanel filters={filters} onFilterChange={updateFilters} />
          </div>
          <div className="mt-3 text-sm text-gray-500">
            共 {filtered.length} 个景点
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <AttractionCard
                key={a.id}
                attraction={a}
                isFavorite={isFavorite(a.id)}
                onToggleFavorite={() => toggleFavorite(a.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">没有找到匹配的景点</p>
            <p className="text-gray-400 text-sm mt-2">试试调整筛选条件</p>
          </div>
        )}
      </div>
    </main>
  );
}
