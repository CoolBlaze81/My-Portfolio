import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import FadeIn from './FadeIn';

const NAV_LINKS = [
  { label: 'About', to: '/#about' },
  { label: 'Services', to: '/price' },
  { label: 'Projects & Testimonials', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <FadeIn delay={0} y={-20} as="header">
      <div className="sticky top-0 z-50 bg-[#0C0C0C] border-b border-white/10">
        <nav className="flex items-center justify-between px-6 md:px-10 py-4 md:py-5">
          <Link
            to="/"
            className="
hero-heading
font-black
uppercase
tracking-tight
text-base
sm:text-lg
md:text-2xl
transition-opacity
duration-200
hover:opacity-80
"
          >
            MannanEditsIt
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) =>
              link.to.startsWith('/#') ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base transition-opacity duration-200 hover:opacity-70"
                >
                  {link.label}
                </Link>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    `font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base transition-opacity duration-200 hover:opacity-70 ${
                      isActive ? 'text-white' : 'text-[#D7E2EA]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>
          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="
  md:hidden
  flex
  items-center
  justify-center
  w-11
  h-11
  text-white
  text-4xl
  transition-all
  duration-300
  hover:opacity-80
  "
>
  {menuOpen ? "✕" : "☰"}
</button>
        </nav>
        <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.3 }}
      className="
      md:hidden
      absolute
      left-0
      top-full
      w-full
      bg-[#0C0C0C]/95
      backdrop-blur-xl
      border-t
      border-white/10
      "
    >
      <div className="flex flex-col items-center py-8 gap-8">
        {NAV_LINKS.map((link) =>
          link.to.startsWith('/#') ? (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="
              text-white
              uppercase
              tracking-widest
              text-lg
              hover:opacity-70
              transition
              "
            >
              {link.label}
            </Link>
          ) : (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="
              text-white
              uppercase
              tracking-widest
              text-lg
              hover:opacity-70
              transition
              "
            >
              {link.label}
            </NavLink>
          )
        )}
      </div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </FadeIn>
  );
}
