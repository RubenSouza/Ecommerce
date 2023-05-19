import CartItem from "../components/CartItem";
import GameItem from "../components/GameItem";
import Highlight from "../components/Highlight";
import { Title } from "../components/Title";

const Cart = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-full lg:w-[1400px] px-5 ">
        <div className="w-full space-y-4">
          <Title title="My cart" />
        </div>
        <div className="flex space-x-6 my-4">
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
          <div className="bg-primary-450 w-[500px] h-[415px] rounded-sm">
            <div className="p-4 space-y-4">
              <div>
                <h3 className="font-semibold py-1">Payment Method</h3>
                <div className="bg-[#3CD3C1] h-1 w-8" />
              </div>
            </div>
          </div>
          {/* <div className="w-full space-y-4">
            <Title title="Order summary" />
            <div className="w-full flex flex-col items-center justify-center space-y-4">
              <div className="w-full flex flex-row items-center justify-between">
                <p className="text-primary-460 text-lg">Subtotal</p>
                <p className="text-primary-460 text-lg">$ 100</p>
              </div>
            </div>
          </div> */}
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
