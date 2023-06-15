import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Loading from "./components/ScreenLoading";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state: any) => state.userLogged.user);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(false);
    if (user !== null) {
      const jsonUser = JSON.parse(user);
      const decodedToken: any = jwtDecode(jsonUser?.accessToken);

      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("user");
        window.location.href = "/";
        setIsLogged(false);
      }

      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [user, isLoading]);

  if (isLoading) return <Loading />;
  else {
    return (
      <div
        className="w-full bg-primary-500 text-primary-100 overflow-x-hidden h-screen
        scrollbar-none lg:scrollbar-thin overflow-y-scroll  scrollbar-track-gray-400/40
      scrollbar-thumb-[#F7AB0A]/80
      "
      >
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    );
  }
}

export default App;
