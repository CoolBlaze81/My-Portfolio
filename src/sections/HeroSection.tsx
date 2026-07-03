import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import { motion } from 'framer-motion';



const PORTRAIT_URL =
  'https://i.postimg.cc/1t9YnWTT/Jul-2-2026-05-54-33-PM.png'

export default function HeroSection() {
  return (
    <section
    className="
relative
h-[82vh]
sm:h-[90vh]
md:h-[calc(100vh-84px)]
flex
flex-col
overflow-hidden
"
    style={{ overflowX: 'clip' }}
  >
      {/* Hero heading */}
      <div className="overflow-hidden mt-2 sm:mt-8 md:mt-4">
        <FadeIn delay={0.1} y={40}>
          <h1 className="
hero-heading
font-black
uppercase
tracking-tight
leading-none

whitespace-normal
md:whitespace-nowrap

w-full

text-[18vw]
sm:text-[15vw]
md:text-[16vw]
lg:text-[13.97vw]

px-4
md:px-0
">
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
  className="
absolute

left-1/2
-translate-x-1/2

z-10

bottom-28
sm:bottom-15
md:bottom-0

w-[420px]
sm:w-[430px]
md:w-[560px]
lg:w-[700px]
xl:w-[900px]
"
>
  <FadeIn delay={0.5} y={30}>
    <img
      src={PORTRAIT_URL}
      alt="Mannan, Video Editor Portrait"
      className="w-full h-auto select-none pointer-events-none"
      draggable={false}
    />
  </FadeIn>
</Magnet>

      {/* Bottom bar */}
      <div className="
mt-auto

flex

justify-between
items-end

px-7
md:px-10

pb-8
sm:pb-8
md:pb-10

relative
z-20
">
        <FadeIn delay={0.3} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[145px]
sm:max-w-[220px]
md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Every frame should have a purpose. That's how I edit.
          </p>
        </FadeIn>

        <FadeIn delay={0.45} y={20}>
  <div className="scale-90 md:scale-100 origin-bottom-right">
    <ContactButton />
  </div>
</FadeIn>
      </div>
    </section>
  );
}
