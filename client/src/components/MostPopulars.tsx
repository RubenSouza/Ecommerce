import PopularBanner from "./PopularBanner";
import { Title } from "./Title";

const MostPopulars = () => {
  // const games = [
  //   <GameItem />,
  //   <GameItem />,
  //   <GameItem />,
  //   <GameItem />,
  //   <GameItem />,
  //   <GameItem />,
  //   <GameItem />,
  //   <GameItem />,
  // ];

  return (
    <div className="w-full  lg:w-[1024px] h-full flex flex-col">
      <div className="px-4 lg:px-0">
        <Title title="Most Populars" />
      </div>
      <div className="w-full py-4">
        {/* <img src={popularBadge} className="w-full lg:w-[1024px]" /> */}
        <PopularBanner
          src="https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
          alt="Cyberpunk 2077"
          title="Cyberpunk 2077"
          link="http://localhost:5173/game/cyberpunk-2077"
        />
      </div>
      <div
        className="flex justify-between w-full h-[240px] md:h-[270px] 
      px-4 lg:px-0"
      >
        {/* <GameCarousel slides={games} /> */}
      </div>
    </div>
  );
};

export default MostPopulars;
