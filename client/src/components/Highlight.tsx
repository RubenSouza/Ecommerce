import { Link } from "react-router-dom";
import csBackground from "../assets/csBackground.svg";
import Button from "./Button";

const Highlight = () => {
  return (
    <div className="w-full relative">
      <img src={csBackground} alt="gameHighlight" className="w-full" />
      <div className="relative">
        <div
          className="bg-slate-950 md:absolute lg:bg-transparent bottom-10 right-0 md:h-[170px] 
        h-[200px] px-10 pt-6 flex md:items-end flex-col"
        >
          <h3 className="text-xl md:text-3xl font-bold">
            You know the classic CS:GO?
          </h3>
          <p className="pt-2 text-xs">
            Play one of the most classic games of FPS of all the times
          </p>
          <div className="w-[150px] py-3 ">
            <Link to={"/game/12313344"}>
              <Button className="w-full h-[48px]" content="Buy Now" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
