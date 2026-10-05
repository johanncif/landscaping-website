export const site = {
  name: "Greenfield Landscaping",
  tagline: "Yards that look cared for — and stay that way.",
  description:
    "Professional lawn care, landscape design, and property maintenance. Request a quote and we will call you back.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phoneDisplay: "(555) 010-2040",
  phoneHref: "tel:+15550102040",
  serviceArea: "Your city and nearby neighborhoods",
  mission:
    "We treat every property as if it were our own: honest work, clean edges, and landscapes that make a strong first impression. Our mission is to give homeowners a yard they are proud of — without the guesswork, missed visits, or surprise add-ons that too often come with hiring a crew.",
};

export const services = [
  {
    slug: "lawn-care",
    title: "Lawn care & mowing",
    summary:
      "Reliable mowing, edging, and feeding so the lawn stays even, green, and ready for company.",
    photoLabel: "Client photo: lawn care",
  },
  {
    slug: "landscape-design",
    title: "Landscape design",
    summary:
      "Planting plans and outdoor layouts that fit the house, the light, and how you actually use the yard.",
    photoLabel: "Client photo: landscape design",
  },
  {
    slug: "beds-and-mulch",
    title: "Beds, mulch & planting",
    summary:
      "Clean beds, fresh mulch, and plants chosen to last — not just look good for a weekend.",
    photoLabel: "Client photo: planting and mulch",
  },
  {
    slug: "seasonal-cleanup",
    title: "Seasonal cleanup",
    summary:
      "Spring and fall cleanups that clear leaves, debris, and overgrowth before they take over.",
    photoLabel: "Client photo: seasonal cleanup",
  },
] as const;
