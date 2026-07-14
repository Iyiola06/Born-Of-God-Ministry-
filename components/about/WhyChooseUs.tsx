'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const features = [
  'Authentic, Bible-Based Teaching',
  'Warm Global Community',
  'Deep Pastoral Care & Counseling',
  'Vibrant Prayer Culture',
  'Intentional Leadership Development',
  'Uncompromised Doctrine',
  'Modern, Spirit-Led Worship',
  'Relentless Mission Focus',
];

export function WhyChooseUs() {
  return (
    <section className="py-32 relative bg-brand-black overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] bg-white rounded-full blur-[200px] pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm font-medium text-white/50 tracking-[0.2em] uppercase mb-4 block">
              The Difference
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-6">
              Why People Choose <br/> Our Church
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
              We aren&apos;t just another organization. We are a family committed to spiritual depth, authentic relationships, and global impact. Here, you will find a place to grow, serve, and belong.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card className="p-8 md:p-10 rounded-[2.5rem] bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.05) }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-brand" />
                    </div>
                    <span className="text-white/80 font-light text-sm md:text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
