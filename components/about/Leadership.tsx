'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Mock data intended to be replaced by Supabase dynamic fetch
const leaders = [
  {
    id: 1,
    name: 'Apostle John Doe',
    role: 'Founder & Visionary',
    bio: 'Dedicated to teaching the uncompromised Word and raising a generation of powerful believers.',
    image: 'https://picsum.photos/seed/leader1/600/800',
  },
  {
    id: 2,
    name: 'Pastor Jane Doe',
    role: 'Co-Founder & Executive Pastor',
    bio: 'A passionate leader with a heart for pastoral care, worship, and empowering women globally.',
    image: 'https://picsum.photos/seed/leader2/600/800',
  },
  {
    id: 3,
    name: 'Rev. Mark Smith',
    role: 'Global Missions Director',
    bio: 'Oversees our international church plants and coordinates global outreach programs.',
    image: 'https://picsum.photos/seed/leader3/600/800',
  },
  {
    id: 4,
    name: 'Pastor Sarah Johnson',
    role: 'Dean, Leadership Institute',
    bio: 'Dedicated to equipping the next generation of pastors with sound doctrine and leadership skills.',
    image: 'https://picsum.photos/seed/leader4/600/800',
  },
];

export function Leadership() {
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
            Our Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-6">
            Led by Grace
          </h2>
          <p className="text-lg text-white/60 font-light">
            Meet the dedicated men and women who carry the vision and serve our global family with excellence and love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-white/5 border border-white/10">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Hover Reveal Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white/80 text-sm font-light leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {leader.bio}
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-black backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    View Full Profile
                  </Button>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-heading font-semibold text-white mb-1">
                  {leader.name}
                </h3>
                <p className="text-sm text-white/50 uppercase tracking-wider font-medium">
                  {leader.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
