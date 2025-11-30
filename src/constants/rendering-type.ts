// Server Side Rendering
const SSR: RequestInit = {
  cache: "no-store" as RequestCache,
};

// Static site Generator
const SSG: RequestInit = {
  cache: "force-cache" as RequestCache,
};

// Incremental Static Regeneration
// Next.js extends RequestInit with a 'next' property
const ISR: RequestInit = { next: { revalidate: 60 } } as RequestInit;

export { SSR, SSG, ISR };
