import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "Home",
  },
   
   {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "work",
    title: "Features",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "account",
    title: "Account",
  }
];

const services: TService[] = [
  {
    title: "User-Friendly Application",
    icon: web,
  },
  {
    title: "GPS Tracking",
    icon: mobile,
  },
  {
    title: "Mobile Alerts",
    icon: backend,
  },
  {
    title: "24/7 Monitoring",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Threat Detection and Response",
    companyName: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Threat Detection & Response automatically identifies phishing attempts using AI-powered analysis of 2,039 features including URL entropy, domain reputation, and behavioral signals.",
      "Malicious content is blocked in <1s with detailed risk reports and one-click remediation workflows.",
    ],
  },
  {
    title: "Free Domain  monitoring",
    companyName: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Free Domain Monitoring continuously scans for phishing domains mimicking your brand, validates DMARC/SPF/DKIM records, and alerts on typosquatting or certificate abuse.",
      "Get enterprise-grade domain protection without the enterprise price tag.",
    ],
  },
  {
    title: "Free Phishing Scanner",
    companyName: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Free Phishing Scanner analyzes 847 ML features + 60+ threat intelligence sources to deliver 94% accurate real-time URL risk assessment.",
      "Perfect lead-gen tool that showcases ML expertise while building user trust.",
    ],
  },
  {
    title: "Free Email Protection",
    companyName: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Delivers enterprise-class email security to individual users through API-integrated scanning with Gmail and Outlook. Implements SPF/DKIM/DMARC validation, NLP-powered content analysis, and time-of-click URL protection to achieve 97%+ phishing detection accuracy. Features automated quarantine, detailed threat intelligence reporting, and zero-cost deployment for up to 100 daily emails.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Mobimend",
    description:
      "A comprehensive mobile and online shop platform enables users to book phone repairs, purchase devices, receive curated recommendations for popular fixes and products.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://mobimend.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
