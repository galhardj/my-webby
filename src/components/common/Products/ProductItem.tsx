const ProductItem = ({ name, image, key }: any) => {
  return (
    <li className="rounded-2xl border-2" key={key}>
      <a href={`https://bulbapedia.bulbagarden.net/wiki/${name}_(Pokemon)`}>
        <img src={image} alt={name} className="pb-6" />
        <hr className="h-px bg-gray-400" />
        <p className="px-4 py-3 text-2xl font-bold text-gray-400">{name}</p>
      </a>
    </li>
  );
};

export default ProductItem;
