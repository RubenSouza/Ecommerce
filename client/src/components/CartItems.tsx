import { BsCartX } from "react-icons/bs";

type Props = {
  cartItems: any;
  totalPrice: number;
};

const CartItems = ({ cartItems, totalPrice }: Props) => {
  return (
    <div
      className="bg-primary-450 h-full w-full max-h-[600px] rounded-sm 
          flex flex-col justify-between"
    >
      {cartItems.length > 0 ? (
        <div className="p-4 space-y-4 w-full h-full overflow-y-scroll scrollbar-thin">
          {cartItems}
        </div>
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
  );
};

export default CartItems;
