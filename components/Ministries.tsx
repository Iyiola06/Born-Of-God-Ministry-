'use client';

import { motion } from 'motion/react';
import { BookOpen, Music, Users2, HeartHandshake, Baby, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ministries = [
  {
    title: 'Pastoral Training',
    description: 'Equipping leaders with deep theological understanding and practical ministry skills.',
    icon: BookOpen,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Worship Arts',
    description: 'Creating atmospheres of divine encounter through music and creative expression.',
    icon: Music,
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Youth & Young Adults',
    description: 'Raising a fiery generation passionate about Christ and cultural transformation.',
    icon: Users2,
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'Outreach & Missions',
    description: 'Taking the gospel to the unreached and showing God\'s love practically.',
    icon: Globe,
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Care & Counseling',
    description: 'Providing biblical guidance, healing, and support for life\'s challenges.',
    icon: HeartHandshake,
    color: 'from-red-500/20 to-rose-500/20',
  },
  {
    title: 'Children\'s Ministry',
    description: 'Laying a strong biblical foundation for the youngest members of our family.',
    icon: Baby,
    color: 'from-yellow-500/20 to-amber-500/20',
  },
];

export function Ministries() {
  return (
    <section id="ministries" className="py-32 relative bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-6">
            Our Ministries
          </h2>
          <p className="text-lg text-white/60 font-light">
            Find your place in our community. We have various ministries designed to nurture your spiritual growth and empower you to serve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full p-8 rounded-3xl bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] cursor-pointer relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${ministry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <ministry.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">
                    {ministry.title}
                  </h3>
                  
                  <p className="text-white/60 font-light leading-relaxed">
                    {ministry.description}
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
