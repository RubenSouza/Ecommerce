import Logo from "./Logo";
import searchIcon from "../assets/icons/searchIcon.svg";
import cartIcon from "../assets/icons/cartIcon.svg";
import userIcon from "../assets/icons/userIcon.svg";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const activeStyle =
    "transition ease-in-out delay-100 hover:scale-105 border-b-2 border-[#F231A5]";
  const inactiveStyle = "transition ease-in-out delay-100 hover:scale-105 ";

  return (
    <div className="w-full fixed top-0 px-6 flex items-center justify-center z-20 bg-primary-500">
      <div className="w-[1400px] flex space-x-5 py-6 text-sm justify-between">
        <div className="md:hidden flex items-center justify-center cursor-pointer">
          <AiOutlineMenu className="w-5 h-5" />
        </div>
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <Logo className="w-28" />
          </Link>
        </div>
        <div className="flex items-center justify-between md:w-full">
          <div className="flex items-center justify-center">
            <div className="hidden md:flex space-x-4 items-center font-semibold">
              <NavLink
                to={"/"}
                end
                className={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                <p>Home</p>
              </NavLink>

              <NavLink
                to={"/explorer"}
                end
                className={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                <p>Explorer</p>
              </NavLink>
            </div>
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <img src={searchIcon} alt="search icon" />
            <img src={cartIcon} alt="cart icon" />
            <div className="hidden md:flex space-x-1 items-center justify-center">
              <img src={userIcon} alt="user icon" />
              <p>Rúben</p>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
