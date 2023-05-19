import GameCarousel from "./GameCarousel";
import GameItem from "./GameItem";
import Highlight from "./Highlight";
import { Title } from "./Title";

function FreeGames() {
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
    <div className="w-full lg:w-[1024px] h-full flex flex-col">
      <div className="px-4 lg:px-0">
        <Title title="Free Games" />
      </div>
      <div
        className="flex justify-between space-x-6 w-full  px-4 lg:px-0
      h-[240px] md:h-[270px]"
      >
        <GameCarousel slides={games} />
      </div>
      <div className="flex flex-col py-4 ">
        <div className="py-4">
          <Highlight />
        </div>
        <div
          className="flex justify-between space-x-6 w-full  px-4 lg:px-0
      h-[240px] md:h-[270px]"
        >
          <GameCarousel slides={games} />
        </div>
      </div>
    </div>
  );
}

export default FreeGames;
