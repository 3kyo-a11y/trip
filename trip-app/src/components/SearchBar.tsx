import { Search, X } from 'lucide-react';
import { useState } from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = '搜索景点或城市...' }: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`relative flex items-center bg-white border-2 rounded-xl transition-colors ${focused ? 'border-emerald-500 shadow-sm' : 'border-gray-200'}`}>
      <Search className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className="flex-1 px-3 py-3 text-gray-900 placeholder-gray-400 bg-transparent outline-none"
      />
      {value && (
        <button onClick={() => onChange('')} className="p-2 mr-1 text-gray-400 hover:text-gray-600 transition-colors">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
