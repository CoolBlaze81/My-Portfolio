import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { projects, type Project } from '../data/projects';
import LiveProjectButton from '../components/LiveProjectButton';

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalCards = projects.length;

  // Progress across the whole stack of sticky cards. Each card is given
  // its own slice of this progress (see ProjectCard) so it scales down
  // only as later cards scroll over it.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pb-20 sm:pb-24 md:pb-32"
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </h2>

      <div ref={containerRef} className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={totalCards}
            containerProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  totalCards,
  containerProgress,
}: {
  project: Project;
  index: number;
  totalCards: number;
  containerProgress: MotionValue<number>;
}) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  // This card starts shrinking once the stack progress reaches its slot,
  // and holds at targetScale once the next card has fully covered it.
  const rangeStart = index / totalCards;
  const rangeEnd = (index + 1) / totalCards;
  const scale = useTransform(
    containerProgress,
    [rangeStart, rangeEnd],
    [1, targetScale]
  );

  return (
    <div className="sticky top-24 md:top-32 h-[85vh] flex items-start" style={{ top: `${index * 28}px` }}>
      <motion.div
        style={{ scale, transformOrigin: 'top center' }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="text-[#D7E2EA] font-black"
              style={{ fontSize: 'clamp(3rem, 8vw, 100px)', lineHeight: 1 }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-medium">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl">
                {project.name}
              </span>
            </div>
          </div>

          <LiveProjectButton href={project.liveUrl} />
        </div>

        {/* Bottom row - image grid */}
        <div className="flex gap-3 sm:gap-4 flex-1">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <img
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div style={{ width: '60%' }}>
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
