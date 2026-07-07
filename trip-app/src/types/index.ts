export interface Attraction {
  id: string;
  name: string;
  city: string;
  region: string;
  category: string[];
  rating: number;
  bestSeason: string[];
  suggestedDuration: string;
  ticketPrice: string;
  description: string;
  highlights: string[];
  routes: Route[];
  transport: TransportInfo;
  accommodation: AccommodationOption[];
  food: FoodOption[];
  budget: BudgetInfo;
  tips: string[];
  coverImage: string;
  images: string[];
  reviews: Review[];
}

export interface Route {
  name: string;
  duration: string;
  stops: string[];
}

export interface TransportInfo {
  arrive: string[];
  local: string[];
}

export interface AccommodationOption {
  level: '经济' | '舒适' | '高端';
  name: string;
  priceRange: string;
  distance: string;
}

export interface FoodOption {
  name: string;
  type: string;
  price: string;
  location: string;
}

export interface BudgetInfo {
  total: string;
  breakdown: Record<string, string>;
}

export interface Review {
  user: string;
  rating: number;
  date: string;
  content: string;
  images?: string[];
}

export interface FilterState {
  search: string;
  region: string;
  category: string;
  season: string;
  budget: string;
  sortBy: 'hot' | 'rating' | 'new';
}
