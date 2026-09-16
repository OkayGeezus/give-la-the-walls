/** Editable site content — update phone, email, Instagram, captions here. */

import dodgersMuralHero from "../assets/images/dodgers-mural-hero.jpg";
import bornHere01 from "../assets/images/born-here-01.jpg";
import bornHere02 from "../assets/images/born-here-02.jpg";
import bornHere03 from "../assets/images/born-here-03.jpg";
import work01 from "../assets/images/work-01.jpg";
import work02 from "../assets/images/work-02.jpg";
import work03 from "../assets/images/work-03.jpg";
import work04 from "../assets/images/work-04.jpg";
import work05 from "../assets/images/work-05.jpg";
import work06 from "../assets/images/work-06.jpg";
import work07 from "../assets/images/work-07.jpg";
import work08 from "../assets/images/work-08.jpg";
import work09 from "../assets/images/work-09.jpg";
import work10 from "../assets/images/work-10.jpg";
import work11 from "../assets/images/work-11.jpg";
import work12 from "../assets/images/work-12.jpg";
import work13 from "../assets/images/work-13.jpg";
import work14 from "../assets/images/work-14.jpg";
import work15 from "../assets/images/work-15.jpg";

export const site = {
  name: "Guillermo Palacio",
  brand: "GIVE LA THE WALLS",
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
  /**
   * Selected Work carousel — append items freely (any length).
   * To add a piece: put the file in `src/assets/images/`, import it above,
   * then push `{ src, alt, caption?, objectPosition? }` onto this array.
   */
  work: [
    {
      src: work01,
      alt: "Aerial view of Crenshaw Cougars painted basketball court with geometric color field",
      caption: "School court",
      objectPosition: "center center",
    },
    {
      src: work02,
      alt: "Overhead mural of Paralympic Experience basketball court with wheelchair athlete character",
      caption: "Court mural",
      objectPosition: "center 40%",
    },
    {
      src: work03,
      alt: "Aerial view of turquoise Nike-branded outdoor court among palm trees",
      caption: "Brand activation",
      objectPosition: "center 45%",
    },
    {
      src: work04,
      alt: "Indoor landscape mural of fruit orchards, palm trees, and a house in the mountains",
      caption: "Mural",
      objectPosition: "center 45%",
    },
    {
      src: work05,
      alt: "Speed Racer mural with wildstyle lettering on a corrugated metal wall in Pico Union",
      caption: "Street mural",
      objectPosition: "center 40%",
    },
    {
      src: work06,
      alt: "Teenage Mutant Ninja Turtles mural with Donatello and graffiti lettering in Long Beach",
      caption: "Collab mural",
      objectPosition: "center 35%",
    },
    {
      src: work07,
      alt: "Street Fighter Ryu mural casting a hadoken on a cinderblock wall",
      caption: "Character mural",
      objectPosition: "center 40%",
    },
    {
      src: work08,
      alt: "Street Fighter Akuma mural with magenta energy effects on a concrete wall",
      caption: "Character mural",
      objectPosition: "center 42%",
    },
    {
      src: work09,
      alt: "Blue and black wildstyle graffiti lettering on a cinderblock wall",
      caption: "Lettering",
      objectPosition: "center 45%",
    },
    {
      src: work10,
      alt: "Colorful graffiti mural on a corrugated metal fence under a cloudy Los Angeles sky",
      caption: "Street art",
      objectPosition: "center 55%",
    },
    {
      src: work11,
      alt: "Close-up of a Lakers portrait mural painted on a gold vehicle",
      caption: "Portrait",
      objectPosition: "center 28%",
    },
    {
      src: work12,
      alt: "Artists spray-painting a Lakers portrait mural on a yellow truck",
      caption: "On site",
      objectPosition: "center 35%",
    },
    {
      src: work13,
      alt: "Illustration of a bird beside yellow and orange flowers",
      caption: "Illustration",
      objectPosition: "center top",
    },
    {
      src: work14,
      alt: "Los Angeles World Cup 2026 poster illustration with trophy and city skyline",
      caption: "Campaign art",
      objectPosition: "center 30%",
    },
    {
      src: work15,
      alt: "Interior corner mural with tiki mask, tropical florals, and blue lettering",
      caption: "Interior mural",
      objectPosition: "center 40%",
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
