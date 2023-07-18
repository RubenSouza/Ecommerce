import { Title } from "../components/Title";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import ScreenLoading from "../components/ScreenLoading";
import { useGetOrdersGamesQuery } from "../redux/services/games";
import Paginate from "../components/Paginate";
import LibraryItem from "../components/LibraryItem";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const page = useSelector((state: any) => state.querys.page);
  const user = useSelector((state: any) => state.userLogged.user);
  const navigate = useNavigate();

  const { data: gameData, isLoading } = useGetOrdersGamesQuery({
    pageId: page,
  });

  const games = gameData?.games?.map((game: any) => (
    <LibraryItem
      key={game?._id}
      name={game?.name}
      cover={game?.cover}
      id={game?._id}
      slug={game?.slug}
    />
  ));

  const libraryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToStart = () => {
      if (libraryRef.current) {
        libraryRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToStart();
  }, [games]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  if (isLoading) return <ScreenLoading />;

  return (
    <div className="flex flex-col items-center space-y-4 py-10 px-5">
      <div className="absolute -top-20 h-2" ref={libraryRef} />
      <div className="w-full max-w-[1400px] h-full flex">
        <div className="w-full space-y-4">
          <Title title="My games" />
          <div
            className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                  lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-5 xl:gap-x-0"
          >
            {games}
          </div>
        </div>
      </div>
      <div className="h-[50px]">
        {games && gameData?.totalPages > 1 && !isLoading && (
          <Paginate totalPages={gameData?.totalPages} />
        )}
      </div>
    </div>
  );
};

export default Library;
