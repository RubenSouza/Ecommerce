import GameItem from "./GameItem";
import GameCarousel from "./GameCarousel";
import { Title } from "./Title";
import { useGetPublisherGamesQuery } from "../redux/services/games";
import ScreenLoading from "./ScreenLoading";

type Props = {
  title: string;
  publisherId: string;
};

const PublisherSection = ({ publisherId, title }: Props) => {
  const {
    data: gamesData,
    isLoading,
    isFetching,
    isError,
  } = useGetPublisherGamesQuery({ publisherId });

  if (isLoading || isFetching) return <ScreenLoading />;

  const games = gamesData?.publisher?.games?.slice(0, 10);

  const gamesList = games?.map((game: any) => (
    <GameItem
      cover={game?.cover}
      developer={game?.publishers?.[0]?.name}
      name={game?.name}
      price={game?.price}
      slug={game?.slug}
      key={game?._id}
      id={game?._id}
    />
  ));

  return (
    <div className="w-full px-4 xl:px-0 lg:w-[1024px] h-full flex flex-col">
      <Title title={title} />
      <div className="flex justify-between w-full h-[250px] md:h-[300px]">
        {gamesList && <GameCarousel slides={gamesList} />}
      </div>
    </div>
  );
};

export default PublisherSection;
