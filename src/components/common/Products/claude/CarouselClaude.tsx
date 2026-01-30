"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
      alt: "Mountain landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop",
      alt: "Forest path",
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop",
      alt: "Lake view",
    },
    {
      src: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=500&fit=crop",
      alt: "Desert dunes",
    },
    {
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=500&fit=crop",
      alt: "Ocean sunset",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 p-8">
      <article className="w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="h-full w-full object-cover"
              />

              <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-800 shadow-lg transition-all hover:scale-110 hover:bg-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-800 shadow-lg transition-all hover:scale-110 hover:bg-white"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <nav
                className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3"
                aria-label="Carousel navigation"
              >
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-full transition-all ${
                      index === currentIndex
                        ? "h-3 w-12 bg-white"
                        : "h-3 w-3 bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === currentIndex ? "true" : "false"}
                  />
                ))}
              </nav>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl leading-tight font-bold text-slate-900 lg:text-6xl">
              Handmade. Hand delivered.
            </h1>

            <p className="text-xl leading-relaxed text-slate-700">
              Freshly made breakfast, lunch and sweet platters – from our
              kitchen to yours.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              In-laws popping by? Busy teams need a boost? Whenever you need to
              fuel a crowd for breakfast, lunch or snacks, order by 10 am for
              same-day delivery.
            </p>

            <button className="mt-4 rounded-lg border-2 border-slate-900 px-8 py-4 text-lg font-medium text-slate-900 transition-all hover:bg-slate-900 hover:text-white">
              Find out more
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ImageCarousel;
