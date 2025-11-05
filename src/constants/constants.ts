export const HOMEPAGE_CONTENT = {
  title: "Welcome to My Webby",
  tagline: "A fast, minimal Next.js site",
  description:
    "This homepage is fully static. All text and imagery are defined as constants in the codebase.",
  features: [
    {
      title: "Next.js 15",
      text: "Modern app router with React 19 support.",
    },
    {
      title: "Tailwind CSS v4",
      text: "Utility-first styling with zero config.",
    },
    {
      title: "TypeScript",
      text: "Strictly typed for reliable DX.",
    },
  ],
  // Simple inline SVG as a data URI (keeps repo binary-free)
  heroImageDataUri:
    "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'>\
  <defs>\
    <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>\
      <stop offset='0%' stop-color='%2314b8a6'/>\
      <stop offset='100%' stop-color='%232563eb'/>\
    </linearGradient>\
  </defs>\
  <rect width='800' height='400' fill='url(%23g)'/>\
  <g fill='white' font-family='Arial, Helvetica, sans-serif'>\
    <text x='50%' y='46%' font-size='48' text-anchor='middle' dominant-baseline='middle'>My Webby</text>\
    <text x='50%' y='60%' font-size='18' text-anchor='middle' dominant-baseline='middle'>Static homepage powered by constants</text>\
  </g>\
</svg>",
} as const;

export const BANNER_TWO = {
  image: {
    src: "/images/meetings.png",
    alt: "Season Sip Banner"
  },
  title: "Welcome back, Pumpkin Spice Latte",
  description: "It's the sip you've been waiting for all year. Our Pumpkin Spice Latte brings autumn to life in every cup."
} as const;
