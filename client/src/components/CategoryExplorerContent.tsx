import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import GameItem from "../components/GameItem";
import Paginate from "../components/Paginate";
import { useGetCategoryGamesQuery } from "../redux/services/games";
import ComponentLoading from "./ComponentLoading";

const CategoryExplorerContent = () => {
  const page = useSelector((state: any) => state.querys.page);
  const sort = useSelector((state: any) => state.querys.sort);
  const genre = useSelector((state: any) => state.querys.genre);
  const price = useSelector((state: any) => state.querys.price);

  const {
    data: games,
    isLoading,
    isFetching,
  } = useGetCategoryGamesQuery({
    categoryId: genre,
    pageId: page,
    sort: sort,
    price,
  });

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
      <div className="absolute -top-20 h-2" ref={explorerRef} />
      <div
        className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
  gap-4 md:gap-10 lg:gap-x-5 xl:gap-x-10 lg:gap-y-5"
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
        {games && games?.games?.totalPages > 1 && !isLoading && (
          <Paginate totalPages={games?.games?.totalPages} />
        )}
      </div>
    </div>
  );
};

export default CategoryExplorerContent;
