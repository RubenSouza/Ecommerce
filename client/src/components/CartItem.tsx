import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { useGetGameQuery } from "../redux/services/games";
import { removeFromCart, updateCartItemPrice } from "../redux/features/cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

type Props = {
  id: string;
};

const CartItem = ({ id }: Props) => {
  const {
    data: gameData,
    isLoading,
    isFetching,
    isError,
  } = useGetGameQuery({ gameId: id });

  const game = gameData?.game;

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  const cart = useSelector((state: any) => state.cart);

  useEffect(() => {
    const cartItem = cart.items.find((item: any) => item.id === id);
    const backendPrice = game?.price;

    if (cartItem && backendPrice && cartItem.price !== backendPrice) {
      // Atualize o preço no carrinho
      dispatch(updateCartItemPrice({ id, price: backendPrice }));
    }
  }, [cart.items, game?.price, dispatch, id]);

  return (
    <>
      <div className="flex h-[80px] space-x-2 w-full">
        <img
          src={game?.cover}
          alt="game Image"
          className="h-[80px] min-w-[130px] max-w-[130px] rounded-sm"
        />
        <div className="flex justify-between items-start w-full">
          <div className="space-y-2">
            <Link to={`/game/${game?.slug}`}>
              <h4 className="font-semibold">{game?.name}</h4>
            </Link>
            <p
              className="bg-[#3CD3C1] rounded-sm text-sm font-semibold 
            text-primary-100 w-[70px] p-1 flex items-center justify-center"
            >
              {`$${game?.price?.toFixed(2)}`}
            </p>
          </div>
          {/* <FaTrashAlt className="w-4 h-4" onClick={handleRemoveFromCart} /> */}
          <p
            className="text-button-100 text-[11px] font-light cursor-pointer h-full flex items-center justify-center"
            onClick={handleRemoveFromCart}
          >
            Remove
          </p>
        </div>
      </div>
      <div className="w-full h-[2px] bg-primary-460 my-16" />
    </>
  );
};

export default CartItem;
