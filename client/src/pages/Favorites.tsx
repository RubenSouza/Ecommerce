import GameItem from "../components/GameItem";
import popularBadge from "../assets/popularBadge.svg";
import { Title } from "../components/Title";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const Favorites = () => {
  const favoritesList = useSelector((state: any) => state.favorites.favorites);

  const favorites = favoritesList?.map((game: any) => (
    <GameItem
      key={game?._id}
      name={game?.name}
      cover={game?.cover}
      developer={game?.developers?.[0]?.name}
      id={game?._id}
      price={game?.price}
      slug={game?.slug}
    />
  ));

  const favoritesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToStart = () => {
      if (favoritesRef.current) {
        favoritesRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToStart();
  }, []);

  return (
    <div className="flex flex-col items-center py-10">
      <div className="absolute -top-20 h-2" ref={favoritesRef} />
      <div className="w-full xl:w-[1400px] px-5 ">
        <div className="w-full space-y-4">
          <Title title="Favorites" />
          <div
            className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 
            xl:grid-cols-5 gap-5 md:gap-10 lg:gap-x-10 lg:gap-y-5"
          >
            {favorites}
          </div>
        </div>
        <div className="w-full h-[2px] bg-primary-460 my-16" />
        {/* <div className="w-full space-y-4">
          <Title title="You may also like" />
          <div className="w-full">
            <img src={popularBadge} className="w-full" />
          </div>
          <div>
            <div
              className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4
              xl:grid-cols-5 gap-5 md:gap-10 lg:gap-x-10 lg:gap-y-5"
            >
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Favorites;
