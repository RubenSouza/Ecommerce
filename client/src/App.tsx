import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Loading from "./components/ScreenLoading";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./redux/features/userLogged";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.userLogged.user);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const location = useLocation();

  const TRACKING_ID = import.meta.env.VITE_GA_TRACKING;

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    setIsLoading(false);
    if (user !== null) {
      const jsonUser = JSON.parse(user);
      const decodedToken: any = jwtDecode(jsonUser?.accessToken);

      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(setUser(null));
      }
    }
  }, [user, isLoading, dispatch, location]);

  if (isLoading) return <Loading />;
  else {
    return (
      <div
        className="w-full bg-primary-500 text-primary-100 overflow-x-hidden h-screen
        scrollbar-none lg:scrollbar-thin overflow-y-scroll scrollbar-track-gray-400/40
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
