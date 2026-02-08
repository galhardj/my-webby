"use client";

import React, { useState } from "react";
import { Leaf, Droplets, Sparkles } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    ingredients: [
      { name: "Hyaluronic Acid", benefit: "Deep hydration", icon: Droplets },
      { name: "Vitamin C", benefit: "Brightening", icon: Sparkles },
      { name: "Niacinamide", benefit: "Smoothing", icon: Leaf },
    ],
  },
  {
    id: 2,
    name: "Vitamin C Moisturizer",
    price: "$38",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    ingredients: [
      { name: "Vitamin C", benefit: "Antioxidant", icon: Sparkles },
      { name: "Shea Butter", benefit: "Nourishing", icon: Leaf },
      { name: "Glycerin", benefit: "Moisture lock", icon: Droplets },
    ],
  },
  {
    id: 3,
    name: "Retinol Night Cream",
    price: "$52",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    ingredients: [
      { name: "Retinol", benefit: "Anti-aging", icon: Sparkles },
      { name: "Peptides", benefit: "Firming", icon: Leaf },
      { name: "Ceramides", benefit: "Barrier repair", icon: Droplets },
    ],
  },
  {
    id: 4,
    name: "Gentle Cleansing Foam",
    price: "$28",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ingredients: [
      { name: "Aloe Vera", benefit: "Soothing", icon: Leaf },
      { name: "Green Tea", benefit: "Antioxidant", icon: Sparkles },
      { name: "Glycerin", benefit: "Hydrating", icon: Droplets },
    ],
  },
  {
    id: 5,
    name: "Exfoliating Toner",
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
    ingredients: [
      { name: "Salicylic Acid", benefit: "Exfoliating", icon: Sparkles },
      { name: "Witch Hazel", benefit: "Pore refining", icon: Leaf },
      { name: "Rose Water", benefit: "Calming", icon: Droplets },
    ],
  },
  {
    id: 6,
    name: "Eye Renewal Cream",
    price: "$48",
    image:
      "https://images.unsplash.com/photo-1556228994-230d42e61b6b?w=400&h=400&fit=crop",
    ingredients: [
      { name: "Caffeine", benefit: "De-puffing", icon: Sparkles },
      { name: "Peptides", benefit: "Smoothing", icon: Leaf },
      { name: "Hyaluronic Acid", benefit: "Plumping", icon: Droplets },
    ],
  },
];

const ProductCard = ({ product }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
        <div className="relative h-72 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-2xl font-bold text-indigo-600">{product.price}</p>
        </div>

        {/* Ingredient Overlay */}
        <div
          className={`absolute inset-0 rounded-2xl bg-white/95 backdrop-blur-sm transition-all duration-300 ${isHovered ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <div className="flex h-full flex-col justify-center p-8">
            <h4 className="mb-6 text-center text-lg font-bold text-gray-800">
              Key Ingredients
            </h4>
            <div className="space-y-4">
              {product.ingredients.map((ingredient: any, idx: any) => {
                const Icon = ingredient.icon;
                return (
                  <div
                    key={idx}
                    className="flex transform items-start gap-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 p-4 transition-all duration-300 hover:scale-105"
                    style={{
                      animationDelay: `${idx * 100}ms`,
                      animation: isHovered
                        ? "slideIn 0.4s ease-out forwards"
                        : "none",
                    }}
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="mb-1 font-semibold text-gray-800">
                        {ingredient.name}
                      </h5>
                      <p className="text-sm text-gray-600">
                        {ingredient.benefit}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductHovered() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">
            Our Products
          </h1>
          <p className="text-xl text-gray-600">
            Hover over any product to discover its key ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
