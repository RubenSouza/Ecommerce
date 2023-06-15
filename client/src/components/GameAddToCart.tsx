import { useEffect, useState } from "react";
import { BsCartCheck, BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/cart";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  price: number;
};

const GameAddToCart = ({ id, name, price }: Props) => {
  const [isInTheCart, setIsInTheCart] = useState(false);
  const cart = useSelector((state: any) => state.cart);
  const cartItems = cart.items;

  const dispatch = useDispatch();

  useEffect(() => {
    const found = cartItems.find((item: any) => item.id === id);
    if (found) {
      setIsInTheCart(true);
    } else {
      setIsInTheCart(false);
    }
  }, [cartItems, id]);

  const handleAddToCart = () => {
    dispatch(addToCart({ name, id, price }));
  };

  return (
    <div>
      {isInTheCart ? (
        <Link to={"/cart"}>
          <div
            className="flex items-center justify-center
        rounded-md bg-button-100 hover:bg-button-100/90 h-12 
        w-full space-x-2 text-primary-50 font-semibold cursor-pointer"
          >
            <BsCartCheck className="w-5 h-5 text-primary-50" />
            <p>Check out now</p>
          </div>
        </Link>
      ) : (
        <div
          className="flex items-center justify-center
        rounded-md bg-button-100 hover:bg-button-100/90 h-12 
        w-full space-x-2 text-primary-50 font-semibold cursor-pointer"
          onClick={handleAddToCart}
        >
          <BsFillCartPlusFill className="w-4 h-4" />
          <p>Add to Cart</p>
        </div>
      )}
    </div>
  );
};

export default GameAddToCart;
