import { Link, NavLink } from 'react-router-dom';
import FadeIn from './FadeIn';

const NAV_LINKS = [
  { label: 'About', to: '/#about' },
  { label: 'Services', to: '/price' },
  { label: 'Projects & Testimonials', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  return (
    <FadeIn delay={0} y={-20} as="header">
      <div className="sticky top-0 z-50 bg-[#0C0C0C] border-b border-white/10">
        <nav className="flex justify-between items-center px-6 md:px-10 py-4 md:py-5">
          <Link
            to="/"
            className="hero-heading font-black uppercase tracking-tight text-lg md:text-2xl transition-opacity duration-200 hover:opacity-80"
          >
            MannanEditsIt
          </Link>

          <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
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
      </div>
    </FadeIn>
  );
}
