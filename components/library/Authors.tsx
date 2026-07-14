'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { ArrowRight, BookMarked } from 'lucide-react';

const authors = [
  {
    name: 'Apostle John Doe',
    role: 'Founder & Senior Pastor',
    books: 18,
    image: 'https://picsum.photos/seed/auth1/400/400',
    bio: 'Author of the best-selling "Foundations of Faith" and numerous leadership manuals used globally.',
  },
  {
    name: 'Pastor Jane Doe',
    role: 'Executive Pastor',
    books: 12,
    image: 'https://picsum.photos/seed/auth2/400/400',
    bio: 'Renowned for her deep teachings on prayer, the Holy Spirit, and Christian family life.',
  },
  {
    name: 'Rev. Mark Smith',
    role: 'Missions Director',
    books: 8,
    image: 'https://picsum.photos/seed/auth3/400/400',
    bio: 'Writing extensively on evangelism, church planting, and cross-cultural ministry.',
  }
];

export function Authors() {
  return (
    <section className="py-24 relative bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-white/50 tracking-[0.2em] uppercase mb-2 block">
            The Voices
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">
            Featured Authors
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <motion.div
              key={author.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="group p-8 rounded-[2.5rem] bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-500 text-center flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 p-1 border-2 border-white/10 group-hover:border-white/30 transition-colors">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-white mb-1">
                  {author.name}
                </h3>
                <p className="text-sm text-white/50 uppercase tracking-wider mb-4">
                  {author.role}
                </p>
                
                <p className="text-white/60 font-light text-sm leading-relaxed mb-6">
                  {author.bio}
                </p>
                
                <div className="mt-auto w-full pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-sm text-white/70 flex items-center gap-1.5 font-medium">
                    <BookMarked className="w-4 h-4 text-white/40" />
                    {author.books} Books
                  </span>
                  <button className="text-sm text-white hover:text-blue-200 transition-colors flex items-center gap-1 font-medium group/btn">
                    View Works <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
