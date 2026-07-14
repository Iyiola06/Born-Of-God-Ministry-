'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah K.',
    role: 'Church Member',
    content: 'Joining Born Of God Ministries has completely transformed my understanding of who I am in Christ. The teachings are profound yet immensely practical.',
  },
  {
    id: 2,
    name: 'Pastor David O.',
    role: 'Global Network Pastor',
    content: 'The pastoral training I received here equipped me to lead my congregation with excellence and grace. It\'s truly a family that nurtures leaders.',
  },
  {
    id: 3,
    name: 'Michael T.',
    role: 'Youth Leader',
    content: 'A house where the presence of God is tangible. I\'ve seen young people\'s lives radically changed through the youth ministry here.',
  },
  {
    id: 4,
    name: 'Elena R.',
    role: 'Volunteer',
    content: 'Serving in the outreach programs showed me the real heart of this ministry. We don\'t just preach love; we demonstrate it to the nations.',
  },
];

export function Testimonials() {
  // Double the array for infinite scrolling effect
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-32 relative bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4">
            Stories of Transformation
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
            Hear from members and leaders whose lives have been impacted by our global family.
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-6 px-6"
        >
          {repeatedTestimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.id}-${index}`}
              className="w-[350px] md:w-[450px] shrink-0 p-8 rounded-3xl bg-white/5 border-white/10 backdrop-blur-xl relative"
            >
              <Quote className="w-8 h-8 text-white/20 mb-6" />
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center text-white font-semibold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-sm text-white/50">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
