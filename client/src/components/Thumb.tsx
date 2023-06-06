import gameThumb from "../assets/gameThumb.svg";
import badge from "../assets/badge.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const Thumb = () => {
  return (
    <div className="flex w-full h-full md:w-[1024px] items-center justify-center px-5 lg:px-0">
      <div className="w-full relative">
        <img src={gameThumb} alt="game thumb" className="rounded-md" />

        <div className="absolute top-6 -right-4 md:w-[150px] md:h-[50px]">
          <img
            src={badge}
            alt="badge"
            className="absolute top-0 md:w-[1024px] right-0 object-cover"
          />
        </div>
        <div
          className="bg-slate-950 md:absolute bottom-0 right-0 left-0 md:bg-primary-700/80 md:h-[170px] 
        h-[200px] px-10 pt-6 "
        >
          <div className="w-full ">
            <h3 className="text-xl font-bold">Desafie a morte</h3>
            <p className="pt-2">
              Jogue a nova temporada de{" "}
              <span className="text-pink-600 font-bold ">CrashLands</span>
            </p>
          </div>
          <div className="w-[150px] py-3">
            <Link to={"/game/12313344"}>
              <Button className="w-full h-[48px]" content="Buy Now" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumb;
