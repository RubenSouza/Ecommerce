import { CSSProperties } from "react";
import { PacmanLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const CartMenuLoading = () => {
  return (
    <div
      className="bg-primary-450 absolute flex 
    items-center justify-center w-full h-full z-50"
    >
      <PacmanLoader
        color={"#F7AB0A"}
        cssOverride={override}
        size={35}
        aria-label="Pacman Loader"
        data-testid="loader"
      />
    </div>
  );
};

export default CartMenuLoading;
