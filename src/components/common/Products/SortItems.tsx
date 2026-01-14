interface SortItems {
  selectedCat: string;
  onSorting: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  allCategories: string[];
}

const ChevronDownSVG = () => (
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
);

const SortItems = ({ selectedCat, onSorting, allCategories }: SortItems) => {
  return (
    <div>
      <label htmlFor="category-product" className="sr-only">
        Sort by category
      </label>
      <div className="relative">
        <select
          id="category-product"
          className="appearance-none rounded-2xl border-2 bg-white py-6 pr-12 pl-6 text-gray-400"
          value={selectedCat}
          onChange={onSorting}
        >
          <option value="">Sort by Category</option>
          {allCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <ChevronDownSVG />
      </div>
    </div>
  );
};

export default SortItems;
