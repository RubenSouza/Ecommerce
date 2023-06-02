import GameItem from "./GameItem";
import GameCarousel from "./GameCarousel";
import { Title } from "./Title";

const Releases = () => {
  const games = [
    // <GameItem />,
    // <GameItem />,
    // <GameItem />,
    // <GameItem />,
    // <GameItem />,
    // <GameItem />,
    // <GameItem />,
  ];

  return (
    <div className="w-full px-4 lg:px-0 lg:w-[1024px] h-full flex flex-col">
      <Title title="New Releases" />
      <div className="flex justify-between w-full h-[240px] md:h-[270px]">
        {/* <GameCarousel slides={games} /> */}
      </div>
    </div>
  );
};

export default Releases;
