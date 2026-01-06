"use client";

import Button from "../Button";
import Link from "../Link";
import Image from "../Image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { typeColor } from "@/src/constants/products";
import { useDisableBodyScroll } from "@/src/hooks/useDisableBodyScroll";
import { useKeydownTrigger } from "@/src/hooks/useKeydownTrigger";
import { PokemonDetail } from "@/src/type/pokemon";
import type { ProductDetail } from "@/src/type/product";

const ProductDetail = ({
  product,
  onCloseModal: closeModalHandler,
}: ProductDetail<PokemonDetail>) => {
  const [slideIndex, setSlideIndex] = useState(2);

  useDisableBodyScroll();
  useKeydownTrigger<string>("Escape", closeModalHandler, "");

  const slidehandler = (nav: "next" | "prev") => () => {
    setSlideIndex((prev) => {
      if (nav === "next") {
        return prev === product.gifs.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? product.gifs.length - 1 : prev - 1;
      }
    });
  };

  const DetailList = ({ title, list }: { title: string; list: string[] }) => {
    return (
      <div>
        <h3>{title}</h3>
        <ul className="list-disc pl-4">
          {list.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section
      onClick={() => closeModalHandler("")}
      className="fixed inset-0 flex items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-max w-3xl items-center gap-20 rounded-2xl border-6 border-gray-400 bg-gray-50 p-10"
      >
        <figure className="relative flex aspect-square flex-1 items-center">
          <Image
            src={product.gifs[slideIndex]}
            alt={product.name}
            className="h-56 w-full rounded-sm object-contain"
          />
          <Button
            className="absolute top-1/2 left-0.5 rounded-full bg-gray-200/50 p-3 hover:scale-110"
            onClick={slidehandler("prev")}
          >
            <ChevronLeft />
          </Button>
          <Button
            className="absolute top-1/2 right-0.5 rounded-full bg-gray-200/50 p-3 hover:scale-110"
            onClick={slidehandler("next")}
          >
            <ChevronRight />
          </Button>
        </figure>
        <div
          className={`flex flex-1 flex-col items-start gap-7 rounded-xl p-10 ${typeColor[product.type[0]]}`}
        >
          <div>
            <h2 className="font-bold">
              {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
            </h2>
            <hr className="h-1 w-full bg-gray-600" />
          </div>

          <div className="flex gap-15">
            <DetailList title="Abilities" list={product.abilities} />
            <DetailList title="Moves" list={product.moves} />
          </div>

          <Link
            url={`https://bulbapedia.bulbagarden.net/wiki/${product.name}_(Pokemon)`}
            style="button"
          >
            Bulbapedia
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
