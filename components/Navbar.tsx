'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Sermons', href: '/#sermons' },
  { name: 'Ministries', href: '/#ministries' },
  { name: 'Library', href: '/library' },
  { name: 'Events', href: '/#events' },
  { name: 'Leadership', href: '/about#leadership' },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out border-b border-transparent',
        isScrolled
          ? 'py-3 bg-black/40 backdrop-blur-2xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-white/20 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-lg group-hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 7l-5-5-5 5" />
            </svg>
          </div>
          <span className="text-xl font-heading font-semibold tracking-tight text-white drop-shadow-sm">
            BOG Ministries
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#give" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Give
          </Link>
          <Button className="rounded-full bg-white text-black hover:bg-white/90 font-medium px-6 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Watch Live
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-3xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white/80 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <Link href="#give" className="text-lg font-medium text-white/80 hover:text-white p-2">
            Give
          </Link>
          <Button className="w-full mt-2 rounded-full bg-white text-black hover:bg-white/90">
            Watch Live
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}
