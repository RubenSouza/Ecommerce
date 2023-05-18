import waves from "../assets/waves.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DarkMode from "../components/DarkMode";
import Logo from "../components/Logo";
import { setUser } from "../redux/features/userLogged";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.userLogged.user);
  const token = user?.accessToken;
  console.log(token);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    const fetchUserLogin = await axios.post(
      "http://localhost:3001/v1/api/users/login",
      userData
    );
    if (fetchUserLogin) {
      dispatch(setUser(fetchUserLogin.data));
      window.location.href = "/";
    }
  };

  useEffect(() => {
    if (user !== null) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="h-screen">
      <DarkMode />
      <div className="flex justify-center items-center h-full ">
        <div
          className="bg-primary-110/90 dark:bg-primary-450 h-[580px] w-[450px] z-20 rounded-lg
        shadow-lg shadow-black "
        >
          <div
            className="flex flex-col space-y-2 justify-center items-center 
          h-full w-full px-8 pt-8"
          >
            <Logo className="w-38" />
            <h1 className="text-[33px] font-bold py-3">
              Login to Your Account
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full h-14 rounded-lg mb-3 p-6 bg-primary-50 shadow-md dark:bg-primary-600"
                placeholder="Email"
                type="email"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                className="w-full h-14 rounded-lg mb-3 p-6 bg-primary-50 shadow-md dark:bg-primary-600"
                placeholder="Password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
              <button
                className="w-full h-14 mt-3 rounded-lg 
              bg-gradient-to-r from-[#ef6b2e] via-[#bc5c78] to-[#9d5399]
              hover:from-[#ef6b2e]/80 hover:via-[#bc5c78]/80 hover:to-[#9d5399]/80
              "
              >
                Login to your Account
              </button>
            </form>
            <div className="flex space-x-2 pb-3 py-3">
              <p className="text-gray-500 text-md">Not a member yet?</p>
              <Link to={"/register"}>
                <p className="underline text-md text-bold">Register Now</p>
              </Link>
            </div>
            <div className="flex text-gray-500 justify-between w-full text-sm pt-5">
              <p>Privacy policy</p>
              <p>Copyright 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden ">
        <img
          src={waves}
          alt="waves"
          className="absolute -bottom-0 w-[100%] shadow-lg z-10"
        />
      </div>
    </div>
  );
};

export default Login;
