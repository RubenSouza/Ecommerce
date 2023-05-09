import popularBadge from "../assets/popularBadge.svg";
import GameItem from "./gameItem";

const MostPopulars = () => {
  return (
    <div className="w-[1024px] h-full flex flex-col py-6">
      <div className="flex space-x-2 py-2">
        <div className="bg-[#3CD3C1] h-8 w-1" />
        <h3 className="font-semibold text-2xl">Most Populars</h3>
      </div>
      <div>
        <img src={popularBadge} className="w-[1024px]" />
      </div>
      <div className="flex justify-between py-6 space-x-6 w-full">
        <GameItem />
        <GameItem />
        <GameItem />
      </div>
    </div>
  );
};

export default MostPopulars;
