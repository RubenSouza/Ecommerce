import csgo from "../assets/csgo.svg";
import GameCarousel from "./GameCarousel";
import GameItem from "./GameItem";

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
      <div className="flex space-x-2 py-4 px-4 lg:px-0">
        <div className="bg-[#3CD3C1] h-8 w-1" />
        <h3 className="font-semibold text-2xl">Free Games</h3>
      </div>
      <div
        className="flex justify-between space-x-6 w-full  px-4 lg:px-0
      h-[240px] md:h-[270px]"
      >
        <GameCarousel slides={games} />
      </div>
      <div className="flex flex-col py-4 ">
        <div className="py-4">
          <img src={csgo} className="lg:w-[1024px]" />
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
