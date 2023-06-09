import GameItem from "./GameItem";
import GameCarousel from "./GameCarousel";
import { Title } from "./Title";
import { useGetGamesQuery } from "../redux/services/games";

const Releases = () => {
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

  return (
    <div className="w-full px-4 xl:px-0 lg:w-[1024px] h-full flex flex-col">
      <Title title="New Releases" />
      <div className="flex justify-between w-full h-[250px] md:h-[300px]">
        {gamesList && <GameCarousel slides={gamesList} />}
      </div>
    </div>
  );
};

export default Releases;
