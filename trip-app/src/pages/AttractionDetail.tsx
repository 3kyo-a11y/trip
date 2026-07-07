import { useState} from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Star } from 'lucide-react';
import { getAttractionById } from '../data/attractions';
import { useAppStore } from '../hooks/useStore';
import { useParams } from 'react-router-dom';

export default function AttractionDetail() {
  const { id } = useParams<{ id: string }>();
  const attraction = id ? getAttractionById(id) : null;
  const isFavorite = useAppStore((s) => s.isFavorite(id || ''));
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);
  const [activeTab, setActiveTab] = useState<'overview' | 'route' | 'transport' | 'food' | 'tips'>('overview');

  if (!attraction) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900">景点未找到</h2>
          <Link to="/" className="text-emerald-600 mt-4 inline-block">返回首页</Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { key: 'overview' as const, label: '概览' },
    { key: 'route' as const, label: '游玩路线' },
    { key: 'transport' as const, label: '交通' },
    { key: 'food' as const, label: '美食住宿' },
    { key: 'tips' as const, label: '实用贴士' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-64 sm:h-80 bg-gradient-to-br from-emerald-500 to-teal-600 overflow-hidden">
        <img
          src={attraction.coverImage}
          alt={attraction.name}
          className="w-full h-full object-cover opacity-50"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-1 text-white/80 hover:text-white mb-4 text-sm">
            <ArrowLeft className="w-4 h-4" /> 返回
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{attraction.name}</h1>
              <div className="flex items-center gap-3 mt-2 text-white/90">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{attraction.city}</span>
                <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-300" fill="currentColor" />{attraction.rating}</span>
              </div>
            </div>
            <button
              onClick={() => toggleFavorite(attraction.id)}
              className={`p-3 rounded-full ${isFavorite ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'} transition-colors`}
              aria-label={isFavorite ? '取消收藏' : '收藏'}
            >
              <Star className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 py-3 overflow-x-auto text-sm">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-gray-500">最佳季节：</span>
              <span className="font-medium text-gray-900">{attraction.bestSeason.join('、')}</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-gray-500">建议时长：</span>
              <span className="font-medium text-gray-900">{attraction.suggestedDuration}</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-gray-500">门票：</span>
              <span className="font-medium text-emerald-600">{attraction.ticketPrice}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-1 border-b border-gray-200 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.key
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && (
            <>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">景点介绍</h2>
                <p className="text-gray-600 leading-relaxed">{attraction.description}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">必看亮点</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {attraction.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-gray-100">
                      <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-gray-700 text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">游客评价</h2>
                <div className="space-y-3">
                  {attraction.reviews.map((r, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">{r.user}</span>
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <Star key={j} className={`w-3.5 h-3.5 ${j < r.rating ? 'text-amber-400' : 'text-gray-200'}`} fill={j < r.rating ? 'currentColor' : 'none'} />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-gray-400">{r.date}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{r.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'route' && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">推荐路线</h2>
              <div className="space-y-4">
                {attraction.routes.map((route, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-2">{route.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">⏱ {route.duration}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      {route.stops.map((stop, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-sm rounded-full font-medium">{stop}</span>
                          {j < route.stops.length - 1 && <span className="text-gray-300">→</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'transport' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">如何到达</h2>
                <div className="space-y-2">
                  {attraction.transport.arrive.map((t, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg border border-gray-100 text-sm text-gray-700">{t}</div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">当地交通</h2>
                <div className="space-y-2">
                  {attraction.transport.local.map((t, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg border border-gray-100 text-sm text-gray-700">{t}</div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'food' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">美食推荐</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {attraction.food.map((f, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="font-semibold text-gray-900">{f.name}</div>
                      <div className="text-sm text-gray-500 mt-1">{f.type} · {f.price}</div>
                      <div className="text-xs text-gray-400 mt-1">📍 {f.location}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">住宿推荐</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {attraction.accommodation.map((a, i) => (
                    <div key={i} className={`p-4 rounded-lg border ${
                      a.level === '高端' ? 'bg-amber-50 border-amber-200' :
                      a.level === '舒适' ? 'bg-emerald-50 border-emerald-200' :
                      'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="text-xs font-medium text-gray-500 mb-1">{a.level}</div>
                      <div className="font-semibold text-gray-900">{a.name}</div>
                      <div className="text-sm text-emerald-600 mt-1">{a.priceRange}</div>
                      <div className="text-xs text-gray-400 mt-1">{a.distance}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">费用预算</h2>
                <div className="bg-white p-5 rounded-xl border border-gray-100">
                  <div className="text-lg font-bold text-emerald-600 mb-3">{attraction.budget.total}</div>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(attraction.budget.breakdown).map(([k, v]) => (
                      <div key={k} className="flex justify-between text-sm">
                        <span className="text-gray-500">{k}</span>
                        <span className="font-medium text-gray-900">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tips' && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">实用贴士</h2>
              <div className="space-y-3">
                {attraction.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
