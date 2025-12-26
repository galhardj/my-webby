import { cn } from "@/src/lib/mergeTailwind";
interface ProductItem {
  name: string;
  image: string;
  type: string[];
}

const ProductItem = ({ name, image, type: types }: ProductItem) => {
  const typeColor: Record<string, string> = {
    water: "bg-blue-200",
    poison: "bg-purple-200",
    ground: "bg-amber-100",
    fire: "bg-red-200",
    grass: "bg-green-200",
    electric: "bg-yellow-200",
    psychic: "bg-pink-100",
    ice: "bg-cyan-100",
    dragon: "bg-indigo-100",
    dark: "bg-gray-800 text-white",
    fairy: "bg-pink-200",
    normal: "bg-gray-100",
    fighting: "bg-orange-100",
    flying: "bg-sky-100",
    bug: "bg-lime-100",
    rock: "bg-amber-200",
    ghost: "bg-violet-100",
    steel: "bg-slate-200",
  };

  return (
    <li className="rounded-2xl border-2">
      <a
        href={`https://bulbapedia.bulbagarden.net/wiki/${name}_(Pokemon)`}
        className="flex flex-col gap-2"
      >
        <img src={image} alt={name} className="pb-6" />
        <ul className="ml-1 flex gap-1">
          {types.map((type, index) => (
            <li
              key={index}
              className={cn(
                "min-w-18 rounded-xl border-2 py-0.5 text-center",
                typeColor[type] ?? "bg-white",
              )}
            >
              {type}
            </li>
          ))}
        </ul>
        <hr className="h-px bg-gray-400" />
        <p className="px-4 py-3 text-2xl font-bold text-gray-400">{name}</p>
      </a>
    </li>
  );
};

export default ProductItem;
