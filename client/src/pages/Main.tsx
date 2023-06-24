import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "./Home";
import Explorer from "./Explorer";
import Game from "./Game";
import Favorites from "./Favorites";
import Cart from "./Cart";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { useGetFavoritesQuery } from "../redux/services/games";
import { useEffect } from "react";
import { setFavorites } from "../redux/features/favorites";
import Success from "./Success";

const Main = () => {
  const user = useSelector((state: any) => state.userLogged.user);

  const {
    data: favorites,
    isLoading: isFavoritesLoading,
    error,
  } = useGetFavoritesQuery("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (favorites) {
      dispatch(setFavorites(favorites?.favorites?.games));
    }
  }, [favorites]);

  return (
    <div
      className="flex flex-col min-h-screen w-full
    items-center"
    >
      <div
        className="flex flex-col justify-center items-center relative w-full h-20"
        id="nav"
      >
        <NavBar />
      </div>
      <div className="relative min-h-screen w-full pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorer/*" element={<Explorer />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
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
