import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Camera } from 'lucide-react';
import { attractions, filterAttractions } from '../data/attractions';
import AttractionCard from '../components/AttractionCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import { useAppStore } from '../hooks/useStore';

const featuredIds = ['forbidden-city', 'west-lake', 'great-wall', 'jiuzhaigou', 'huangshan'];
const featured = attractions.filter((a) => featuredIds.includes(a.id));

export default function Home() {
  const filters = useAppStore((s) => s.filters);
  const updateFilters = useAppStore((s) => s.updateFilters);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);
  const isFavorite = useAppStore((s) => s.isFavorite);

  const filtered = filterAttractions(filters.search, filters.region, filters.category, filters.season);
  const hotAttractions = filtered.length > 0 ? filtered : attractions;

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              发现中国<br />
              <span className="text-yellow-300">最美的风景</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-emerald-100 leading-relaxed">
              30+ 热门景点详细攻略，涵盖交通、住宿、美食、预算，让你的每一次出发都从容不迫。
            </p>
            <div className="mt-8">
              <SearchBar
                value={filters.search}
                onChange={(v) => updateFilters({ search: v })}
                placeholder="搜索景点或城市，如故宫"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/list"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
              >
                浏览全部攻略
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/list"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
              >
                <Compass className="w-4 h-4" />
                探索推荐
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: '热门景点', value: '30+' },
              { label: '覆盖城市', value: '15+' },
              { label: '详细攻略', value: '60+' },
              { label: '用户好评', value: '4.8' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">热门推荐</h2>
              <p className="text-gray-500 mt-1">精心挑选的必去景点</p>
            </div>
            <Link to="/list" className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-1 text-sm">
              查看全部 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((a) => (
              <AttractionCard
                key={a.id}
                attraction={a}
                isFavorite={isFavorite(a.id)}
                onToggleFavorite={() => toggleFavorite(a.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Attractions */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">全部攻略</h2>
            <p className="text-gray-500 mt-1">探索中国各地的精彩目的地</p>
          </div>
          <div className="mb-6">
            <FilterPanel filters={filters} onFilterChange={updateFilters} />
          </div>
          {hotAttractions.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotAttractions.map((a) => (
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
      </section>

      {/* Season Guide */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">按季节探索</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { season: '春', color: 'from-pink-400 to-rose-500', emoji: '??', desc: '花开时节' },
              { season: '夏', color: 'from-green-400 to-emerald-500', emoji: '??', desc: '绿意盎然' },
              { season: '秋', color: 'from-amber-400 to-orange-500', emoji: '??', desc: '层林尽染' },
              { season: '冬', color: 'from-blue-400 to-indigo-500', emoji: '??', desc: '银装素裹' },
            ].map((s) => (
              <button
                key={s.season}
                onClick={() => {
                  updateFilters({ season: s.season });
                  window.location.href = '/list';
                }}
                className={`bg-gradient-to-br ${s.color} text-white p-6 rounded-xl hover:shadow-lg transition-all hover:scale-105 text-center`}
              >
                <div className="text-3xl mb-2">{s.emoji}</div>
                <div className="font-bold text-lg">{s.season}季</div>
                <div className="text-sm opacity-90">{s.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
