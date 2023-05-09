import { IoIosArrowDown } from "react-icons/io";
import SearchBar from "../components/SearchBar";
import SideExplorer from "../components/SideExplorer";
import GameItem from "../components/gameItem";

const Explorer = () => {
  return (
    <div className="px-20 w-full h-full flex">
      <div className="flex-1 w-full ">
        <SideExplorer />
      </div>
      <div className="flex flex-col h-full w-full px-40 space-y-8">
        <div className="flex justify-between w-full">
          <SearchBar />
          <div className="flex justify-center items-center bg-[#232323] px-4 rounded-md">
            <p>Menor Preço</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10">
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
  );
};

export default Explorer;
