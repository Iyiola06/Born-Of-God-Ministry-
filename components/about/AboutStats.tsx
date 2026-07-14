'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';

const stats = [
  { value: '40+', label: 'Churches Worldwide' },
  { value: '800+', label: 'Pastors Trained' },
  { value: '15k+', label: 'Lives Reached' },
  { value: '12', label: 'Countries' },
];

export function AboutStats() {
  return (
    <section className="py-24 relative bg-black overflow-hidden border-y border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <span className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base font-medium text-white/60 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
