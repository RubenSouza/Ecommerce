import borderlands from "../assets/borderlands.svg";
import GameItem from "./gameItem";

const ComingSoon = () => {
  return (
    <div className="w-[1024px] h-full flex flex-col">
      <div className="flex space-x-2 py-2">
        <div className="bg-[#3CD3C1] h-8 w-1" />
        <h3 className="font-semibold text-2xl">Coming Soon</h3>
      </div>
      <div className="flex justify-between space-x-6 w-full py-6">
        <GameItem />
        <GameItem />
        <GameItem />
      </div>
      <div className="flex flex-col py-10">
        <img src={borderlands} className="w-[1024px]" />
        <div className="flex justify-between space-x-6 w-full pt-6">
          <GameItem />
          <GameItem />
          <GameItem />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
