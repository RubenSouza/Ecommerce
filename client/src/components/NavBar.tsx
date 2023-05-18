import Logo from "./Logo";
import searchIcon from "../assets/icons/searchIcon.svg";
import cartIcon from "../assets/icons/cartIcon.svg";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/features/userLogged";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.userLogged.user);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const activeStyle =
    "transition ease-in-out delay-100 hover:scale-105 border-b-2 border-[#F231A5]";
  const inactiveStyle = "transition ease-in-out delay-100 hover:scale-105 ";

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(setUser(null));
  };

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
                <div className="text-3xl flex flex-col justify-center items-center h-full w-full">
                  <div className="flex flex-col items-center justify-center space-y-6 h-full w-full ">
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

                    {user && (
                      <>
                        <NavLink
                          to={"/profile"}
                          end
                          className={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle
                          }
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <p>Profile</p>
                        </NavLink>
                        <NavLink
                          to={"/favorites"}
                          end
                          className={({ isActive }) =>
                            isActive ? activeStyle : inactiveStyle
                          }
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <p>Favorites</p>
                        </NavLink>
                      </>
                    )}
                    {!user && (
                      <div className="absolute bottom-40">
                        <Link to={"/login"}>
                          <Button
                            className="w-[300px] h-[50px] text-lg"
                            content="Sign In"
                          />
                        </Link>
                        <div className="text-sm flex items-center justify-center w-full my-2">
                          <p>OR</p>
                        </div>
                        <Link to={"/register"}>
                          <div
                            className="text-sm w-full flex items-center justify-center font-bold text-[#F231A5]
                        underline"
                          >
                            <p>Register your account</p>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <AiOutlineSearch className="w-6 h-6" />
            <MdOutlineShoppingCart className="w-6 h-6" />

            {user ? (
              <div className=" hidden lg:flex flex-col relative">
                <div
                  className="hidden md:flex space-x-1 items-center 
                justify-center cursor-pointer w-[100px]"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <BiUserCircle className="w-6 h-6" />
                  <p>Rúben</p>
                  <IoIosArrowDown />
                </div>
                {isUserMenuOpen && (
                  <div
                    className=" bg-primary-700 rounded-md shadow-md shadow-gray-800 hidden
                     absolute top-10 -right-6 lg:flex flex-col justify-center items-center 
                     text-primary-100 font-semibold text-sm space-y-3 bubble bubble3"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <Link to={"/profile"}>
                      <div className="flex space-x-1 justify-start items-center w-[90px] ">
                        <BiUserCircle className="w-6 h-6" />
                        <p>Profile</p>
                      </div>
                    </Link>
                    <Link to={"/favorites"}>
                      <div className="flex space-x-1 justify-start items-center w-[90px]">
                        <AiOutlineHeart className="w-6 h-6" />
                        <p>Favorites</p>
                      </div>
                    </Link>
                    <Link to={"/"}>
                      <div
                        className="flex space-x-1 justify-start items-center w-[90px] pb-1"
                        onClick={handleLogout}
                      >
                        <RiLogoutBoxRLine className="w-5 h-5" />
                        <p>Sign Out</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden lg:inline">
                <Link to={"/login"}>
                  <Button className="w-[107px] h-[40px]" content="Sign In" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
