import { useState } from 'react';
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
            className="hero-heading font-black uppercase tracking-tight text-lg md:text-2xl transition-opacity duration-200 hover:opacity-80"
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
        </nav>
        {menuOpen && (
  <div className="md:hidden bg-[#0C0C0C] border-t border-white/10 flex flex-col items-center py-6 gap-6">

    {NAV_LINKS.map((link) =>
      link.to.startsWith('/#') ? (
        <Link
          key={link.label}
          to={link.to}
          onClick={() => setMenuOpen(false)}
          className="text-white uppercase tracking-wider"
        >
          {link.label}
        </Link>
      ) : (
        <NavLink
          key={link.label}
          to={link.to}
          onClick={() => setMenuOpen(false)}
          className="text-white uppercase tracking-wider"
        >
          {link.label}
        </NavLink>
      )
    )}

  </div>
)}
      </div>
      <button
  className="ml-auto md:hidden text-white text-3xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</button>
    </FadeIn>
  );
}
