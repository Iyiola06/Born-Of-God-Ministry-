'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Play, Clock, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const sermons = [
  {
    id: 1,
    title: 'The Power of Sonship',
    speaker: 'Apostle John Doe',
    date: 'Oct 22, 2023',
    duration: '45 mins',
    image: 'https://picsum.photos/seed/sermon1/600/400',
  },
  {
    id: 2,
    title: 'Faith That Moves Mountains',
    speaker: 'Pastor Jane Smith',
    date: 'Oct 15, 2023',
    duration: '52 mins',
    image: 'https://picsum.photos/seed/sermon2/600/400',
  },
  {
    id: 3,
    title: 'Walking in Divine Purpose',
    speaker: 'Apostle John Doe',
    date: 'Oct 08, 2023',
    duration: '60 mins',
    image: 'https://picsum.photos/seed/sermon3/600/400',
  },
];

export function Sermons() {
  return (
    <section id="sermons" className="py-32 relative bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4">
              Latest Messages
            </h2>
            <p className="text-lg text-white/60 font-light">
              Catch up on recent teachings and be transformed by the Word of God.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button className="text-sm font-medium text-white/80 hover:text-white pb-1 border-b border-white/20 hover:border-white transition-colors">
              View All Sermons
            </button>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          {sermons.map((sermon, index) => (
            <motion.div
              key={sermon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group flex flex-col sm:flex-row items-center gap-6 p-4 rounded-3xl bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-colors overflow-hidden relative cursor-pointer">
                {/* Thumbnail */}
                <div className="relative w-full sm:w-64 aspect-video sm:aspect-auto sm:h-40 rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src={sermon.image}
                    alt={sermon.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 border border-white/30">
                      <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 py-2 pr-4 w-full">
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {sermon.title}
                  </h3>
                  <p className="text-white/70 font-medium mb-4">
                    {sermon.speaker}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-white/50 font-light">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {sermon.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {sermon.duration}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
