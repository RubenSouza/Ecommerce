import { useGetGamesQuery } from "../redux/services/games";
import { useSelector } from "react-redux";
import { useEffect } from "react";
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
    isError,
  } = useGetGamesQuery({ pageId: page, sort: sort, price });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  }, [games]);

  if (isLoading || isFetching) return <ComponentLoading />;

  return (
    <div className="flex flex-col items-center space-y-4 w-full h-full">
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