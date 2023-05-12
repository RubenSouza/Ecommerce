import GameItem from "./GameItem";
import GameCarousel from "./GameCarousel";

const Releases = () => {
  const games = [
    <GameItem />,
    <GameItem />,
    <GameItem />,
    <GameItem />,
    <GameItem />,
    <GameItem />,
    <GameItem />,
  ];

  return (
    <div className="w-full px-4 lg:px-0 lg:w-[1024px] h-full flex flex-col">
      <div className="flex space-x-2 py-2">
        <div className="bg-[#3CD3C1] h-8 w-1" />
        <h3 className="font-semibold text-2xl">New Releases</h3>
      </div>
      <div className="flex justify-between w-full h-[240px] md:h-[270px]">
        <GameCarousel slides={games} />
      </div>
    </div>
  );
};

export default Releases;
