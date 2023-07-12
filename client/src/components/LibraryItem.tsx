import { BsInfoSquareFill } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  slug: string;
  cover: string;
  id: string;
};

const LibraryItem = ({ cover, slug, name }: Props) => {
  return (
    <div className="min-w-[160px] w-full max-w-[240px] relative">
      <img
        src={cover}
        alt="game image"
        className="w-full max-h-[120px] h-[90px] sm:h-[100px] md:h-[120px]"
      />
      <div
        className="flex w-full flex-col justify-between items-start  
        bg-white text-primary-600 p-1"
      >
        <div className="w-full h-[70px] max-h-[70px] px-1">
          <Link to={`/game/${slug}`}>
            <h3 className="w-full h-full font-semibold">{name}</h3>
          </Link>
        </div>
      </div>
      <div className="h-full w-full z-40">
        <div
          className="w-full h-full bg-primary-600 opacity-0 hover:opacity-80 
        transition-all duration-300 absolute top-0 left-0 flex justify-center 
        items-center"
        >
          <div className="flex space-x-3">
            <Link to={`/game/${slug}`}>
              <div className="w-full h-full flex justify-center items-center">
                <MdOutlineFileDownload className="w-8 h-8 hover:text-[#F7AB0A]" />
              </div>
            </Link>
            <Link to={`/game/${slug}`}>
              <div className="w-full h-full flex justify-center items-center">
                <BsInfoSquareFill className="w-6 h-6 hover:text-[#F7AB0A]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryItem;
