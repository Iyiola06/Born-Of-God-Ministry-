'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { BookOpenText } from 'lucide-react';

export function LibraryNewsletter() {
  return (
    <section className="py-32 relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-full blur-[150px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-black/60 border border-white/10 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-center"
        >
          {/* Subtle shine effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          
          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-8 shadow-inner">
            <BookOpenText className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4">
            Never Miss New Resources
          </h2>
          
          <p className="text-lg text-white/60 font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Subscribe to receive notifications when we add new books, devotionals, and teaching manuals to the digital library.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all backdrop-blur-md"
              required
            />
            <Button type="submit" className="rounded-full bg-white text-black hover:bg-white/90 h-[58px] px-8 font-medium text-base shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-white/40 mt-6 font-light">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
