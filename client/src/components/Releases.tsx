import GameItem from "./GameItem";

const Releases = () => {
  return (
    <div className="w-full px-4 lg:px-0 lg:w-[1024px] h-full flex flex-col lg:py-4">
      <div className="flex space-x-2 py-2">
        <div className="bg-[#3CD3C1] h-8 w-1" />
        <h3 className="font-semibold text-2xl">New Releases</h3>
      </div>
      <div className="flex justify-between space-x-6 w-full py-4">
        <GameItem />
        <GameItem />
        <GameItem />
        <GameItem />
      </div>
    </div>
  );
};

export default Releases;
