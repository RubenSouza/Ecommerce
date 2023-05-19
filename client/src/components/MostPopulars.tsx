import popularBadge from "../assets/popularBadge.svg";
import GameCarousel from "./GameCarousel";
import GameItem from "./GameItem";
import { Title } from "./Title";

const MostPopulars = () => {
  const games = [
    <GameItem />,
    <GameItem />,
    <GameItem />,
    <GameItem />,
    <GameItem />,
    <GameItem />,
    <GameItem />,
    <GameItem />,
  ];

  return (
    <div className="w-full  lg:w-[1024px] h-full flex flex-col">
      <div className="px-4 lg:px-0">
        <Title title="Most Populars" />
      </div>
      <div className="w-full py-2">
        <img src={popularBadge} className="w-full lg:w-[1024px]" />
      </div>
      <div
        className="flex justify-between w-full h-[240px] md:h-[270px] 
      px-4 lg:px-0"
      >
        <GameCarousel slides={games} />
      </div>
    </div>
  );
};

export default MostPopulars;
