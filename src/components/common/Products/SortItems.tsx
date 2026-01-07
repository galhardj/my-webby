interface SortItems {
  selectedCat: string;
  onSorting: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  allCategories: string[];
}

const ChevronDownSVG = () => (
  <svg
    className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 pointer-events-none top-1/2 right-4"
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
          className="w-full py-6 text-gray-400 border-2 appearance-none rounded-2xl px-14"
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
