/** Editable site content — update phone, email, Instagram, captions here. */

export const site = {
  name: "Guillermo Palacio",
  titleLines: ["Artist", "Designer", "Creative Director"] as const,
  location: "Los Angeles, California",
  phone: "PHONE_NUMBER_HERE",
  phoneHref: "tel:PHONE_NUMBER_HERE",
  email: "EMAIL_ADDRESS_HERE",
  emailHref: "mailto:EMAIL_ADDRESS_HERE",
  instagram: "INSTAGRAM_URL_HERE",
  instagramLabel: "@INSTAGRAM_HANDLE_HERE",
  year: 2026,
} as const;

export type SiteImage = {
  src: string;
  alt: string;
  caption?: string;
};

export const images = {
  dodgersMural: {
    src: "/images/dodgers-mural-hero.jpg",
    alt: "Venice Beach mural celebrating the Los Angeles Dodgers World Series championship",
    caption: "Venice Beach · Dodgers mural",
  },
  wall01: {
    src: "/images/wall-01.jpg",
    alt: "Los Angeles wall surface caught in a graffiti and paint-over cycle",
  },
  wall03: {
    src: "/images/wall-03.jpg",
    alt: "Urban wall in Los Angeles awaiting commissioned artwork",
  },
  work: [
    {
      src: "/images/work-01.jpg",
      alt: "Recent mural work by Guillermo Palacio",
      caption: "Mural",
    },
    {
      src: "/images/work-02.jpg",
      alt: "Public-facing artwork",
      caption: "Public art",
    },
    {
      src: "/images/work-03.jpg",
      alt: "Illustration or design work",
      caption: "Illustration",
    },
    {
      src: "/images/work-04.jpg",
      alt: "Creative direction project",
      caption: "Direction",
    },
  ] satisfies SiteImage[],
  og: {
    src: "/images/og-image.jpg",
    alt: "Give Los Angeles the Walls — public art vision",
  },
} as const;

export const navLinks = [
  { href: "#vision", label: "VISION" },
  { href: "#youth", label: "YOUTH" },
  { href: "#la84-la28", label: "LA84 → LA28" },
  { href: "#work", label: "WORK" },
  { href: "#contact", label: "CONTACT" },
] as const;

export const pipeline = [
  "TALENT",
  "TRAINING",
  "MENTORSHIP",
  "OPPORTUNITY",
  "PUBLIC ART",
  "CAREERS",
] as const;

export const youthPath = [
  "LEARN THE CRAFT",
  "LEARN THE BUSINESS",
  "APPRENTICE",
  "PAID WORK",
  "MENTOR",
] as const;

export const classroomPath = [
  "STUDENT",
  "APPRENTICE",
  "ASSISTANT",
  "WORKING ARTIST",
  "COMMISSIONED ARTIST",
  "MENTOR",
] as const;

export const pilotFlow = [
  "IDENTIFY ONE WALL",
  "ASSEMBLE THE ARTISTS",
  "BRING IN APPRENTICES",
  "CREATE",
  "DOCUMENT",
  "LEARN",
] as const;
