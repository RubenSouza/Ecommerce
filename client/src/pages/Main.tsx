import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "./Home";
import Explorer from "./Explorer";

const Main = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="relative w-full h-20">
        <NavBar />
      </div>
      <div className="relative min-h-screen w-full py-10">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explorer" element={<Explorer />}></Route>
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
