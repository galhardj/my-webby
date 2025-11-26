import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/shadcn-ui/carousel";

const STORIES = [
  {
    title: "Launch velocity",
    quote:
      "The revamped onboarding let our team ship experiments twice as fast.",
    author: "Product Ops, Orbit Labs",
  },
  {
    title: "Team visibility",
    quote: "Dashboards stay perfectly synced across every region we track.",
    author: "Infra Lead, Claystone",
  },
  {
    title: "Happier customers",
    quote: "Response times dropped below 150ms within a single sprint.",
    author: "CX Director, Sproutline",
  },
];

export default function HighlightCarousel() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-stone-500 uppercase dark:text-stone-400">
          customer notes
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-stone-900 dark:text-stone-50">
          Stories from teams building on Webby
        </h2>
        <p className="mt-2 text-base text-stone-600 dark:text-stone-300">
          A lightweight carousel built with our shared shadcn components.
        </p>
      </div>

      <Carousel
        className="relative mx-auto max-w-4xl"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent className="pb-12 sm:[&>div]:basis-1/2">
          {STORIES.map((story) => (
            <CarouselItem key={story.title} className="pl-6">
              <figure className="h-full rounded-3xl border border-stone-200 bg-stone-50 p-6 text-left shadow-sm dark:border-stone-800 dark:bg-stone-900/40">
                <p className="text-sm font-medium tracking-wide text-stone-500 uppercase">
                  {story.title}
                </p>
                <blockquote className="mt-4 text-lg leading-relaxed font-medium text-stone-900 dark:text-stone-50">
                  “{story.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-stone-500 dark:text-stone-300">
                  {story.author}
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
