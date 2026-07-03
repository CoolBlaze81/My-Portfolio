export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Elena Kovac',
    role: 'Founder, Nextlevel Studio',
    quote:
      "Mannan turned a vague brand brief into a full 3D identity in under three weeks. Every render came back cleaner than what we'd pictured ourselves.",
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
  },
  {
    name: 'Rahul Mehta',
    role: 'Product Lead, Solaris Digital',
    quote:
      'We needed product renders that could stand in for real photography on launch day. They shipped ahead of schedule and needed zero revisions.',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
  },
  {
    name: 'Sofia Almeida',
    role: 'Creative Director, Aura',
    quote:
      "The motion piece Mannan built for our rebrand is still the first thing new clients bring up. It's rare to find someone this fast and this precise.",
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
  },
  {
    name: 'Daniel Osei',
    role: 'Founder, Vitara',
    quote:
      'Clear communication from kickoff to delivery, and the final website felt custom-built for our audience instead of templated. Would hire again immediately.',
    avatar: 'https://i.pravatar.cc/150?img=15',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Marketing Head, Terra',
    quote:
      'Our old renders looked flat next to competitors. Mannan reworked the lighting and materials and the difference showed up in conversion within a week.',
    avatar: 'https://i.pravatar.cc/150?img=26',
    rating: 5,
  },
  {
    name: 'Lucas Ferreira',
    role: 'Co-founder, Orbit Web3',
    quote:
      "Handed over a rough sketch and got back a full character model that matched our tone exactly. That kind of instinct can't be taught.",
    avatar: 'https://i.pravatar.cc/150?img=8',
    rating: 5,
  },
];
