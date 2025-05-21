import { CATEGORIES } from "../utils/mockData";

const Category = () => {
  return (
    <div className="flex flex-wrap gap-3 p-4 justify-center">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium 
                     capitalize cursor-pointer transition-all duration-200 ease-in-out
                     hover:bg-gray-200 hover:scale-105 hover:shadow-md active:scale-95"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;
