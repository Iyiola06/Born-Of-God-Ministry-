'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Flag, Network, Globe2, BookOpen, Sparkles } from 'lucide-react';

const milestones = [
  {
    year: 'The Beginning',
    title: 'Founded in Kenya',
    description: 'Born Of God Ministries was legally registered and held its first humble gatherings, carrying a massive vision for global revival.',
    icon: Flag,
  },
  {
    year: 'Expansion',
    title: 'National Growth',
    description: 'The ministry began establishing multiple branches across the nation, reaching unreached communities with the gospel.',
    icon: Network,
  },
  {
    year: 'Global Reach',
    title: 'International Churches',
    description: 'Crossing borders, we planted our first international churches, beginning the realization of our global mandate.',
    icon: Globe2,
  },
  {
    year: 'Equipping',
    title: 'Pastoral Training',
    description: 'Launched our leadership institute, which has since trained hundreds of pastors now leading thriving congregations globally.',
    icon: BookOpen,
  },
  {
    year: 'Today',
    title: 'Worldwide Impact',
    description: 'With over 40 churches worldwide, we continue to see thousands of lives transformed daily by the power of Christ.',
    icon: Sparkles,
  },
];

export function JourneyTimeline() {
  return (
    <section className="py-32 relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-medium text-white/50 tracking-[0.2em] uppercase mb-4 block">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
            A Story of Grace
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Center Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -ml-4 rounded-full bg-black border border-white/20 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                    <Card className="p-8 rounded-3xl bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-colors overflow-hidden group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                          <milestone.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-white/50 tracking-wider uppercase">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-heading font-semibold text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-white/60 font-light leading-relaxed">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
