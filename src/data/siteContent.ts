/** Editable site content — update phone, email, Instagram, captions here. */

import dodgersMuralHero from "../assets/images/dodgers-mural-hero.jpg";
import bornHere01 from "../assets/images/born-here-01.jpg";
import bornHere02 from "../assets/images/born-here-02.jpg";
import bornHere03 from "../assets/images/born-here-03.jpg";
import work01 from "../assets/images/work-01.jpg";
import work02 from "../assets/images/work-02.jpg";
import work03 from "../assets/images/work-03.jpg";
import work04 from "../assets/images/work-04.jpg";

export const site = {
  name: "Guillermo Palacio",
  titleLines: ["Artist", "Designer", "Creative Director"] as const,
  location: "Los Angeles, California",
  phone: "(310) 628-6787",
  phoneHref: "tel:+13106286787",
  email: "gpalaciocorp@gmail.com",
  emailHref: "mailto:gpalaciocorp@gmail.com",
  instagram: "https://instagram.com/thevsnry",
  instagramLabel: "@thevsnry",
  year: 2026,
} as const;

export type SiteImage = {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
};

export const images = {
  dodgersMural: {
    src: dodgersMuralHero,
    alt: "Venice Beach mural celebrating the Los Angeles Dodgers World Series championship, featuring Shohei Ohtani",
    caption: "Venice Beach · Dodgers mural",
    objectPosition: "center 42%",
  },
  /** After “ARTWORK BORN HERE. TALENT SOURCED HERE.” — single column */
  bornHereGallery: [
    {
      src: bornHere01,
      alt: "Crew on a lift painting over a mural under a Los Angeles freeway overpass",
      objectPosition: "center 35%",
    },
    {
      src: bornHere02,
      alt: "Frank Romero freeway mural with cars, hearts, and palm trees near Hollywood 101",
      objectPosition: "center 45%",
    },
    {
      src: bornHere03,
      alt: "Los Angeles freeway mural of Jupiter and classical columns beside Harbor Freeway traffic",
      objectPosition: "center 40%",
    },
  ],
  work: [
    {
      src: work01,
      alt: "Indoor landscape mural of fruit orchards, palm trees, and a house in the mountains",
      caption: "Mural",
      objectPosition: "center 45%",
    },
    {
      src: work02,
      alt: "Colorful graffiti mural on a corrugated metal fence under a cloudy Los Angeles sky",
      caption: "Street art",
      objectPosition: "center 55%",
    },
    {
      src: work03,
      alt: "Artists spray-painting a Lakers portrait mural on a yellow truck",
      caption: "On site",
      objectPosition: "center 35%",
    },
    {
      src: work04,
      alt: "Illustration of a bird beside yellow and orange flowers",
      caption: "Illustration",
      objectPosition: "center top",
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
