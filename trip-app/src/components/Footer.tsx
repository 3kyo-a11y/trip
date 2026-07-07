import { MapPin, Heart, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-emerald-500" />
              <span className="text-white font-bold text-lg">旅行攻略</span>
            </Link>
            <p className="text-sm leading-relaxed">
              发现中国最美的风景，记录最真实的旅行体验。
              <br />让每一次出发都充满期待。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速导航</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">首页</Link></li>
              <li><Link to="/list" className="hover:text-emerald-400 transition-colors">全部攻略</Link></li>
              <li><Link to="/favorites" className="hover:text-emerald-400 transition-colors flex items-center gap-1"><Heart className="w-3 h-3" />我的收藏</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contact@tripguide.cn
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs">
          © {new Date().getFullYear()} 旅行攻略 · 用心发现每一处风景
        </div>
      </div>
    </footer>
  );
}
