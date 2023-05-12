import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "./Home";
import Explorer from "./Explorer";
import Game from "./Game";

const Main = () => {
  return (
    <div
      className="flex flex-col h-full w-full
    items-center"
    >
      <div className="flex flex-col justify-center items-center relative w-full h-20 ">
        <NavBar />
      </div>
      <div className="relative min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/login" element={<div>Login</div>} />
        </Routes>
      </div>
      <div className="w-full h-full">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
