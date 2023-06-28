import GameItem from "../components/GameItem";
import { Title } from "../components/Title";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import ScreenLoading from "../components/ScreenLoading";

const Favorites = () => {
  const favoritesList = useSelector((state: any) => state.favorites.favorites);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <ScreenLoading />;

  return (
    <div className="flex flex-col items-center py-10 px-5">
      <div className="absolute -top-20 h-2" ref={favoritesRef} />
      <div className="w-full max-w-[1400px] h-full flex">
        <div className="w-full space-y-4">
          <Title title="Favorites" />
          <div
            className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
            lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-5 xl:gap-x-0"
          >
            {favorites}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
