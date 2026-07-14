'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { BookOpen, ArrowRight } from 'lucide-react';

const collections = [
  {
    title: 'Leadership Essentials',
    description: 'Core manuals and guides for pastors, elders, and ministry leaders.',
    count: 24,
    color: 'from-brand/40 to-brand-black/80',
    image: 'https://picsum.photos/seed/col1/800/600',
  },
  {
    title: 'Prayer & Intercession',
    description: 'Resources to deepen your prayer life and prophetic intercession.',
    count: 18,
    color: 'from-brand-soft/40 to-brand-charcoal/80',
    image: 'https://picsum.photos/seed/col2/800/600',
  },
  {
    title: 'Christian Living',
    description: 'Practical wisdom for navigating modern life with biblical principles.',
    count: 45,
    color: 'from-brand-light/40 to-brand-black/80',
    image: 'https://picsum.photos/seed/col3/800/600',
  },
  {
    title: 'Pastoral Training Course',
    description: 'The official curriculum used in our global leadership institute.',
    count: 12,
    color: 'from-brand/50 to-brand-charcoal/90',
    image: 'https://picsum.photos/seed/col4/800/600',
  },
];

export function Collections() {
  return (
    <section className="py-24 relative bg-brand-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="text-sm font-medium text-white/50 tracking-[0.2em] uppercase mb-2 block">
              Curated Series
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
              Popular Collections
            </h2>
          </div>
          <button className="text-sm font-medium text-white/70 hover:text-brand flex items-center gap-2 group transition-colors">
            View all collections
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative h-80 rounded-[2rem] overflow-hidden bg-black/50 border-white/10 cursor-pointer block transform hover:-translate-y-2 transition-all duration-500">
                {/* Background Image */}
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} mix-blend-overlay opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white/90 font-medium">
                      <BookOpen className="w-3.5 h-3.5" />
                      {collection.count} Books
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-white mb-2 leading-tight">
                    {collection.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-2">
                    {collection.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
