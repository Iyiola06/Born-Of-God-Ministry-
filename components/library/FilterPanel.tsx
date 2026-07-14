'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

const categories = [
  'Leadership', 'Discipleship', 'Prayer', 'Faith', 'Healing', 
  'Evangelism', 'Family', 'Marriage', 'Youth', 'Holy Spirit', 
  'Church Growth', 'Pastoral Training', 'Bible Study', 'Devotionals', 
  'Children', 'Missions'
];

const sorts = ['Newest', 'Most Downloaded', 'Recently Added', 'Alphabetical'];

export function FilterPanel({ onClose }: { onClose: () => void }) {
  return (
    <Card className="p-6 md:p-8 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3">
          <h3 className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="bg-white/5 border-white/10 text-white/70 hover:bg-brand/10 hover:text-brand hover:border-brand/50 transition-colors cursor-pointer text-xs font-normal py-1.5 px-3"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4">Sort By</h3>
          <div className="flex flex-col gap-2">
            {sorts.map((sort) => (
              <button
                key={sort}
                className="text-left text-sm text-white/70 hover:text-brand py-1.5 px-3 rounded-lg hover:bg-brand/10 transition-colors"
              >
                {sort}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
        <button className="text-sm text-white/50 hover:text-brand transition-colors">
          Clear all filters
        </button>
        <button 
          onClick={onClose}
          className="px-6 py-2 bg-brand text-brand-charcoal text-sm font-medium rounded-full hover:bg-brand-light transition-colors"
        >
          Apply Filters
        </button>
      </div>
    </Card>
  );
}
