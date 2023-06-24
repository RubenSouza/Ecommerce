import { Link } from "react-router-dom";
import successIcon from "../assets/successIcon.svg";
import { useEffect, useState } from "react";
import ScreenLoading from "../components/ScreenLoading";

const Success = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <ScreenLoading />;

  return (
    <div className="w-full h-full flex flex-col items-center py-20 space-y-6">
      <h1 className="text-2xl font-bold">Successful Purchase</h1>
      <div className="flex space-x-8 items-center justify-center">
        <div className="w-[300px] bg-button-100/80 h-[1px]" />
        <img src={successIcon} alt="successIcon" />
        <div className="w-[300px] bg-button-100/80 h-[1px]" />
      </div>
      <div className="w-[450px] text-center">
        <p>
          All your payment data will be sent to your e-mail. Go to{" "}
          <span className="font-bold text-button-100">
            <Link to={"/user/orders"}>My Orders</Link>
          </span>{" "}
          to check more about your last purchase.
        </p>
      </div>
    </div>
  );
};

export default Success;
