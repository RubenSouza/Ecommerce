import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsSearching, setPage, setSearch } from "../redux/features/querys";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm === "") {
      searchParams.delete("search");
      dispatch(setIsSearching(false));
      navigate({ search: searchParams.toString() });
    } else {
      searchParams.set("search", searchTerm.toString());
      searchParams.delete("page");
      dispatch(setIsSearching(true));
      dispatch(setPage(1));
      navigate({ search: searchParams.toString() });
    }
    dispatch(setSearch(searchTerm));
  }, [searchTerm]);

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
