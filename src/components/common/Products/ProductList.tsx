const listOfProducts = [
  // forms[0].name
  // sprites.other.home.front_default
  {
    name: "squirtle", 
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
  },
  {
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
  },
  {
    name: "ditto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
  },
  {
    name: "squirtle", 
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
  },
  {
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
  },
  {
    name: "ditto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
  }
];

const ProductList = () => {
  return (
    <div className="max-w-4xl mx-auto my-8">
      <ul className="grid grid-cols-3 gap-4">
        {listOfProducts.map((product, index) => {
          return (
            <li className="border-2 rounded-2xl" key={index}>
              <a href={`https://bulbapedia.bulbagarden.net/wiki/${product.name}_(Pokemon)`}>
                <img src={product.image} alt={product.name} className="pb-6" />
                <hr className="h-px bg-gray-400" />
                <p className="px-4 py-3 text-2xl font-bold text-gray-400">
                  {product.name}
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
