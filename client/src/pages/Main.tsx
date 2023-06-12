import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "./Home";
import Explorer from "./Explorer";
import Game from "./Game";
import Favorites from "./Favorites";
import Cart from "./Cart";
import User from "./User";
import { useSelector } from "react-redux";

const Main = () => {
  const user = useSelector((state: any) => state.userLogged.user);
  return (
    <div
      className="flex flex-col h-full w-full
    items-center"
    >
      <div className="flex flex-col justify-center items-center relative w-full h-20">
        <NavBar />
      </div>
      <div className="relative min-h-screen w-full pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorer/*" element={<Explorer />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          {user && <Route path="/user/*" element={<User />} />}
        </Routes>
      </div>
      <div className="w-full h-full bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
