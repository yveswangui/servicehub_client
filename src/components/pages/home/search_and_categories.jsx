import { categories } from "@/constants/home_categories";

const SearchAndCategories = () => {
  return (
    <div className="px-4 my-10">
      <input
        type="text"
        placeholder="Search for services"
        className="border-[1px] border-[#cecece] p-3 w-full"
      />
      <div className="flex flex-wrap items-center justify-center mt-6 gap-x-2 md:gap-x-5 gap-y-2">
        {categories.map((category, index) => (
          <CategoryButton key={index} title={category} />
        ))}
      </div>
    </div>
  );
};

const CategoryButton = ({ title }) => {
  return (
    <div className="py-2 px-4 border-[1px] border-[#cecece] rounded-full hover:bg-black transition-all duration-150 cursor-pointer group">
      <p className="group-hover:text-white">{title}</p>
    </div>
  );
};

export default SearchAndCategories;
