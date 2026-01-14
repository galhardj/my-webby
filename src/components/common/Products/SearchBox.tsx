import { Magnifier } from "@/src/components/icons/Magnifier";

interface SearchBox {
  filterQuery: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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
          className="rounded-2xl border-2 bg-white px-12 py-6 text-gray-700"
          onChange={onSearch}
          placeholder="Search pokemon"
          data-testid="filter-product"
          value={filterQuery}
        />
        <Magnifier />
      </div>
    </div>
  );
};

export default SearchBox;
