import popularBadge from "../assets/popularBadge.svg";
import GameItem from "./GameItem";

const MostPopulars = () => {
  return (
    <div className="w-full  lg:w-[1024px] h-full flex flex-col lg:py-4">
      <div className="flex space-x-2 py-2 px-4 lg:px-0">
        <div className="bg-[#3CD3C1] h-8 w-1" />
        <h3 className="font-semibold text-2xl">Most Populars</h3>
      </div>
      <div className="w-full py-6">
        <img src={popularBadge} className="w-full lg:w-[1024px]" />
      </div>
      <div className="flex justify-between py-4 space-x-6 w-full px-4 lg:px-0">
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
      </div>
    </div>
  );
};

export default MostPopulars;
