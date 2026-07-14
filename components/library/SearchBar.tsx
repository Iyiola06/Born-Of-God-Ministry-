'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FilterPanel } from './FilterPanel';

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="relative w-full group">
      <div className={`absolute inset-0 bg-white/5 rounded-2xl blur-xl transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className={`relative flex items-center bg-black/40 border backdrop-blur-2xl rounded-2xl transition-all duration-300 ${isFocused ? 'border-brand/50 shadow-[0_0_30px_rgba(244,196,0,0.15)]' : 'border-white/10 shadow-lg'}`}>
        <div className="pl-6 pr-4 py-4">
          <Search className={`w-5 h-5 transition-colors ${isFocused ? 'text-brand' : 'text-white/40'}`} />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search by book title, author, topic, or keyword..."
          className="flex-1 bg-transparent border-none text-white text-base md:text-lg focus:outline-none focus:ring-0 placeholder:text-white/40 py-4 w-full"
        />

        {query && (
          <button 
            onClick={() => setQuery('')}
            className="p-2 text-white/40 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
        
        <div className="pr-4 pl-2 py-2">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${showFilters ? 'bg-brand text-brand-charcoal' : 'bg-white/5 text-white/70 hover:bg-brand/10 hover:text-brand'}`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-4 z-50"
          >
            <FilterPanel onClose={() => setShowFilters(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
