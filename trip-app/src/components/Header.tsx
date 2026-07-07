import { Globe, Compass, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              旅行攻略
            </span>
          </Link>

          {/* Nav - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">
              首页
            </Link>
            <Link to="/list" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">
              全部攻略
            </Link>
            <Link to="/favorites" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              我的收藏
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-emerald-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Globe className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <Link to="/" className="px-3 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
              首页
            </Link>
            <Link to="/list" className="px-3 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>
              全部攻略
            </Link>
            <Link to="/favorites" className="px-3 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <MapPin className="w-4 h-4" />
              我的收藏
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
