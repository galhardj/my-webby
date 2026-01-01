"use client";

import { useState } from "react";

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

const ProductDetail = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slidehandler = (nav: "next" | "prev") => () => {
    setSlideIndex((prev) => {
      if (nav === "next") {
        return prev === images.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
    });
  };

  return (
    <section className="mx-auto my-8 max-w-4xl">
      <div className="flex items-center gap-6">
        <div className="relative aspect-square flex-1">
          <img
            src={images[slideIndex].src}
            alt={images[slideIndex].alt}
            className="h-full w-full object-cover"
          />

          <button
            className="absolute top-1/2 right-3 rounded-full bg-white/50 p-3 hover:scale-110"
            onClick={slidehandler("next")}
          >
            Next
          </button>
          <button
            className="absolute top-1/2 left-3 rounded-full bg-white/50 p-3 hover:scale-110"
            onClick={slidehandler("prev")}
          >
            Prev
          </button>
        </div>
        <div className="flex-1">
          <h2>Product details</h2>
          <p>Product details description</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
