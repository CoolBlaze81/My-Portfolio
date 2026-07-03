import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import ContactButton from './ContactButton';

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/who_mannan/', icon: Instagram },
  { label: 'Twitter', href: 'https://x.com/who_mannan', icon: Twitter },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mannansajjan/', icon: Linkedin },
  { label: 'Email', href: 'mailto:mannan.proj@gmail.com', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] border-t border-white/10 px-6 md:px-10 py-14 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div className="flex flex-col gap-3">
            <span className="hero-heading font-black uppercase tracking-tight text-3xl sm:text-4xl">
              MannanEditsIt
            </span>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide text-xs sm:text-sm max-w-xxs opacity-70">
              YouTube • Reels • Commercials • Brand Films
            </p>
          </div>

          <ContactButton />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
          <nav className="flex items-center gap-6 sm:gap-8">
            <Link
              to="/#about"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm transition-opacity duration-200 hover:opacity-70"
            >
              About
            </Link>
            <Link
              to="/price"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm transition-opacity duration-200 hover:opacity-70"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm transition-opacity duration-200 hover:opacity-70"
            >
              Projects & Testimonials
            </Link>
            <Link
              to="/contact"
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm transition-opacity duration-200 hover:opacity-70"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
              >
                <Icon size={18} strokeWidth={1.75} />
              </a>
            ))}
          </div>

          <p className="text-[#D7E2EA]/50 text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} MannanEditsIt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
