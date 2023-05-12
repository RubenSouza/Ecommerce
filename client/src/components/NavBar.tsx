import Logo from "./Logo";
import searchIcon from "../assets/icons/searchIcon.svg";
import cartIcon from "../assets/icons/cartIcon.svg";
import userIcon from "../assets/icons/userIcon.svg";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeStyle =
    "transition ease-in-out delay-100 hover:scale-105 border-b-2 border-[#F231A5]";
  const inactiveStyle = "transition ease-in-out delay-100 hover:scale-105 ";

  return (
    <div className="w-full fixed top-0 px-6 flex items-center justify-center z-20 bg-primary-500">
      <div className="w-[1400px] flex space-x-5 py-6 text-sm justify-between">
        <div className="md:hidden flex items-center justify-center cursor-pointer">
          <HiOutlineMenuAlt1
            className="w-8 h-8"
            onClick={() => setIsMobileMenuOpen(true)}
          />
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
            {isMobileMenuOpen && (
              <div
                className="absolute bg-white top-0 bottom-0 right-0 -left-0 h-screen flex
                  justify-center items-center z-10 md:hidden text-primary-600 font-semibold"
              >
                <AiOutlineClose
                  className="w-8 h-8 absolute top-8 right-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <div className="text-3xl flex justify-center items-center">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <NavLink
                      to={"/"}
                      end
                      className={({ isActive }) =>
                        isActive ? activeStyle : inactiveStyle
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <p>Home</p>
                    </NavLink>

                    <NavLink
                      to={"/explorer"}
                      end
                      className={({ isActive }) =>
                        isActive ? activeStyle : inactiveStyle
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <p>Explorer</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
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
