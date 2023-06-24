import { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";

const ButtonLoading = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div>
      <BeatLoader
        color={"#ffffff"}
        cssOverride={override}
        size={8}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default ButtonLoading;
