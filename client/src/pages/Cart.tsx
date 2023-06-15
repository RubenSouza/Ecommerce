import CartItem from "../components/CartItem";
import visa from "../assets/visa.svg";
import mastercard from "../assets/masterCard.svg";
import { Title } from "../components/Title";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useRef, useState } from "react";
import CardItem from "../components/CardItem";
import { Subtitle } from "../components/Subtitle";
import { useSelector } from "react-redux";
import { BsCartX } from "react-icons/bs";

const Cart = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const cart = useSelector((state: any) => state.cart);
  const totalPrice = cart.totalPrice;
  const cartItems = cart.items.map((item: any) => (
    <CartItem id={item.id} key={item.id} />
  ));

  const handlePurchase = () => {
    if (!cardOpen) {
      alert("Please select a payment method");
    }
    if (cardOpen) {
      alert("Purchase completed");
    }
  };

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
    <div className="flex flex-col items-center py-10 px-5">
      <div className="absolute -top-20 h-2" ref={cartRef} />
      <div className="w-full max-w-[1400px]">
        <div className="w-full space-y-4">
          <Title title="My cart" />
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-6 my-4">
          <div
            className="bg-primary-450 h-full w-full min-h-[415px] rounded-sm 
          flex flex-col justify-between"
          >
            {cartItems.length > 0 ? (
              <div className="p-4 space-y-4">{cartItems}</div>
            ) : (
              <div
                className="flex flex-col items-center space-y-4 justify-center 
            text-lg h-[350px] pt-4 w-full font-normal"
              >
                <BsCartX className="w-10 h-10 " />
                <p className="text-center uppercase">{`Your cart is empty...`}</p>
              </div>
            )}
            <div className="flex justify-between p-4 font-semibold">
              <h4>Total:</h4>
              <p>{`$${totalPrice?.toFixed(2)}`}</p>
            </div>
          </div>
          <div
            className="bg-primary-450 w-full lg:w-[450px] min-h-[415px] max-h-[650px] h-full 
            rounded-sm flex flex-col justify-between my-6 lg:my-0"
          >
            <div className="p-4 space-y-2">
              <Subtitle title="Payment Method" />
              <div>
                <div className="flex flex-col space-y-2 p-2">
                  <div>
                    <ul className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="credit-card"
                        name="credit-card"
                        className="bg-transparent border-[2px] border-primary-400 text-[#F231A5]
                    checked:bg-[#F231A5] w-4 h-4 rounded-full focus:ring-0 focus:ring-offset-0"
                        onChange={() => {
                          setCardOpen(!cardOpen);
                        }}
                      />
                      <p className="">Credit Card</p>
                    </ul>

                    <div className="flex items-center space-x-2 pt-2">
                      <img src={visa} alt="visa" className="w-16" />
                      <img src={mastercard} alt="mastercard" className="w-16" />
                    </div>
                    {cardOpen && (
                      <ul className="py-2">
                        <CardItem />
                        <CardItem />
                        <CardItem />
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm py-2 px-6 lg:px-8 font-semibold">
              <div className="w-full h-[2px] bg-primary-460 my-3" />
              <div className="flex justify-between items-center">
                <Link to={"/"}>
                  <p className="text-sm">Explorer more</p>
                </Link>
                <div className="w-[150px]">
                  <Button
                    className="w-full h-[48px]"
                    content="Purchase"
                    onClick={handlePurchase}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-primary-460 my-16" />
      </div>
    </div>
  );
};

export default Cart;
