import CartItem from "../components/CartItem";
import { Title } from "../components/Title";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CartItems from "../components/CartItems";
import Payment from "../components/Payment";

const Cart = () => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.userLogged.user);
  const cart = useSelector((state: any) => state.cart);
  const totalPrice = cart.totalPrice;
  const cartItems = cart.items.map((item: any) => (
    <CartItem id={item.id} key={item.id} />
  ));
  const cartItemsIds = cart.items.map((item: any) => item.id);

  const promise = loadStripe(import.meta.env.VITE_STRIPE_SECRET_KEY as string);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToStart = () => {
      if (cartRef.current) {
        cartRef.current.scrollIntoView({ behavior: "instant" });
      }
    };

    scrollToStart();
  }, []);

  return (
    <Elements stripe={promise}>
      <div className="flex flex-col items-center py-10 px-5">
        <div className="absolute -top-20 h-2" ref={cartRef} />
        <div className="w-full max-w-[1400px]">
          <div className="w-full space-y-4">
            <Title title="My cart" />
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-6 my-4">
            <CartItems cartItems={cartItems} totalPrice={totalPrice} />
            <Payment cartItemsIds={cartItemsIds} />
          </div>
          <div className="w-full h-[2px] bg-primary-460 my-16" />
        </div>
      </div>
    </Elements>
  );
};

export default Cart;
