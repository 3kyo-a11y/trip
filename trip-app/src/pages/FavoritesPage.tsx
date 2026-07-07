import { attractions } from "../data/attractions";
import AttractionCard from "../components/AttractionCard";
import { useAppStore } from "../hooks/useStore";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  const favorites = useAppStore((s) => s.favorites);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);

  const favoriteAttractions = attractions.filter((a) => favorites.includes(a.id));

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold text-gray-900">????</h1>
          <p className="text-gray-500 mt-1">
            ???? {favoriteAttractions.length} ???
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {favoriteAttractions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteAttractions.map((a) => (
              <AttractionCard
                key={a.id}
                attraction={a}
                isFavorite={true}
                onToggleFavorite={() => toggleFavorite(a.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">?????????</p>
            <p className="text-gray-400 text-sm mt-2">
              ?????????????
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
