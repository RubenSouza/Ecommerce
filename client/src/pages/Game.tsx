import { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import GalleryCarousel from "../components/GalleryCarousel";
import GameItem from "../components/GameItem";
import GameCarousel from "../components/GameCarousel";
import popularBadge from "../assets/popularBadge.svg";
import { Title } from "../components/Title";
import { useParams } from "react-router-dom";
import {
  useGetCategoryGamesQuery,
  useGetGameQuery,
} from "../redux/services/games";
import ScreenLoading from "../components/ScreenLoading";
import { useSelector } from "react-redux";

const Game = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const page = useSelector((state: any) => state.paginate.page);
  const sort = useSelector((state: any) => state.paginate.sort);

  const {
    data: gameData,
    isLoading,
    isFetching,
    isError,
  } = useGetGameQuery({ gameId: id });

  const relatedCategory =
    gameData?.game?.categories?.[1]?._id ||
    gameData?.game?.categories?.[0]?._id ||
    "action";

  const {
    data: relatedGamesData,
    isLoading: relatedGamesIsLoading,
    isFetching: relatedGamesIsFetching,
    isError: relatedGamesIsError,
  } = useGetCategoryGamesQuery({
    categoryId: relatedCategory,
    pageId: page,
    sort,
  });

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
  }, [gameData]);

  const relatedGamesList = relatedGamesData?.games?.docs?.slice(0, 8);

  if (
    isLoading ||
    isFetching ||
    relatedGamesIsLoading ||
    relatedGamesIsFetching
  )
    return <ScreenLoading />;

  const game = gameData?.game;

  const minimunRequirement = game?.system_requirements?.minimum;
  const recommendedRequirement = game?.system_requirements?.recommended;

  const firstGenre = game?.categories?.[0]?.name;
  const secondGenre = game?.categories?.[1]?.name;

  const firstDeveloper = game?.developers?.[0]?.name;
  const secondDeveloper = game?.developers?.[1]?.name;

  const firstPublisher = game?.publishers?.[0]?.name;
  const secondPublisher = game?.publishers?.[1]?.name;

  const dateString = game?.release_date;
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const gallery = game?.gallery?.map((image: string) => (
    <img src={image} alt="game screenshot" className="w-full max-w-[1200px]" />
  ));

  const relatedGames = relatedGamesList?.map((game: any) => (
    <GameItem
      name={game?.name}
      cover={game?.cover}
      price={game?.price}
      developer={game?.developers?.[0].name}
      key={game?._id}
      slug={game?.slug}
    />
  ));

  return (
    <div className="w-screen flex flex-col items-center py-10">
      <div className="w-full lg:h-[600px] h-[400px]">
        <img
          src={game?.cover}
          alt="game wallpaper"
          className="w-full absolute right-0 left-0 top-0 h-[400px] lg:h-[600px] 
          object-cover object-top"
        />
      </div>
      <div
        className="w-full lg:w-[1100px] flex flex-col 
      md:flex-row justify-between px-4 xl:px-0 space-y-4 md:-space-y-4"
      >
        <h3 className="text-3xl font-semibold md:py-8 lg:py-0 w-[400px] flex-wrap">
          {game?.name}
        </h3>
        <div
          className="bg-primary-700 rounded-md shadow-md shadow-gray-800 flex flex-col
        justify-center items h-[170px] w-full sm:w-[450px] p-5 space-y-2 lg:absolute 
        lg:top-[550px] md:right-[5%] 2xl:right-[390px]
        "
        >
          <p className="text-4xl font-semibold">{`$${game?.price.toFixed(
            2
          )}`}</p>
          <div className="m-auto w-full space-y-2 ">
            <div
              className="flex items-center justify-center
            rounded-md bg-[#f76195] h-12 w-full space-x-2 text-primary-50 font-semibold"
            >
              <BsFillCartPlusFill className="w-4 h-4" />
              <button>Add to Cart</button>
            </div>
            <div className="flex justify-center space-x-2 text-[#f231a5] font-semibold w-full">
              <AiOutlineHeart className="w-6 h-6" />
              <p>Wishlist it</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:px-2 xl:w-[1100px] h-[210px] lg:h-[270px] my-8">
        {gallery && <GalleryCarousel slides={gallery} />}
      </div>
      <div
        className="w-full xl:w-[1100px] px-4 xl:px-0 space-y-5 lg:space-y-0
      flex flex-col lg:flex-row justify-between text-base"
      >
        <div className="w-full lg:w-[600px] space-y-8">
          <div className="space-y-5">
            <Title title="Description" />
            <p className="text-base font-light">{game?.description}</p>
          </div>
          {minimunRequirement && (
            <div className="space-y-5 w-full text-sm">
              <Title title="System requirements" />
              <div
                className="w-full flex flex-col lg:flex-row  justify-between lg:space-x-10
              space-y-10 lg:space-y-0"
              >
                <div className="space-y-2 w-[300px]">
                  <h4 className="font-bold">MÍNIMOS</h4>
                  <div className="space-x-2">
                    <p className="inline font-bold">OS:</p>
                    <p className="inline">{minimunRequirement?.os}</p>
                  </div>
                  <div className="space-x-2">
                    <p className="inline font-bold">CPU:</p>
                    <p className="inline">{minimunRequirement?.processor}</p>
                  </div>
                  <div className="space-x-2">
                    <p className="inline font-bold">RAM:</p>
                    <p className="inline">{minimunRequirement?.memory}</p>
                  </div>
                  <div className="space-x-2">
                    <p className="inline font-bold">GPU:</p>
                    <p className="inline">{minimunRequirement?.graphics}</p>
                  </div>
                  <div className="space-x-2">
                    <p className="inline font-bold">Direct X:</p>
                    <p className="inline">{minimunRequirement?.directx}</p>
                  </div>
                  <div className="space-x-2">
                    <p className="inline font-bold">Available Storage Space:</p>
                    <p className="inline">{minimunRequirement?.storage}</p>
                  </div>
                </div>
                {recommendedRequirement && (
                  <div className="space-y-2 w-[300px]">
                    <h4 className="font-bold">RECOMENDADOS</h4>
                    <div className="space-x-2">
                      <p className="inline font-bold">OS:</p>
                      <p className="inline">{recommendedRequirement?.os}</p>
                    </div>
                    <div className="space-x-2">
                      <p className="inline font-bold">CPU:</p>
                      <p className="inline">
                        {recommendedRequirement?.processor}
                      </p>
                    </div>
                    <div className="space-x-2">
                      <p className="inline font-bold">RAM:</p>
                      <p className="inline">{recommendedRequirement?.memory}</p>
                    </div>
                    <div className="space-x-2">
                      <p className="inline font-bold">GPU:</p>
                      <p className="inline">
                        {recommendedRequirement?.graphics}
                      </p>
                    </div>
                    <div className="space-x-2">
                      <p className="inline font-bold">Direct X:</p>
                      <p className="inline">
                        {recommendedRequirement?.directx}
                      </p>
                    </div>

                    <div className="space-x-2">
                      <p className="inline font-bold">
                        Available Storage Space:
                      </p>
                      <p className="inline">
                        {recommendedRequirement?.storage}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex w-[330px] md:px-0 lg:px-4 flex-col space-y-4 font-light text-md">
          <div className="flex space-x-2">
            <div className="bg-[#3CD3C1] h-8 w-1" />
            <h3 className="text-2xl font-semibold">About</h3>
          </div>
          <div className="flex justify-between">
            <p className="">Genre:</p>
            <p className="">{`${firstGenre}, ${secondGenre || ""}`}</p>
          </div>

          <div className="flex justify-between">
            <p className="">Release date:</p>
            <p className="">{formattedDate}</p>
          </div>
          <div className="flex justify-between">
            <p className="">Developer:</p>
            <div className="flex flex-col items-end">
              <p className="">{firstDeveloper}</p>
              <p className="">{secondDeveloper}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="">Company:</p>
            <div className="flex flex-col items-end">
              <p className="">{firstPublisher}</p>
              <p className="">{secondPublisher}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[1100px] py-10 space-y-4">
        <div className="px-4 xl:px-0">
          <Title title="You may also like" />
        </div>
        <div className="w-full">
          <img src={popularBadge} className="w-full lg:w-[1100px]" />
        </div>
        <div
          className="flex justify-between w-full h-[240px] md:h-[270px] 
  px-4 lg:px-0"
        >
          {relatedGames && <GameCarousel slides={relatedGames} />}
        </div>
      </div>
    </div>
  );
};

export default Game;
