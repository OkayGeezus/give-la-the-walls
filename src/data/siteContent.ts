/** Editable site content — update phone, email, Instagram, captions here. */

export const site = {
  name: "Guillermo Palacio",
  title: "Artist · Designer · Creative Director",
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
  youth01: {
    src: "/images/youth-art-01.jpg",
    alt: "Young artists developing mural and street-art skills",
  },
  youth02: {
    src: "/images/youth-art-02.jpg",
    alt: "Mentorship and hands-on public art training",
  },
  wall01: {
    src: "/images/wall-01.jpg",
    alt: "Los Angeles wall surface caught in a graffiti and paint-over cycle",
  },
  wall02: {
    src: "/images/wall-02.jpg",
    alt: "Overlooked Los Angeles infrastructure with potential as a public-art canvas",
  },
  wall03: {
    src: "/images/wall-03.jpg",
    alt: "Urban wall in Los Angeles awaiting commissioned artwork",
  },
  work: [
    {
      src: "/images/work-01.jpg",
      alt: "Recent mural work by Guillermo Palacio",
      caption: "Recent work",
    },
    {
      src: "/images/work-02.jpg",
      alt: "Detail of public mural in Los Angeles",
      caption: "Recent work",
    },
    {
      src: "/images/work-03.jpg",
      alt: "Large-format outdoor mural",
      caption: "Recent work",
    },
    {
      src: "/images/work-04.jpg",
      alt: "Street-level public art installation",
      caption: "Recent work",
    },
    {
      src: "/images/work-05.jpg",
      alt: "Collaborative mural project",
      caption: "Recent work",
    },
    {
      src: "/images/work-06.jpg",
      alt: "Urban public art in Los Angeles",
      caption: "Recent work",
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

export const craftSkills = [
  "Drawing and illustration",
  "Lettering and typography",
  "Color theory",
  "Composition",
  "Spray-paint techniques",
  "Brush and large-format painting",
  "Mural planning and execution",
  "Digital design",
  "Photography",
  "Portfolio development",
] as const;

export const businessSkills = [
  "Pricing projects",
  "Estimating materials and labor",
  "Presenting concepts",
  "Building portfolios",
  "Client communication",
  "Project management",
  "Marketing",
  "Working with businesses and organizations",
  "Turning creative ability into a sustainable profession",
] as const;

export const careerLadder = [
  "STUDENT",
  "APPRENTICE",
  "ARTIST",
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

export const cityThemes = [
  "ITS NEIGHBORHOODS.",
  "ITS CULTURES.",
  "ITS HISTORY.",
  "ITS ATHLETES.",
  "ITS MUSIC.",
  "ITS PEOPLE.",
  "ITS TYPOGRAPHY.",
  "ITS ARCHITECTURE.",
  "ITS MOVEMENT.",
  "ITS ATTITUDE.",
] as const;

export const redirectSteps = [
  "REDIRECT THE ENERGY.",
  "DEVELOP THE ARTIST.",
  "CREATE OPPORTUNITY.",
  "BEAUTIFY THE CITY.",
] as const;

export const pilotSteps = [
  { n: "01", text: "IDENTIFY ONE WALL" },
  { n: "02", text: "COMMISSION A LEAD ARTIST" },
  { n: "03", text: "BRING IN EMERGING ARTISTS + YOUTH APPRENTICES" },
  { n: "04", text: "CREATE THE WORK" },
  { n: "05", text: "DOCUMENT THE PROCESS" },
  { n: "06", text: "MEASURE COMMUNITY RESPONSE + MAINTENANCE" },
  { n: "07", text: "LEARN" },
  { n: "08", text: "SCALE" },
] as const;
