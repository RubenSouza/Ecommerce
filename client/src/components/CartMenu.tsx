import { useSelector } from "react-redux";
import CartMenuItem from "./CartMenuItem";
import Button from "./Button";
import { Link } from "react-router-dom";
import { BsCartX } from "react-icons/bs";
import CartMenuLoading from "./CartMenuLoading";

const CartMenu = () => {
  const cart = useSelector((state: any) => state.cart);
  const totalPrice = cart.totalPrice;
  const cartItems = cart.items.map((item: any) => (
    <CartMenuItem id={item.id} key={item.id} />
  ));
  const isLoading = useSelector((state: any) => state.cartMenuLoading.loading);

  return (
    <div
      className="absolute top-6 -right-2 lg:-right-12 flex items-center 
      w-[350px] min-h-[100px] max-h-[350px] justify-center text-primary-110 
      text-xs bubble4 rounded-sm font-bold bg-primary-450 z-50 "
    >
      {isLoading ? <CartMenuLoading /> : null}
      <div className="bg-primary-450 h-full w-full rounded-sm">
        <div>
          <div
            className="p-4 py-5 space-y-4 max-h-[300px] overflow-y-auto 
          lg:scrollbar-thin
        "
          >
            {cartItems.length > 0 ? (
              cartItems
            ) : (
              <div
                className="flex flex-col items-center space-y-4 justify-center 
            text-sm h-[140px] w-full font-normal overflow-hidden"
              >
                <BsCartX className="w-8 h-8 " />
                <p className="text-center uppercase">{`Your cart is empty...`}</p>
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="flex items-center justify-between p-5 text-sm font-semibold h-[60px]">
              <p>{`$${totalPrice?.toFixed(2)}`}</p>
              <Link to={"/cart"}>
                <Button
                  className="w-[90px] h-[35px] text-xs"
                  content="Checkout"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
