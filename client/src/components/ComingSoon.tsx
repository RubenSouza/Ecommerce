import borderlands from "../assets/borderlands.svg";
import GameItem from "./GameItem";

const ComingSoon = () => {
  return (
    <div className="w-full lg:w-[1024px] h-full flex flex-col lg:py-4">
      <div className="flex px-4 lg:px-0 space-x-2 py-2">
        <div className="bg-[#3CD3C1] h-8 w-1" />
        <h3 className="font-semibold text-2xl">Coming Soon</h3>
      </div>
      <div className="flex px-4 lg:px-0 justify-between space-x-6 w-full py-4">
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
      </div>
      <div className="flex flex-col py-4">
        <div className="py-4">
          <img
            src={borderlands}
            className="w-full lg:w-[1024px]"
            alt="game highlight"
          />
        </div>
        <div className="flex px-4 lg:px-0 justify-between space-x-6 w-full py-4">
          <GameItem />
          <GameItem />
          <GameItem />
          <GameItem />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
