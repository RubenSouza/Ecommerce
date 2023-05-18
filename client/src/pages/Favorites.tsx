import GameItem from "../components/GameItem";
import popularBadge from "../assets/popularBadge.svg";

const Favorites = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full lg:w-[1400px] px-5">
        <div className="w-full space-y-4 ">
          <div className="flex space-x-2 lg:px-0">
            <div className="bg-[#3CD3C1] h-8 w-1" />
            <h3 className="text-2xl font-semibold">Favorites</h3>
          </div>
          <div
            className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 
            xl:grid-cols-5 gap-5 md:gap-10 lg:gap-x-10 lg:gap-y-5"
          >
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
          </div>
        </div>
        <div className="w-full py-10 space-y-4">
          <div className="flex space-x-2 lg:px-0">
            <div className="bg-[#3CD3C1] h-8 w-1" />
            <h3 className="text-2xl font-semibold">You may also like</h3>
          </div>
          <div className="w-full">
            <img src={popularBadge} className="w-full" />
          </div>
          <div>
            <div
              className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4
              xl:grid-cols-5 gap-5 md:gap-10 lg:gap-x-10 lg:gap-y-5"
            >
              <GameItem />
              <GameItem />
              <GameItem />
              <GameItem />
              <GameItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
