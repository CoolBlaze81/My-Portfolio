import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { CheckCircle2, Instagram, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import emailjs from '@emailjs/browser';

const CONTACT_EMAIL = 'mannan.proj@gmail.com';

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/who_mannan/', icon: Instagram },
  { label: 'Twitter', href: 'https://x.com/who_mannan', icon: Twitter },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mannansajjan', icon: Linkedin },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      'service_90lhdwg',
      'template_ak6cqeh',
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      'vm07eqNy5WufoxH92'
    );

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    alert("Failed to send message.");
    console.error(error);
  }
};

  return (
    <section className="min-h-[calc(100vh-72px)] sm:min-h-[calc(100vh-84px)] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 140px)' }}
          >
            Let&apos;s build
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p
            className="text-[#D7E2EA] font-light text-center max-w-l mx-auto mt-4 sm:mt-6 mb-14 sm:mb-16 md:mb-20 opacity-70"
            style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
          >
            Have a project in mind? Send over a few details and I&apos;ll get back to you as soon as possible.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14">
          {/* Form */}
          <FadeIn delay={0.15} y={20} className="md:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center rounded-[28px] border border-[#D7E2EA]/20 bg-white/[0.03] p-10">
                <CheckCircle2 className="text-[#BBCCD7]" size={40} strokeWidth={1.5} />
                <p className="text-[#D7E2EA] font-medium text-lg">Message received</p>
                <p className="text-[#D7E2EA]/60 text-sm max-w-xs">
                  Thanks for reaching out -- I&apos;ll reply at the email you provided soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <Field
                  label="Name"
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  placeholder="Your full name"
                  required
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                  placeholder="you@example.com"
                  required
                />
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[#D7E2EA]/70 text-xs uppercase tracking-widest font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me a bit about the project"
                    className="bg-transparent border border-[#D7E2EA]/30 rounded-2xl px-4 py-3 text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA] transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start rounded-full px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm text-white font-medium uppercase tracking-widest transition-opacity duration-200 hover:opacity-90 mt-2"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow:
                      '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                    outline: '2px solid white',
                    outlineOffset: '-3px',
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </FadeIn>

          {/* Direct info */}
          <FadeIn delay={0.25} y={20} className="md:col-span-2 flex flex-col gap-6">
            <InfoRow icon={Mail} label="Email">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:opacity-70 transition-opacity duration-200"
              >
                {CONTACT_EMAIL}
              </a>
            </InfoRow>

            <InfoRow icon={MapPin} label="Based in">
              Available worldwide, remote-first
            </InfoRow>

            <div className="flex flex-col gap-3 pt-2">
              <span className="text-[#D7E2EA]/50 text-xs uppercase tracking-widest font-medium">
                Find me on
              </span>
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
                    <Icon size={20} strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[#D7E2EA]/70 text-xs uppercase tracking-widest font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent border border-[#D7E2EA]/30 rounded-full px-4 py-3 text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA] transition-colors duration-200"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-[24px] border border-[#D7E2EA]/20 bg-white/[0.03] p-5">
      <Icon className="text-[#D7E2EA]/60 flex-shrink-0 mt-0.5" size={20} strokeWidth={1.75} />
      <div className="flex flex-col gap-1">
        <span className="text-[#D7E2EA]/50 text-xs uppercase tracking-widest font-medium">
          {label}
        </span>
        <span className="text-[#D7E2EA] text-sm sm:text-base">{children}</span>
      </div>
    </div>
  );
}
