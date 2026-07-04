export interface Service {
  number: string;
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    number: '01',
    name: 'Video Editing',
    description:
      'Clean, engaging edits with smooth pacing, thoughtful transitions, and attention to every detail.',
  },
  {
    number: '02',
    name: 'Long-Form Content',
    description:
      'Long-form videos edited to keep viewers watching from start to finish without losing momentum.',
  },
  {
    number: '03',
    name: 'Short-Form Content',
    description:
      'Reels, Shorts, and TikToks designed to grab attention in the first few seconds and keep people engaged.',
  },
  {
    number: '04',
    name: 'Graphic Design',
    description:
      'Simple, modern visuals for social media, branding, and digital content that match your style.',
  },
  {
    number: '05',
    name: 'Content Management (Coming Soon)',
    description:
      'End-to-end content planning, organization, and publishing support for creators and brands.',
  },
];
