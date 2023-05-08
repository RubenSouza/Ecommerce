import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";

function App() {
  const user = JSON.parse(localStorage.getItem("user") as string) || null;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const darkMode = useSelector((state: any) => state.darkMode.mode);

  useEffect(() => {
    setIsLoading(false);
    if (user) {
      const decodedToken: any = jwtDecode(user?.accessToken);

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
      <div className={`${darkMode === "dark" ? "dark" : ""}`}>
        <div
          className="bg-primary-150 dark:bg-primary-500 min-h-screen
        text-primary-600 dark:text-primary-100"
        >
          <Routes>
            <Route path="/*" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
