import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SearchBar from "../components/SearchBar";
import SideExplorer from "../components/SideExplorer";
import GameItem from "../components/GameItem";
import { IoFilter } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useGetGamesQuery } from "../redux/services/games";
import Loading from "../components/Loading";
import Paginate from "../components/Paginate";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Explorer = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const page = useSelector((state: any) => state.paginate.page);

  const {
    data: games,
    isLoading,
    isError,
  } = useGetGamesQuery({ pageId: page });

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

  if (isLoading) return <Loading />;

  return (
    <div className="w-full h-full flex justify-center py-10">
      <div className="w-full px-5 md:w-[1400px] h-full flex">
        <div className="hidden md:inline w-[300px]">
          <SideExplorer />
        </div>
        {isMobileFilterOpen && (
          <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-screen z-40">
            <div
              className="absolute bg-white top-0 bottom-0 right-0 -left-0 h-screen flex
                  justify-center items-center z-10 md:hidden text-primary-600 font-semibold"
            >
              <AiOutlineClose
                className="w-8 h-8 absolute top-8 right-8"
                onClick={() => setIsMobileFilterOpen(false)}
              />
              <div className="text-3xl flex justify-start items-start">
                <div className="flex flex-col items-start justify-start space-y-6">
                  <SideExplorer />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col h-full space-y-8 ">
          <div className="flex justify-between w-full space-x-8">
            <div className="w-full md:w-[250px]">
              <SearchBar />
            </div>
            <div
              className="hidden md:flex justify-between items-center bg-[#3c3c3c67] px-3 rounded-sm 
          text-sm space-x-2 text-gray-500 cursor-pointer"
            >
              <p>Lowest price</p>
              <IoIosArrowDown />
            </div>
            <IoFilter
              className="md:hidden w-8 h-8"
              onClick={() => setIsMobileFilterOpen(true)}
            />
          </div>

          <div className="flex flex-col items-center space-y-4 w-full h-full">
            <div
              className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
          gap-4 md:gap-10
          lg:gap-x-5 xl:gap-x-10 lg:gap-y-5"
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
        </div>
      </div>
    </div>
  );
};

export default Explorer;
