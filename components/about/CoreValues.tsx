'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { ShieldCheck, Heart, Star, HandHeart, BookHeart, Flame } from 'lucide-react';

const values = [
  {
    title: 'Faith',
    description: 'We believe implicitly in the Word of God and step out boldly in trust, knowing He is faithful.',
    icon: Flame,
  },
  {
    title: 'Integrity',
    description: 'We uphold the highest moral standards, ensuring our private lives match our public declarations.',
    icon: ShieldCheck,
  },
  {
    title: 'Love',
    description: 'We cultivate a culture of unconditional love, mirroring Christ\'s compassion to everyone we meet.',
    icon: Heart,
  },
  {
    title: 'Excellence',
    description: 'We reject mediocrity, bringing our absolute best to everything we do for the Kingdom.',
    icon: Star,
  },
  {
    title: 'Service',
    description: 'We lead by serving. True greatness is found in stooping down to lift others up.',
    icon: HandHeart,
  },
  {
    title: 'Discipleship',
    description: 'We are committed to lifelong learning and intentionally guiding others toward spiritual maturity.',
    icon: BookHeart,
  },
];

export function CoreValues() {
  return (
    <section className="py-32 relative bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-medium text-white/50 tracking-[0.2em] uppercase mb-4 block">
            Core Values
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-6">
            The DNA of Our Family
          </h2>
          <p className="text-lg text-white/60 font-light">
            These guiding principles shape our culture, influence our decisions, and define how we represent Christ to the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full p-8 rounded-3xl bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-300 relative overflow-hidden">
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <value.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-white">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-white/60 font-light leading-relaxed pl-16">
                    {value.description}
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
