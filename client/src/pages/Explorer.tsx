import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SearchBar from "../components/SearchBar";
import SideExplorer from "../components/SideExplorer";
import GameItem from "../components/GameItem";
import { IoFilter } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Explorer = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full px-5 md:w-[1400px] h-full flex">
        <div className="hidden md:inline flex-1 w-full">
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
        <div className="flex flex-col h-full space-y-8 ">
          <div className="flex justify-between w-full space-x-8">
            <div className="w-full md:w-[250px]">
              <SearchBar />
            </div>
            <div
              className="hidden md:flex justify-between items-center bg-[#3c3c3c67] px-3 rounded-sm 
          text-sm space-x-2 text-gray-500 cursor-pointer"
            >
              <p>Menor Preço</p>
              <IoIosArrowDown />
            </div>
            <IoFilter
              className="md:hidden w-8 h-8"
              onClick={() => setIsMobileFilterOpen(true)}
            />
          </div>

          <div
            className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 
          gap-5 md:gap-10
          lg:gap-x-10 lg:gap-y-5"
          >
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
