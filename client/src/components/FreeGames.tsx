import csgo from "../assets/csgo.svg";
import GameItem from "./gameItem";

function FreeGames() {
  return (
    <div className="w-[1024px] h-full flex flex-col py-6">
      <div className="flex space-x-2 py-2">
        <div className="bg-[#3CD3C1] h-8 w-1" />
        <h3 className="font-semibold text-2xl">Free Games</h3>
      </div>
      <div className="flex justify-between space-x-6 w-full py-6">
        <GameItem />
        <GameItem />
        <GameItem />
      </div>
      <div className="flex flex-col py-10">
        <img src={csgo} className="w-[1024px]" />
        <div className="flex justify-between space-x-6 w-full py-6">
          <GameItem />
          <GameItem />
          <GameItem />
        </div>
      </div>
    </div>
  );
}

export default FreeGames;
