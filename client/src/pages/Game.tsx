import { AiOutlineHeart } from "react-icons/ai";

import { BsFillCartPlusFill } from "react-icons/bs";

import gameThumb from "../assets/gameThumb.svg";

import Thumb from "../components/Thumb";
import Carousel from "../components/Carousel";

const Game = () => {
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="h-[600px]">
        <img
          src="https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5.png"
          alt="game wallpaper"
          className="w-full absolute right-0 left-0 top-0 h-[600px] object-cover object-top"
        />
      </div>
      <div className="w-[1024px] flex justify-between">
        <h3 className="text-3xl font-semibold">CyberPunk 2077</h3>
        <div
          className="bg-primary-700 rounded-md shadow-md shadow-gray-800 flex flex-col
        justify-center items h-[170px] w-[400px] p-5 space-y-2 lg:absolute top-[550px] right-[380px]
        "
        >
          <p className="text-4xl font-semibold">R$ 199.99</p>
          <div className="m-auto w-full space-y-2 ">
            <div
              className="flex items-center justify-center
            rounded-md bg-[#f76195] h-12 w-full space-x-2 text-primary-50 font-semibold"
            >
              <BsFillCartPlusFill className="w-4 h-4" />
              <button>Adicionar</button>
            </div>
            <div className="flex justify-center space-x-2 text-[#f231a5] font-semibold w-full">
              <AiOutlineHeart className="w-6 h-6" />
              <p>Lista de desejos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
