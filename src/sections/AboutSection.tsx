import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const MOON_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png';
const OBJECT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png';
const LEGO_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png';
const GROUP_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png';

const ABOUT_TEXT =
  "Mannan Sajjan is a freelance video editor passionate about transforming ideas into engaging visual stories. From cinematic edits and YouTube videos to short-form content, he creates videos that are polished, engaging, and built to connect with audiences. His creative approach is influenced by internet culture, allowing him to produce content that feels current, relatable, and authentic. Backed by experience in graphic design and content creation, he brings both creativity and attention to detail to every project.";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
relative
min-h-screen
px-5
md:px-10
py-20
flex
items-center
justify-center

overflow-visible
md:overflow-hidden
"
    >
      {/* Decorative corner images */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="
absolute
top-4
left-2
md:top-[4%]
md:left-[4%]
w-[110px] md:w-[210px]
"
      >
        <img src={MOON_URL} alt="Decorative moon icon" className="w-full h-auto" />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="
absolute
bottom-10
left-2
md:bottom-[8%]
md:left-[10%]
w-[95px] md:w-[180px]
"
      >
        <img src={OBJECT_URL} alt="Decorative 3D object" className="w-full h-auto" />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="
absolute
top-4
right-12
md:top-[4%]
md:right-[4%]]
w-[110px] md:w-[210px]
"
      >
        <img src={LEGO_URL} alt="Decorative lego icon" className="w-full h-auto" />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-10
right-2
md:bottom-[8%]
md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <img src={GROUP_URL} alt="Decorative 3D group" className="w-full h-auto" />
      </FadeIn>

      {/* Center content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{
  fontSize: 'clamp(3rem, 10vw, 160px)',
}}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
          text={ABOUT_TEXT}
          className="
text-[#D7E2EA]
font-medium
text-center
leading-relaxed
max-w-[320px]
md:max-w-[1205px]
px-2
"
          style={{
  fontSize: 'clamp(0.95rem, 2vw, 1.35rem)',
}}
        />

          <ContactButton />
        </div>
      </div>
    </section>
  );
}
