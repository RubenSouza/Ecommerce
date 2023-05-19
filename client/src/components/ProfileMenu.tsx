import { BiUserCircle } from "react-icons/bi";
import { FaCreditCard } from "react-icons/fa";
import { GrUnorderedList } from "react-icons/gr";
import { BsFillKeyFill } from "react-icons/bs";

import { RiLogoutBoxRLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userLogged";

const ProfileMenu = () => {
  const dispatch = useDispatch();

  const activeStyle =
    "w-full p-4 flex items-center space-x-2 cursor-pointer bg-[#F231A5]";
  const inactiveStyle =
    "w-full p-4 flex items-center space-x-2 cursor-pointer hover:bg-primary-400";

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(setUser(null));
  };

  return (
    <div
      className="bg-primary-450 w-full lg:w-[350px] 
  h-full rounded-sm flex flex-col justify-between
  lg:my-0"
    >
      <ul className="">
        <NavLink
          to={"/user/"}
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <BiUserCircle className="w-6 h-6" />
          <p>Profile</p>
        </NavLink>
        <NavLink
          to={"/user/cards"}
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <FaCreditCard className="w-5 h-5" />
          <p>My Cards</p>
        </NavLink>
        <NavLink
          to={"/user/orders"}
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <GrUnorderedList className="w-5 h-5" />
          <p>My Orders</p>
        </NavLink>
        <NavLink
          to={"/user/change-password"}
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <BsFillKeyFill className="w-5 h-5" />
          <p>Change password</p>
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          onClick={handleLogout}
        >
          <RiLogoutBoxRLine className="w-5 h-5" />
          <p>Sign Out</p>
        </NavLink>
      </ul>
    </div>
  );
};

export default ProfileMenu;
