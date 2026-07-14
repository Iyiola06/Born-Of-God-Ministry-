'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Heart } from 'lucide-react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { BookModal, Book } from './BookModal';

const libraryBooks: Book[] = [
  {
    id: 'b1',
    title: 'Foundations of Faith',
    author: 'Apostle John Doe',
    description: 'A beginner-friendly guide to understanding the core tenets of the Christian faith, salvation, and the new creation reality.',
    cover: 'https://picsum.photos/seed/lib1/600/900',
    category: 'Discipleship',
    pages: 120,
    language: 'English',
    size: '1.8 MB',
    downloads: '15.2k',
    date: 'Jan 2022',
    format: 'PDF',
  },
  {
    id: 'b2',
    title: 'The Prayer Driven Church',
    author: 'Pastor Jane Doe',
    description: 'Discover how to cultivate a culture of unceasing prayer within your local congregation and witness supernatural growth.',
    cover: 'https://picsum.photos/seed/lib2/600/900',
    category: 'Prayer',
    pages: 210,
    language: 'English',
    size: '3.5 MB',
    downloads: '8.4k',
    date: 'Mar 2023',
    format: 'EPUB',
  },
  {
    id: 'b3',
    title: 'Marriage By Design',
    author: 'Rev. Mark Smith',
    description: 'Biblical principles for a thriving, loving, and lasting marriage in today\'s complex world.',
    cover: 'https://picsum.photos/seed/lib3/600/900',
    category: 'Marriage',
    pages: 185,
    language: 'English',
    size: '2.9 MB',
    downloads: '10.1k',
    date: 'Jun 2023',
    format: 'PDF',
  },
  {
    id: 'b4',
    title: 'Youth on Fire',
    author: 'Pastor Sarah Johnson',
    description: 'A practical manual for youth pastors and leaders aiming to ignite a passion for Christ in the next generation.',
    cover: 'https://picsum.photos/seed/lib4/600/900',
    category: 'Youth',
    pages: 150,
    language: 'English',
    size: '2.2 MB',
    downloads: '6.7k',
    date: 'Sep 2023',
    format: 'PDF',
  },
  {
    id: 'b5',
    title: 'Healing Streams',
    author: 'Apostle John Doe',
    description: 'Understanding divine healing, walking in health, and ministering healing to those who are hurting.',
    cover: 'https://picsum.photos/seed/lib5/600/900',
    category: 'Healing',
    pages: 195,
    language: 'English',
    size: '3.0 MB',
    downloads: '11.5k',
    date: 'Nov 2022',
    format: 'EPUB',
  },
  {
    id: 'b6',
    title: 'Church Planting 101',
    author: 'Rev. Mark Smith',
    description: 'The complete toolkit for missionaries and pastors setting out to plant new, healthy churches globally.',
    cover: 'https://picsum.photos/seed/lib6/600/900',
    category: 'Church Growth',
    pages: 320,
    language: 'English',
    size: '5.1 MB',
    downloads: '4.2k',
    date: 'Feb 2024',
    format: 'PDF',
  },
  {
    id: 'b7',
    title: 'Daily Devotions Vol. 1',
    author: 'Born Of God Ministries',
    description: '365 days of inspiring, faith-building devotions to start your morning rooted in the Word.',
    cover: 'https://picsum.photos/seed/lib7/600/900',
    category: 'Devotionals',
    pages: 380,
    language: 'English',
    size: '4.5 MB',
    downloads: '22.8k',
    date: 'Dec 2023',
    format: 'PDF',
  },
  {
    id: 'b8',
    title: 'The Holy Spirit in You',
    author: 'Pastor Jane Doe',
    description: 'A deep dive into the person, work, and fellowship of the Holy Spirit in the life of a modern believer.',
    cover: 'https://picsum.photos/seed/lib8/600/900',
    category: 'Holy Spirit',
    pages: 260,
    language: 'English',
    size: '3.8 MB',
    downloads: '14.9k',
    date: 'Apr 2023',
    format: 'EPUB',
  }
];

export function BookGrid() {
  return (
    <section id="library-books" className="py-24 relative bg-brand-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
              All Resources
            </h2>
            <p className="text-white/50 text-sm mt-2">Showing 8 of 142 books</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Sort Dropdown placeholder */}
            <select className="bg-white/5 border border-white/10 text-white text-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-white/30 backdrop-blur-md appearance-none cursor-pointer pr-8">
              <option value="newest" className="bg-brand-black text-white">Newest Additions</option>
              <option value="popular" className="bg-brand-black text-white">Most Downloaded</option>
              <option value="alpha" className="bg-brand-black text-white">Alphabetical (A-Z)</option>
            </select>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {libraryBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            >
              <Dialog>
                <DialogTrigger className="text-left">
                  <div className="group cursor-pointer flex flex-col h-full">
                    <Card className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-white/5 border-white/10 mb-4 shadow-lg group-hover:shadow-[0_15px_30px_rgba(255,255,255,0.1)] transition-all duration-500">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      
                      {/* Hover Actions */}
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center bg-gradient-to-t from-black to-transparent">
                        <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md px-2 py-0.5 text-[10px] font-medium tracking-wide">
                          {book.category}
                        </Badge>
                        <div className="w-8 h-8 rounded-full bg-brand text-brand-charcoal flex items-center justify-center hover:scale-110 hover:bg-brand-light transition-all">
                          <Download className="w-4 h-4" />
                        </div>
                      </div>
                      
                      {/* Quick Favorite */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-brand hover:border-brand/50 hover:bg-brand/10 transition-colors opacity-0 group-hover:opacity-100">
                        <Heart className="w-4 h-4" />
                      </div>
                    </Card>
                    
                    <div className="flex flex-col flex-1">
                      <h3 className="text-base md:text-lg font-heading font-semibold text-white leading-tight mb-1 group-hover:text-brand-soft transition-colors line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-sm text-white/50 font-light mb-2">{book.author}</p>
                      <div className="mt-auto flex items-center gap-3 text-xs text-white/40">
                        <span className="flex items-center gap-1">
                          <Download className="w-3 h-3" /> {book.downloads}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span>{book.format}</span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                
                <BookModal book={book} />
              </Dialog>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center flex justify-center"
        >
          <Button variant="outline" className="rounded-full bg-transparent border-white/20 text-white hover:bg-brand/10 hover:border-brand hover:text-brand h-12 px-8 transition-colors">
            Load More Resources
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
