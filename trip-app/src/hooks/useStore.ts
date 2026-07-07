import { create } from 'zustand';
import type {  FilterState  } from "../types";

interface AppState {
  filters: FilterState;
  favorites: string[];
  updateFilters: (filters: Partial<FilterState>) => void;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const initialFilters: FilterState = {
  search: '',
  region: '',
  category: '',
  season: '',
  budget: '',
  sortBy: 'hot',
};

export const useAppStore = create<AppState>((set, get) => ({
  filters: initialFilters,
  favorites: [],
  updateFilters: (partial) =>
    set((state) => ({
      filters: { ...state.filters, ...partial },
    })),
  toggleFavorite: (id) =>
    set((state) => {
      const isFav = state.favorites.includes(id);
      return {
        favorites: isFav
          ? state.favorites.filter((f) => f !== id)
          : [...state.favorites, id],
      };
    }),
  isFavorite: (id) => get().favorites.includes(id),
}));
