export const site = {
  name: "Greenfield Landscaping & Pools",
  tagline: "Yards and pools that look cared for — and stay that way.",
  description:
    "Professional lawn care, landscape design, and pool services. Request a quote and we will call you back.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phoneDisplay: "(555) 010-2040",
  phoneHref: "tel:+15550102040",
  serviceArea: "Osceola, St. Lucie, Martin, Palm Beach, and Indian River counties",
  serviceAreas: [
    {
      name: "Osceola County",
      region: "Central Florida",
      note: "Kissimmee, St. Cloud, and the lake country west of the coast.",
    },
    {
      name: "St. Lucie County",
      region: "Treasure Coast",
      note: "Port St. Lucie, Fort Pierce, and neighborhoods in between.",
    },
    {
      name: "Martin County",
      region: "Treasure Coast",
      note: "Stuart, Jensen Beach, and the river towns nearby.",
    },
    {
      name: "Palm Beach County",
      region: "South Florida",
      note: "From the beaches inland — a wide county, one standard of work.",
    },
    {
      name: "Indian River County",
      region: "Treasure Coast",
      note: "Vero Beach and the barrier-island communities.",
    },
  ],
  mission:
    "We treat every property as if it were our own: honest work, clean edges, clear water, and outdoor spaces that make a strong first impression. Our mission is to give homeowners a yard and pool they are proud of — without the guesswork, missed visits, or surprise add-ons that too often come with hiring a crew.",
};

export const services = [
  {
    slug: "lawn-care",
    title: "Lawn care & mowing",
    summary:
      "Reliable mowing, edging, and feeding so the lawn stays even, green, and ready for company.",
    photoLabel: "Client photo: lawn care",
    tone: "green" as const,
  },
  {
    slug: "landscape-design",
    title: "Landscape design",
    summary:
      "Planting plans and outdoor layouts that fit the house, the light, and how you actually use the yard.",
    photoLabel: "Client photo: landscape design",
    tone: "green" as const,
  },
  {
    slug: "beds-and-mulch",
    title: "Beds, mulch & planting",
    summary:
      "Clean beds, fresh mulch, and plants chosen to last — not just look good for a weekend.",
    photoLabel: "Client photo: planting and mulch",
    tone: "green" as const,
  },
  {
    slug: "pool-maintenance",
    title: "Pool cleaning & maintenance",
    summary:
      "Skimming, vacuuming, and chemistry checks so the water stays clear, balanced, and ready to swim.",
    photoLabel: "Client photo: pool maintenance",
    tone: "blue" as const,
  },
  {
    slug: "pool-open-close",
    title: "Pool opening & closing",
    summary:
      "Seasonal open and close so the pool is protected in winter and swim-ready when the weather turns.",
    photoLabel: "Client photo: pool opening and closing",
    tone: "blue" as const,
  },
  {
    slug: "seasonal-cleanup",
    title: "Seasonal yard cleanup",
    summary:
      "Spring and fall cleanups that clear leaves, debris, and overgrowth before they take over.",
    photoLabel: "Client photo: seasonal cleanup",
    tone: "green" as const,
  },
] as const;
