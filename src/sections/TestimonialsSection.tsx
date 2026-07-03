import { Quote, Star } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Testimonials
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p
          className="text-[#D7E2EA] font-light text-center max-w-xl mx-auto mt-4 sm:mt-6 mb-14 sm:mb-16 md:mb-20 opacity-70"
          style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
        >
          A few words from the clients and studios behind the work below.
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.08} y={24}>
            <div className="h-full flex flex-col gap-5 rounded-[28px] sm:rounded-[32px] border border-[#D7E2EA]/20 bg-white/[0.03] p-6 sm:p-7">
              <Quote className="text-[#D7E2EA]/40" size={28} strokeWidth={1.5} />

              <p className="text-[#D7E2EA] font-light leading-relaxed flex-1 text-sm sm:text-base">
                {t.quote}
              </p>

              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    size={14}
                    className="text-[#BBCCD7] fill-[#BBCCD7]"
                  />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#D7E2EA]/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-[#D7E2EA] font-medium text-sm">{t.name}</span>
                  <span className="text-[#D7E2EA]/50 text-xs uppercase tracking-wide">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
