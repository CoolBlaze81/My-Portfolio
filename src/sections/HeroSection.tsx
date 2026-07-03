import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import GyroFace from '../components/GyroFace';


const PORTRAIT_URL =
  'https://i.postimg.cc/1t9YnWTT/Jul-2-2026-05-54-33-PM.png'

export default function HeroSection() {
  return (
    <section
      className="relative h-[calc(100vh-72px)] sm:h-[calc(100vh-84px)] flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* Hero heading */}
      <div className="overflow-hidden mt-10 sm:mt-8 md:mt-4">
        <FadeIn delay={0.1} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[13.97vw]">
            Hi, i&apos;m mannan
          </h1>
        </FadeIn>
      </div>
      {/* Portrait */}
      <Magnet
        padding={1500}
        strength={5}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[1000px]"
      >
        <FadeIn delay={0.5} y={30}>
          <GyroFace><img
            src={PORTRAIT_URL}
            alt="Mannan, Video Editor Portrait"
            className="w-[4000px] h-auto select-none pointer-events-none"
            draggable={false}
          />
          </GyroFace>
          
        </FadeIn>
      </Magnet>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.3} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Every frame should have a purpose. That's how I edit.
          </p>
        </FadeIn>

        <FadeIn delay={0.45} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
