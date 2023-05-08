import Logo from "./Logo";
import searchIcon from "../assets/icons/searchIcon.svg";
import cartIcon from "../assets/icons/cartIcon.svg";
import userIcon from "../assets/icons/userIcon.svg";
import arrowDown from "../assets/icons/arrowDown.svg";

const NavBar = () => {
  return (
    <div className="fixed top-0 flex w-full space-x-5 py-6 px-14 text-sm bg-primary-500 z-20">
      <Logo className="w-28" />
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center">
          <div className="flex space-x-4 items-center">
            <p>Home</p>
            <p>Explorer</p>
          </div>
        </div>
        <div className="flex space-x-4 items-center justify-center">
          <img src={searchIcon} alt="search icon" />
          <img src={cartIcon} alt="cart icon" />
          <div className="flex space-x-1 items-center justify-center">
            <img src={userIcon} alt="user icon" />
            <p>Rúben</p>
            <img src={arrowDown} alt="arrow down icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
