import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "./Home";
import Explorer from "./Explorer";
import Game from "./Game";
import Favorites from "./Favorites";
import Cart from "./Cart";
import User from "./User";
import Success from "./Success";
import Library from "./Library";
import { useDispatch } from "react-redux";
import { useGetFavoritesQuery } from "../redux/services/games";
import { useEffect } from "react";
import { setFavorites } from "../redux/features/favorites";
import NotFoundPage from "./NotFoundPage";

const Main = () => {
  const { data: favorites } = useGetFavoritesQuery("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (favorites && favorites?.favorites?.games) {
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
          <Route path="/library" element={<Library />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/user/*" element={<User />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <div className="w-full h-full bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
