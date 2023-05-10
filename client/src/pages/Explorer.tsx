import { IoIosArrowDown } from "react-icons/io";
import SearchBar from "../components/SearchBar";
import SideExplorer from "../components/SideExplorer";
import GameItem from "../components/GameItem";

const Explorer = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1400px] h-full flex ">
        <div className="flex-1 w-full">
          <SideExplorer />
        </div>
        <div className="flex flex-col h-full space-y-8 ">
          <div className="flex justify-between w-full ">
            <SearchBar />
            <div
              className="flex justify-between items-center bg-[#3c3c3c67] px-3 rounded-sm 
          text-sm space-x-2 text-gray-500 cursor-pointer"
            >
              <p>Menor Preço</p>
              <IoIosArrowDown />
            </div>
          </div>
          <div className="w-full grid grid-cols-4 gap-x-10 gap-y-5">
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
