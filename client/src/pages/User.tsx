import { Route, Routes } from "react-router-dom";
import ProfileMenu from "../components/ProfileMenu";
import { Title } from "../components/Title";
import Profile from "../components/Profile";
import MyCards from "../components/MyCards";
import Passowrd from "../components/Password";

const User = () => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <div className="w-[1400px] h-full  px-5 flex flex-col lg:flex-row justify-between lg:space-x-6">
        <div className="">
          <Title title="My Account" />
          <div className="my-8">
            <ProfileMenu />
          </div>
        </div>
        <div className="w-full my-16">
          <div className="bg-primary-450 min-h-[280px] w-full rounded-sm">
            <div className="p-4">
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/cards" element={<MyCards />} />
                <Route path="/change-password" element={<Passowrd />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
