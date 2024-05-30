import { useState, CSSProperties } from "react";
import { HashLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loading = () => {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="bg-[#121212] h-screen flex items-center">
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

export default Loading;
