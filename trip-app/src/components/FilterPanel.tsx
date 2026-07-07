import { Funnel } from 'lucide-react';
import { getRegions, getCategories } from '../data/attractions';
import type {  FilterState  } from "../types";

interface Props {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
}

export default function FilterPanel({ filters, onFilterChange }: Props) {
  const regions = getRegions();
  const categories = getCategories();

  const selectClass = 'w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-white text-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all appearance-none cursor-pointer';

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Funnel className="w-4 h-4 text-gray-400 flex-shrink-0" />
      <select
        className={selectClass}
        value={filters.region}
        onChange={(e) => onFilterChange({ region: e.target.value })}
      >
        <option value="">全部地区</option>
        {regions.map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      <select
        className={selectClass}
        value={filters.category}
        onChange={(e) => onFilterChange({ category: e.target.value })}
      >
        <option value="">全部分类</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <select
        className={selectClass}
        value={filters.season}
        onChange={(e) => onFilterChange({ season: e.target.value })}
      >
        <option value="">不限季节</option>
        <option value="春">春</option>
        <option value="夏">夏</option>
        <option value="秋">秋</option>
        <option value="冬">冬</option>
      </select>

      {(filters.region || filters.category || filters.season) && (
        <button
          onClick={() => onFilterChange({ region: '', category: '', season: '' })}
          className="px-3 py-2.5 text-sm text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors flex-shrink-0"
        >
          重置
        </button>
      )}
    </div>
  );
}
