import GameItem from "./GameItem";
import GameCarousel from "./GameCarousel";
import { Title } from "./Title";
import { useGetGamesQuery } from "../redux/services/games";
import { useState } from "react";

const Releases = () => {
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  const handleSlideChange = (swiper: any) => {
    setShowPrevButton(!swiper.isBeginning);
    setShowNextButton(!swiper.isEnd);
  };

  const { data: gamesData } = useGetGamesQuery({
    pageId: 1,
    sort: "release-date",
    price: "",
  });

  const games = gamesData?.games.docs.slice(0, 10);

  const gamesList = games?.map((game: any) => (
    <GameItem
      cover={game?.cover}
      developer={game?.developers?.[0]?.name}
      name={game?.name}
      price={game?.price}
      slug={game?.slug}
      key={game?._id}
      id={game?._id}
    />
  ));

  const navId = "nav-releases";

  const isMobile = window.innerWidth < 800;

  return (
    <div
      className="w-full px-4 xl:px-0 lg:max-w-[1400px] h-full 
    flex items-center flex-col
    "
    >
      <div className="w-full lg:w-[1024px] ">
        <Title title="New Releases" />
      </div>
      <div
        className="flex justify-between items-start h-[250px] w-full md:h-[300px]
        "
      >
        {!isMobile && (
          <div
            className={`swiper-button-prev relative ${navId}   ${
              showPrevButton ? "visible" : "invisible"
            }`}
          />
        )}
        <div className="w-full lg:w-[1024px] h-full">
          {gamesList && (
            <GameCarousel
              slides={gamesList}
              navId={navId}
              onSlideChange={handleSlideChange}
            />
          )}
        </div>
        {!isMobile && (
          <div
            className={`swiper-button-next relative ${navId}  ${
              showNextButton ? "visible" : "invisible"
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default Releases;
