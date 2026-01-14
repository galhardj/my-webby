import { ChevronDown } from "@/src/components/icons/ChevronDown";

interface SortItems {
  selectedCat: string;
  onSorting: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  allCategories: string[];
}

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
        <ChevronDown />
      </div>
    </div>
  );
};

export default SortItems;
