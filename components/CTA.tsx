'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="py-32 relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle shine effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tighter mb-6">
            Become Part of Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
              Global Family
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/60 font-light mb-12 max-w-2xl mx-auto">
            Whether you&apos;re looking for a local church home or seeking to partner with our global mission, there is a place for you here.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 bg-white text-black hover:bg-white/90 text-base font-medium shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all hover:scale-105 active:scale-95">
              Find a Church
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 px-8 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white backdrop-blur-md text-base font-medium transition-all hover:scale-105 active:scale-95">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
