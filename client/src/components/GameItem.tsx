import { AiOutlineHeart } from "react-icons/ai";
import gameImage from "../assets/gameImage.svg";
import { Link } from "react-router-dom";

const GameItem = () => {
  return (
    <div className="min-w-[180px] lg:w-[230px] relative">
      <img src={gameImage} alt="game image" className="w-full" />
      <div
        className="flex flex-col lg:flex-row justify-between items-start lg:justify-between bg-white 
      text-primary-600 p-2"
      >
        <div className="flex flex-col">
          <Link to={"/game/120983"}>
            <h3 className="text-base font-semibold">Borderlands 3</h3>
          </Link>
          <p className="invisible lg:visible text-xs text-gray-400">
            Rockstar Games
          </p>
        </div>
        <div className="flex lg:flex-col md:space-x-2 items-center lg:items-end lg:pt-1 ">
          <AiOutlineHeart className="hidden md:inline w-5 h-5 text-red-700" />
          <div className="lg:pt-3 lg:pb-1 ">
            <p
              className="bg-[#3CD3C1] rounded-sm text-sm font-semibold 
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
