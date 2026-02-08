"use client";

import React, { useState } from "react";
import type { ProductClaude } from "@/src/type/product";

const products: ProductClaude[] = [
  {
    id: 1,
    name: "Brie, Pistachio & Cranberry Baguette",
    image:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&h=600&fit=crop",
    isVegetarian: true,
    category: "Sandwiches & Wraps",
    description:
      "Fresh baguette filled with creamy brie, crunchy pistachios, tangy cranberries, and crisp lettuce.",
    price: "$12.50",
    ingredients: ["Brie Cheese", "Pistachios", "Cranberries"],
  },
  {
    id: 2,
    name: "Boxing Day Bloomer Toastie",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&h=600&fit=crop",
    isVegetarian: false,
    category: "Sandwiches & Wraps",
    description:
      "Hearty bloomer bread toasted to perfection with savory fillings and melted cheese.",
    price: "$14.00",
    ingredients: ["Turkey", "Stuffing", "Cheese"],
  },
  {
    id: 3,
    name: "Boxing Day Sourdough Toastie",
    image:
      "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800&h=600&fit=crop",
    isVegetarian: false,
    category: "Sandwiches & Wraps",
    description:
      "Artisan sourdough toastie with premium ingredients and golden cheese.",
    price: "$15.00",
    ingredients: ["Ham", "Cheese", "Cranberry Sauce"],
  },
  {
    id: 4,
    name: "Caramelised Biscuity Bar",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=600&fit=crop",
    isVegetarian: true,
    category: "Desserts & Sweets",
    description:
      "Sweet caramelized biscuit bar topped with fluffy marshmallows and chocolate drizzle.",
    price: "$6.50",
    ingredients: ["Caramel", "Biscuit", "Marshmallow"],
  },
  {
    id: 5,
    name: "Christmas Ham Hock Soup",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop",
    isVegetarian: false,
    category: "Soups",
    description:
      "Warming soup made with tender ham hock, vegetables, and savory broth.",
    price: "$10.00",
    ingredients: ["Ham Hock", "Vegetables", "Herbs"],
  },
  {
    id: 6,
    name: "Christmas Tiffin",
    image:
      "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=800&h=600&fit=crop",
    isVegetarian: true,
    category: "Desserts & Sweets",
    description:
      "Rich chocolate tiffin topped with white chocolate, pistachios, and dried cranberries.",
    price: "$7.50",
    ingredients: ["Chocolate", "Pistachios", "Cranberries"],
  },
  {
    id: 7,
    name: "Turkey & Cranberry Panini",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    isVegetarian: false,
    category: "Sandwiches & Wraps",
    description:
      "Grilled panini with tender turkey, cranberry sauce, and melted cheese.",
    price: "$13.50",
    ingredients: ["Turkey", "Cranberry Sauce", "Cheese"],
  },
  {
    id: 8,
    name: "Roasted Vegetable Quiche",
    image:
      "https://images.unsplash.com/photo-1476124369491-b79c29b00be6?w=800&h=600&fit=crop",
    isVegetarian: true,
    category: "Savory Bakes",
    description:
      "Flaky pastry filled with seasonal roasted vegetables and creamy cheese.",
    price: "$11.00",
    ingredients: ["Bell Peppers", "Zucchini", "Cheese"],
  },
  {
    id: 9,
    name: "Festive Mince Pies",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    isVegetarian: true,
    category: "Desserts & Sweets",
    description:
      "Traditional mince pies with spiced fruit filling and buttery pastry.",
    price: "$8.00",
    ingredients: ["Dried Fruits", "Spices", "Butter Pastry"],
  },
  {
    id: 10,
    name: "Smoked Salmon Bagel",
    image:
      "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=800&h=600&fit=crop",
    isVegetarian: false,
    category: "Sandwiches & Wraps",
    description:
      "Fresh bagel with smoked salmon, cream cheese, capers, and red onion.",
    price: "$14.50",
    ingredients: ["Smoked Salmon", "Cream Cheese", "Capers"],
  },
  {
    id: 11,
    name: "Gingerbread Latte Cake",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
    isVegetarian: true,
    category: "Desserts & Sweets",
    description:
      "Moist gingerbread cake with espresso frosting and festive decorations.",
    price: "$9.00",
    ingredients: ["Ginger", "Espresso", "Molasses"],
  },
  {
    id: 12,
    name: "Winter Pumpkin Soup",
    image:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800&h=600&fit=crop",
    isVegetarian: true,
    category: "Soups",
    description: "Creamy pumpkin soup with warming spices and toasted seeds.",
    price: "$9.50",
    ingredients: ["Pumpkin", "Cream", "Spices"],
  },
  {
    id: 13,
    name: "Honey Glazed Ham Sandwich",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&h=600&fit=crop",
    isVegetarian: false,
    category: "Sandwiches & Wraps",
    description:
      "Thick-cut honey glazed ham with mustard mayo on artisan bread.",
    price: "$13.00",
    ingredients: ["Honey Ham", "Mustard Mayo", "Lettuce"],
  },
  {
    id: 14,
    name: "Chocolate Orange Brownies",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop",
    isVegetarian: true,
    category: "Desserts & Sweets",
    description: "Rich chocolate brownies infused with orange zest and chunks.",
    price: "$7.00",
    ingredients: ["Chocolate", "Orange Zest", "Walnuts"],
  },
  {
    id: 15,
    name: "Festive Chicken Wrap",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=600&fit=crop",
    isVegetarian: false,
    category: "Sandwiches & Wraps",
    description:
      "Grilled chicken with stuffing, cranberry sauce, and greens in a wrap.",
    price: "$12.00",
    ingredients: ["Chicken", "Stuffing", "Cranberry"],
  },
  {
    id: 16,
    name: "Spiced Apple Strudel",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&h=600&fit=crop",
    isVegetarian: true,
    category: "Desserts & Sweets",
    description: "Flaky pastry filled with cinnamon-spiced apples and raisins.",
    price: "$8.50",
    ingredients: ["Apples", "Cinnamon", "Raisins"],
  },
  {
    id: 17,
    name: "Beef & Stilton Pie",
    image:
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&h=600&fit=crop",
    isVegetarian: false,
    category: "Savory Bakes",
    description: "Rich beef stew with stilton cheese in golden puff pastry.",
    price: "$16.00",
    ingredients: ["Beef", "Stilton Cheese", "Puff Pastry"],
  },
  {
    id: 18,
    name: "Cranberry & Almond Cake",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&h=600&fit=crop",
    isVegetarian: true,
    category: "Desserts & Sweets",
    description: "Light almond sponge cake studded with tart cranberries.",
    price: "$9.50",
    ingredients: ["Almonds", "Cranberries", "Vanilla"],
  },
];

export default function FestiveMenu() {
  const [selectedProduct, setSelectedProduct] = useState<ProductClaude | null>(
    null,
  );
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState<ProductClaude | null>(
    null,
  );

  const categories = [
    "All",
    "Sandwiches & Wraps",
    "Desserts & Sweets",
    "Soups",
    "Savory Bakes",
  ];

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  if (selectedProduct) {
    return (
      <section className="min-h-screen bg-linear-to-br from-red-50 via-white to-green-50 p-6">
        <div className="mx-auto max-w-4xl">
          <nav>
            <button
              onClick={() => setSelectedProduct(null)}
              className="mb-6 flex items-center gap-2 font-medium text-red-600 transition-colors hover:text-red-700"
              aria-label="Back to menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Menu
            </button>
          </nav>

          <article className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="grid gap-0 md:grid-cols-2">
              <figure className="relative h-96 md:h-auto">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-full w-full object-cover"
                />
                {selectedProduct.isVegetarian && (
                  <span
                    className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 font-bold text-white shadow-lg"
                    aria-label="Vegetarian"
                  >
                    V
                  </span>
                )}
              </figure>

              <section className="flex flex-col justify-center p-8 md:p-12">
                <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  {selectedProduct.name}
                </h1>
                <p
                  className="mb-6 text-xl font-bold text-red-600"
                  aria-label={`Price: ${selectedProduct.price}`}
                >
                  {selectedProduct.price}
                </p>
                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                  {selectedProduct.description}
                </p>
                <button className="rounded-lg bg-red-600 px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-red-700 hover:shadow-xl">
                  Add to Order
                </button>
              </section>
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-white to-green-50 p-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <h1 className="mb-6 text-center text-5xl font-bold text-gray-900 md:text-6xl">
            Festive Menu
          </h1>

          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <label htmlFor="search" className="sr-only">
                  Search products
                </label>
                <div className="relative">
                  <input
                    id="search"
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(6);
                    }}
                    className="w-full rounded-lg border-2 border-gray-300 px-6 py-4 pl-14 text-lg shadow-md focus:border-red-600 focus:outline-none"
                  />
                  <svg
                    className="absolute top-1/2 left-4 h-6 w-6 -translate-y-1/2 transform text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  {searchQuery && (
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setVisibleCount(6);
                      }}
                      className="absolute top-1/2 right-4 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
                      aria-label="Clear search"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <div className="md:w-64">
                <label htmlFor="category" className="sr-only">
                  Filter by category
                </label>
                <div className="relative">
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setVisibleCount(6);
                    }}
                    className="w-full cursor-pointer appearance-none rounded-lg border-2 border-gray-300 bg-white px-6 py-4 pr-10 text-lg shadow-md focus:border-red-600 focus:outline-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 transform text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </header>

        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-2xl text-gray-600">
              No products found matching "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 font-semibold text-red-600 hover:text-red-700"
            >
              Clear search
            </button>
          </div>
        ) : (
          <>
            <section
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              aria-label="Product list"
            >
              {visibleProducts.map((product) => (
                <article
                  key={product.id}
                  className="transform overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedProduct(product);
                    }}
                    className="block"
                    aria-label={`View details for ${product.name}`}
                  >
                    <figure className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      {product.isVegetarian && (
                        <span
                          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 font-bold text-white shadow-lg"
                          aria-label="Vegetarian"
                        >
                          V
                        </span>
                      )}
                    </figure>

                    <div className="p-6">
                      <h2 className="mb-2 text-xl font-bold text-gray-900">
                        {product.name}
                      </h2>
                      <p
                        className="text-lg font-semibold text-red-600"
                        aria-label={`Price: ${product.price}`}
                      >
                        {product.price}
                      </p>
                    </div>
                  </a>
                </article>
              ))}
            </section>

            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={handleShowMore}
                  className="rounded-lg bg-red-600 px-12 py-4 font-bold text-white shadow-lg transition-colors hover:bg-red-700 hover:shadow-xl"
                >
                  Show More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
