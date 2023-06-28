import { useGetGamesQuery } from "../redux/services/games";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import GameItem from "../components/GameItem";
import Paginate from "../components/Paginate";
import ComponentLoading from "./ComponentLoading";

const GamesExplorerContent = () => {
  const page = useSelector((state: any) => state.querys.page);
  const sort = useSelector((state: any) => state.querys.sort);
  const price = useSelector((state: any) => state.querys.price);

  const {
    data: games,
    isLoading,
    isFetching,
  } = useGetGamesQuery({ pageId: page, sort: sort, price });

  const explorerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToStart = () => {
      if (explorerRef.current) {
        explorerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToStart();
  }, [games]);
  if (isLoading || isFetching) return <ComponentLoading />;

  return (
    <div className="flex flex-col items-center space-y-4 w-full h-full">
      <div className="absolute -top-20 h-2" ref={explorerRef}></div>
      <div
        className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4
        gap-4"
      >
        {games?.games?.docs.map((game: any) => (
          <GameItem
            name={game?.name}
            cover={game?.cover}
            price={game?.price}
            developer={game?.developers?.[0]?.name}
            key={game?._id}
            slug={game?.slug}
            id={game?._id}
          />
        ))}
      </div>
      <div className="h-[50px]">
        {games && <Paginate totalPages={games?.games?.totalPages} />}
      </div>
    </div>
  );
};

export default GamesExplorerContent;
