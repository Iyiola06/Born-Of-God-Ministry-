'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Megaphone, Users, BookOpenCheck } from 'lucide-react';

const pillars = [
  {
    title: 'Preach Christ',
    description: 'Proclaiming the uncompromised truth of the Gospel to every soul, awakening them to salvation and grace.',
    icon: Megaphone,
  },
  {
    title: 'Disciple Nations',
    description: 'Nurturing believers to spiritual maturity, equipping them to influence their spheres and transform cultures.',
    icon: Users,
  },
  {
    title: 'Equip Leaders',
    description: 'Training and sending out devoted leaders and pastors to pioneer new frontiers for the Kingdom.',
    icon: BookOpenCheck,
  },
];

export function Mission() {
  return (
    <section className="py-32 relative bg-brand-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-20 p-10 md:p-16 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          
          <span className="text-sm font-medium text-white/50 tracking-[0.2em] uppercase mb-6 block">
            Our Mission
          </span>
          <p className="text-2xl md:text-4xl font-heading font-medium text-white leading-relaxed md:leading-snug">
            &quot;To raise believers who understand their identity in Christ and transform nations through the Gospel.&quot;
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full p-8 md:p-10 rounded-[2.5rem] bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
