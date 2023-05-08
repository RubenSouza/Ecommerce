import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "./Home";

const Main = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="relative w-full h-20">
        <NavBar />
      </div>
      <div className="relative h-full w-full">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<div>Login</div>}></Route>
        </Routes>
      </div>
      <div className="w-full h-full">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
