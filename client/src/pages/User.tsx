import { Route, Routes, useNavigate } from "react-router-dom";
import ProfileMenu from "../components/ProfileMenu";
import { Title } from "../components/Title";
import Profile from "../components/Profile";
import { useEffect, useRef, useState } from "react";
import ScreenLoading from "../components/ScreenLoading";
import Orders from "../components/Orders";
import { useSelector } from "react-redux";

const User = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state: any) => state.userLogged.user);
  const navigate = useNavigate();

  useEffect(() => {
    const scrollToStart = () => {
      if (cartRef.current) {
        cartRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToStart();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  if (isLoading) return <ScreenLoading />;

  return (
    <div className="w-full flex justify-center items-center py-10 px-5">
      <div className="absolute -top-20 h-2" ref={cartRef} />
      <div className="w-[1400px] h-full flex flex-col lg:flex-row justify-between lg:space-x-6">
        <div className="">
          <Title title="My Account" />
          <div className="my-8">
            <ProfileMenu />
          </div>
        </div>
        <div className="w-full my-16">
          <div className="bg-primary-450 min-h-[280px] w-full rounded-sm">
            <div className="p-4 w-full">
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
