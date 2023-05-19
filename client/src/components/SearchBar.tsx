import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="flex flex-row justify-start items-center bg-[#3c3c3c67] rounded-md">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="bg-transparent border-none placeholder-gray-500 outline-none 
      text-sm text-primary-50 py-1 w-full leading-8 transition-colors duration-200
      ease-in-out focus:ring-0"
          placeholder="What are you looking for?"
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
