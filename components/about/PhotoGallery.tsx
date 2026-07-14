'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const photos = [
  { id: 1, url: 'https://picsum.photos/seed/gal1/800/600', span: 'col-span-1 md:col-span-2 row-span-2', alt: 'Worship service' },
  { id: 2, url: 'https://picsum.photos/seed/gal2/600/600', span: 'col-span-1 row-span-1', alt: 'Community outreach' },
  { id: 3, url: 'https://picsum.photos/seed/gal3/600/600', span: 'col-span-1 row-span-1', alt: 'Youth ministry' },
  { id: 4, url: 'https://picsum.photos/seed/gal4/600/800', span: 'col-span-1 row-span-2', alt: 'Pastoral training' },
  { id: 5, url: 'https://picsum.photos/seed/gal5/800/600', span: 'col-span-1 md:col-span-2 row-span-1', alt: 'Baptism service' },
];

export function PhotoGallery() {
  return (
    <section className="py-32 relative bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-white/50 tracking-[0.2em] uppercase mb-4 block">
            Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
            Moments in Time
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 ${photo.span}`}
            >
              <Image
                src={photo.url}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
