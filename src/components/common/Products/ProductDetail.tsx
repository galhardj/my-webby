"use client";

import { useState, Dispatch, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { typeColor } from "@/src/constants/products";

const ProductDetail = ({
  product,
  onCloseModal: closeModalHandler,
}: {
  product: any;
  onCloseModal: Dispatch<string>;
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  //   consider useEffect as customHook
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModalHandler("");
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

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
        <ul className="pl-4 list-disc">
          {product[section.toLowerCase()].map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className="fixed inset-0 z-30 bg-black/50" />
      <section
        onClick={() => closeModalHandler("")}
        className="fixed inset-0 z-40 flex items-center justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-20 p-10 border-gray-400 h-max w-3xl rounded-2xl border-6 bg-gray-50"
        >
          <div className="relative flex items-center flex-1 aspect-square">
            <img
              src={product.gifs[slideIndex]}
              alt={product.name}
              className="object-contain w-full h-56 rounded-sm"
            />

            <button
              className="absolute p-3 rounded-full top-1/2 right-3 bg-gray-200/50 hover:scale-110"
              onClick={slidehandler("next")}
            >
              <ChevronRight />
            </button>
            <button
              className="absolute p-3 rounded-full top-1/2 left-3 bg-gray-200/50 hover:scale-110"
              onClick={slidehandler("prev")}
            >
              <ChevronLeft />
            </button>
          </div>
          <div
            className={`flex flex-1 flex-col items-start gap-7 rounded-xl p-10 ${typeColor[product.type[0]]}`}
          >
            <div>
              <h2 className="font-bold">
                {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
              </h2>
              <hr className="w-full h-1 bg-gray-600" />
            </div>

            <div className="flex gap-15">
              <DetailList section="Abilities" />
              <DetailList section="Moves" />
            </div>

            <a
              href={`https://bulbapedia.bulbagarden.net/wiki/${product.name}_(Pokemon)`}
              className="py-3 mt-3 font-medium text-gray-200 bg-gray-600 text-md rounded-xl px-7"
            >
              Bulbapedia
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
