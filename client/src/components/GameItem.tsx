import { AiOutlineHeart } from "react-icons/ai";
import gameImage from "../assets/gameImage.svg";

const GameItem = () => {
  return (
    <div className="w-[280px] h-[220px]">
      <img src={gameImage} alt="game image" />
      <div
        className="flex w-full items-start justify-between bg-white 
      text-primary-600 px-4 py-2"
      >
        <div className="flex flex-col">
          <h3 className="text-base font-semibold">Population Zero</h3>
          <p className="text-xs text-gray-400">Rockstar Games</p>
        </div>
        <div className="flex flex-col items-end pt-1">
          <AiOutlineHeart className="w-5 h-5 text-red-700" />
          <div className="pt-3 pb-1 ">
            <p
              className="bg-[#3CD3C1] rounded-sm text-sm font-bold 
            text-primary-50 p-1"
            >
              R$215,00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
