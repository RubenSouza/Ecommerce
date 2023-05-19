import { Link } from "react-router-dom";
import gameImage from "../assets/gameImage.svg";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = () => {
  return (
    <div className="flex h-[80px] space-x-2 w-full">
      <img src={gameImage} alt="game Image" className="h-[80px] rounded-sm" />
      <div className="flex justify-between items-start w-full">
        <div className="space-y-2">
          <Link to={"/game/123094"}>
            <h4 className="font-semibold">Borderlands 3</h4>
          </Link>
          <p
            className="bg-[#3CD3C1] rounded-sm text-xs font-semibold 
            text-primary-100 w-[70px] p-1 "
          >
            R$215,00
          </p>
        </div>
        <div className="cursor-pointer">
          <FaTrashAlt className="w-5 h-5 " />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
