import CartItem from "../components/CartItem";
import visa from "../assets/visa.svg";
import mastercard from "../assets/masterCard.svg";
import GameItem from "../components/GameItem";
import Highlight from "../components/Highlight";
import { Title } from "../components/Title";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import CardItem from "../components/CardItem";
import { Subtitle } from "../components/SubTitle";

const Cart = () => {
  const [cardOpen, setCardOpen] = useState(false);

  const handlePurchase = () => {
    if (!cardOpen) {
      alert("Please select a payment method");
    }
    if (cardOpen) {
      alert("Purchase completed");
    }
  };

  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full lg:w-[1400px] px-5 ">
        <div className="w-full space-y-4">
          <Title title="My cart" />
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-6 my-4">
          <div className="bg-primary-450 h-full w-full rounded-sm">
            <div className="p-4 space-y-4">
              <CartItem />
              <div className="w-full h-[2px] bg-primary-460 my-16" />
              <CartItem />
              <div className="w-full h-[2px] bg-primary-460 my-16" />
              <CartItem />
              <div className="w-full h-[2px] bg-primary-460 my-16" />
            </div>
            <div className="flex justify-between p-4 font-semibold">
              <h4>Total:</h4>
              <p>R$ 330</p>
            </div>
          </div>
          <div
            className="bg-primary-450 w-full lg:w-[500px] min-h-[415px] rounded-sm flex flex-col justify-between
          my-6 lg:my-0"
          >
            <div className="p-4 space-y-4">
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
            <div className="text-sm p-4 px-6 lg:px-8 font-semibold">
              <div className="w-full h-[2px] bg-primary-460 my-3" />
              <div className="flex justify-between items-center">
                <Link to={"/"}>
                  <p>Explorer more</p>
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
        <div className="w-full space-y-4">
          <Title title="You may also like" />
          <div className="w-full">
            <Highlight />
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

export default Cart;
