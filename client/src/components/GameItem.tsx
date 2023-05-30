import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  slug: string;
  cover: string;
  developer: string;
  price: number;
};

const GameItem = ({ name, cover, developer, slug, price }: Props) => {
  const developerName = developer;

  return (
    <div className="min-w-[160px] lg:w-[230px] relative">
      <img
        src={cover}
        alt="game image"
        className="w-full max-h-[120px] h-[90px] sm:h-[100px] md:h-[120px]"
      />
      <div
        className="flex flex-col lg:flex-row justify-between items-start lg:justify-between bg-white 
      text-primary-600 p-2"
      >
        <div className={`flex flex-col w-[140px]`}>
          <Link to={`/game/${slug}`}>
            <h3 className="text-base font-semibold truncate ...">{name}</h3>
          </Link>
          <p className="invisible lg:visible text-xs text-gray-400 truncate ...">
            {developerName}
          </p>
        </div>
        <div className="flex lg:flex-col md:space-x-2 items-center lg:items-end lg:pt-1 ">
          <AiOutlineHeart className="hidden md:inline w-5 h-5 text-red-700" />
          <div className="lg:pt-3 lg:pb-1 ">
            <p
              className="bg-[#3CD3C1] rounded-sm text-sm font-semibold 
            text-primary-50 p-1"
            >
              {`R$${price.toFixed(2)}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
