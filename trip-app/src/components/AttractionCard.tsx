import { MapPin, Star, Calendar, Clock, Ticket } from 'lucide-react';
import type {  Attraction  } from "../types";

interface Props {
  attraction: Attraction;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export default function AttractionCard({ attraction, isFavorite, onToggleFavorite }: Props) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Cover */}
      <div className="relative h-48 bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center overflow-hidden">
        <img
          src={attraction.coverImage}
          alt={attraction.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).parentElement!.innerHTML = `
              <div class="flex flex-col items-center justify-center h-full text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                <span class="mt-2 text-sm">${attraction.name}</span>
              </div>
            `;
          }}
        />
        <button
          onClick={onToggleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-full ${isFavorite ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-500 hover:bg-white'} transition-colors`}
          aria-label={isFavorite ? '取消收藏' : '加入收藏'}
        >
          <Star className="w-4 h-4" fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
        <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
          {attraction.category.slice(0, 2).map((c) => (
            <span key={c} className="px-2 py-0.5 text-xs bg-black/50 text-white rounded-full backdrop-blur-sm">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-lg text-gray-900">{attraction.name}</h3>
            <div className="flex items-center gap-1 text-gray-500 text-sm mt-0.5">
              <MapPin className="w-3.5 h-3.5" />
              {attraction.city}
            </div>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md">
            <Star className="w-3.5 h-3.5 text-amber-500" fill="currentColor" />
            <span className="text-sm font-semibold text-amber-700">{attraction.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{attraction.description}</p>

        {/* Info Row */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {attraction.bestSeason.join('/')}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {attraction.suggestedDuration}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1 text-emerald-600 font-semibold text-sm">
            <Ticket className="w-3.5 h-3.5" />
            {attraction.ticketPrice.split('/')[0].trim()}
          </div>
          <a href={`/attraction/${attraction.id}`} className="text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors">
            查看详情 →
          </a>
        </div>
      </div>
    </div>
  );
}
