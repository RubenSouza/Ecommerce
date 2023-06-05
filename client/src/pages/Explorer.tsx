import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SearchBar from "../components/SearchBar";
import SideExplorer from "../components/SideExplorer";
import { IoFilter } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import GamesExplorerContent from "../components/GamesExplorerContent";
import { Route, Routes, useLocation } from "react-router-dom";
import CategoryExplorerContent from "../components/CategoryExplorerContent";
import GamesSearched from "../components/GamesSearched";

const Explorer = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const genre = searchParams.get("genre");
  const search = searchParams.get("search");

  return (
    <div className="w-full h-full flex justify-center py-10">
      <div className="w-full md:w-[1400px] h-full flex">
        <div className="hidden md:inline w-[300px] px-5">
          <SideExplorer />
        </div>
        {isMobileFilterOpen && (
          <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-screen z-40">
            <div
              className="absolute bg-white top-0 bottom-0 right-0 -left-0 h-screen flex
                  justify-center items-center z-10 md:hidden text-primary-600 font-semibold"
            >
              <AiOutlineClose
                className="w-8 h-8 absolute top-8 right-8"
                onClick={() => setIsMobileFilterOpen(false)}
              />
              <div className="text-3xl flex justify-start items-start">
                <div className="flex flex-col items-start justify-start space-y-6">
                  <SideExplorer />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col h-full space-y-8 w-full">
          <div className="flex justify-between w-full space-x-8">
            <div className="w-full md:w-[250px]">
              <SearchBar />
            </div>
            <div
              className="hidden md:flex justify-between items-center bg-[#3c3c3c67] px-3 rounded-sm 
          text-sm space-x-2 text-gray-500 cursor-pointer"
            >
              <p>Lowest price</p>
              <IoIosArrowDown />
            </div>
            <IoFilter
              className="md:hidden w-8 h-8"
              onClick={() => setIsMobileFilterOpen(true)}
            />
          </div>

          {search ? (
            <GamesSearched />
          ) : genre ? (
            <CategoryExplorerContent />
          ) : (
            <GamesExplorerContent />
          )}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
