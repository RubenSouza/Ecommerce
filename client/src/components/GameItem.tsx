import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsCartCheck, BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/features/cart";
import { useEffect, useState } from "react";
import { setFavorite } from "../redux/features/favorites";
import { fetchFavorites } from "../utils/fetchFavorites";

type Props = {
  name: string;
  slug: string;
  cover: string;
  developer: string;
  price: number;
  id: string;
};

const GameItem = ({ name, cover, developer, slug, price, id }: Props) => {
  const [isInTheCart, setIsInTheCart] = useState(false);
  const [cartButton, setCartButton] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const cart = useSelector((state: any) => state.cart);
  const cartItems = cart.items;
  const favoritesItems = useSelector((state: any) => state.favorites);
  const favorites = favoritesItems?.favorites;

  const developerName = developer;

  const dispatch = useDispatch();

  useEffect(() => {
    const found = cartItems?.find((item: any) => item.id === id);
    const foundFavorite = favorites?.find((item: any) => item._id === id);
    if (found) {
      setIsInTheCart(true);
    } else {
      setIsInTheCart(false);
    }
    if (foundFavorite) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [cartItems, id, cartButton, favorites]);

  const handleAddToCart = () => {
    setCartButton(!cartButton);
    dispatch(addToCart({ name, id, price }));
  };

  const handleRemoveFromCart = () => {
    setCartButton(!cartButton);
    dispatch(removeFromCart(id));
  };

  const handleAddFavorite = () => {
    fetchFavorites(id);
    dispatch(setFavorite({ name, _id: id, price, cover, slug, developerName }));
  };

  return (
    <div className="min-w-[160px] w-full relative">
      <img
        src={cover}
        alt="game image"
        className="w-full max-h-[120px] h-[90px] sm:h-[100px] md:h-[120px]"
      />
      <div
        className="flex flex-col lg:flex-row justify-between items-start lg:justify-between bg-white 
      text-primary-600 p-2"
      >
        <div className={`flex flex-col w-[135px]`}>
          <Link to={`/game/${slug}`}>
            <h3 className="text-base font-semibold truncate ...">{name}</h3>
          </Link>
          <p className="invisible lg:visible text-xs text-gray-400 truncate ...">
            {developerName}
          </p>
        </div>
        <div className="flex lg:flex-col md:space-x-2 items-center lg:items-end lg:pt-2 w-[30px] ">
          {isFavorite ? (
            <AiFillHeart
              className="hidden md:inline w-5 h-5 text-red-700 cursor-pointer"
              onClick={handleAddFavorite}
            />
          ) : (
            <AiOutlineHeart
              className="hidden md:inline w-5 h-5 text-red-700 cursor-pointer"
              onClick={handleAddFavorite}
            />
          )}
          <div className="lg:pt-4 lg:pb-1 flex items-center space-x-1">
            <p
              className="bg-[#3CD3C1] rounded-md text-sm font-semibold 
            text-primary-50 h-8 flex items-center justify-center px-2"
            >
              {`R$${price.toFixed(2)}`}
            </p>
            {isInTheCart ? (
              <div
                className="bg-[#3CD3C1] hidden md:flex items-center justify-center
              w-8 h-8 hover:cursor-pointer rounded-md transition-colors duration-300 ease-in-out"
              >
                <BsCartCheck
                  className="w-5 h-5 text-primary-50"
                  onClick={handleRemoveFromCart}
                />
              </div>
            ) : (
              <div
                className="hidden md:flex items-center justify-center w-8 h-8 
              text-primary-50 bg-gradient-to-b from-[#FF5F5F] from-10% 
              via-[#F062C0] via-100% to-[#F23131] to-100% rounded-md
              hover:cursor-pointer transition duration-300 ease-in-out"
              >
                <BsCartPlus
                  className="w-5 h-5 text-primary-50"
                  onClick={handleAddToCart}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
