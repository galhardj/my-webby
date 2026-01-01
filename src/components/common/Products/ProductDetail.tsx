"use client";

import { useState } from "react";
import { PokemonDetail } from "@/src/type/pokemon";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const ProductDetail = ({ product }: { product: any }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slidehandler = (nav: "next" | "prev") => () => {
    setSlideIndex((prev) => {
      if (nav === "next") {
        return prev === product.gifs.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? product.gifs.length - 1 : prev - 1;
      }
    });
  };

  const DetailList = ({ section }: { section: "Abilities" | "Moves" }) => {
    return (
      <div>
        <h3>{section}</h3>
        <ul className="list-disc pl-4">
          {product[section.toLowerCase()].map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section className="mx-auto my-8 max-w-4xl">
      <div className="flex items-center gap-20">
        <div className="relative aspect-square flex-1">
          <img
            src={product.gifs[slideIndex]}
            alt={images[slideIndex].alt}
            className="h-96 w-full rounded-sm object-contain"
          />

          <button
            className="absolute top-1/2 right-3 rounded-full bg-gray-200/50 p-3 hover:scale-110"
            onClick={slidehandler("next")}
          >
            <ChevronRight />
          </button>
          <button
            className="absolute top-1/2 left-3 rounded-full bg-gray-200/50 p-3 hover:scale-110"
            onClick={slidehandler("prev")}
          >
            <ChevronLeft />
          </button>
        </div>
        <div className="flex flex-1 flex-col items-start gap-6">
          <h2>{product.name}</h2>

          <div className="flex gap-15">
            <DetailList section="Abilities" />
            <DetailList section="Moves" />
          </div>

          <a
            href={`https://bulbapedia.bulbagarden.net/wiki/${product.name}_(Pokemon)`}
            className="rounded-xl border-2 bg-green-200 px-7 py-3"
          >
            Bulbapedia
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
