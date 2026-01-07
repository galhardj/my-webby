interface SearchBox {
  filterQuery: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MagnifierSVG = () => (
  <svg
    className="absolute w-6 h-6 text-gray-400 transform -translate-y-1/2 top-1/2 left-4"
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
);

const SearchBox = ({ filterQuery, onSearch }: SearchBox) => {
  return (
    <div>
      <label htmlFor="filter-product" className="sr-only">
        Search for items
      </label>
      <div className="relative">
        <input
          id="filter-product"
          type="text"
          className="px-12 py-6 text-gray-700 border-2 rounded-2xl"
          onChange={onSearch}
          placeholder="Search pokemon"
          value={filterQuery}
        />
        <MagnifierSVG />
      </div>
    </div>
  );
};

export default SearchBox;
