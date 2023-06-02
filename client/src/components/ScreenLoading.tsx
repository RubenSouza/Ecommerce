import { useState, CSSProperties } from "react";
import { HashLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ScreenLoading = () => {
  const [color, setColor] = useState("#ffffff");

  return (
    <div
      className="bg-[#121212] h-screen flex items-center fixed 
    top-0 bottom-0 left-0 right-0 z-20"
    >
      <HashLoader
        color={"#ffffff"}
        cssOverride={override}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default ScreenLoading;
