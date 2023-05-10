import csgo from "../assets/csgo.svg";
import GameItem from "./GameItem";

function FreeGames() {
  return (
    <div className="w-full lg:w-[1024px] h-full flex flex-col py-4">
      <div className="flex space-x-2 py-2 px-4 lg:px-0">
        <div className="bg-[#3CD3C1] h-8 w-1" />
        <h3 className="font-semibold text-2xl">Free Games</h3>
      </div>
      <div className="flex justify-between space-x-6 w-full py-4 px-4 lg:px-0">
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
      </div>
      <div className="flex flex-col py-4 ">
        <div className="py-4">
          <img src={csgo} className="lg:w-[1024px]" />
        </div>
        <div
          className="flex justify-between space-x-6 w-full py-4
        px-4 lg:px-0"
        >
          <GameItem />
          <GameItem />
          <GameItem />
          <GameItem />
        </div>
      </div>
    </div>
  );
}

export default FreeGames;
