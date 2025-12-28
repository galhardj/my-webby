interface SearchBox {
  filterQuery: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// TODO: Consider moving SVG import from different file
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
          className="rounded-2xl border-2 px-12 py-6"
          onChange={onSearch}
          placeholder="Search pokemon"
          value={filterQuery}
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
      </div>
    </div>
  );
};

export default SearchBox;
