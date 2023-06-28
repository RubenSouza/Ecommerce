import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import waves from "../assets/waves.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Logo from "../components/Logo";

const Register = () => {
  const user = JSON.parse(localStorage.getItem("user") as string) || null;
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const URL = import.meta.env.VITE_PUBLIC_API_URL as string;
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registerData = {
      username,
      email,
      password,
    };

    try {
      const fetchUser = await axios.post(`${URL}/users/register`, registerData);

      if (fetchUser) {
        navigate("/login");
      }
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  useEffect(() => {
    if (user) {
      window.location.href = "/";
    }
  }, [user]);

  return (
    <div className="h-screen">
      <div className="flex justify-center items-center h-full">
        <div
          className="bg-primary-450 h-[590px] w-[350px] md:w-[450px] 
          z-20 rounded-lg shadow-lg shadow-black"
        >
          <div
            className="flex flex-col space-y-1 justify-center items-center 
          h-full w-full px-8"
          >
            <Link to={"/"}>
              <Logo className="w-38" />
            </Link>
            <h1
              className="text-[28px] text-center  md:text-[33px] 
            md:text-left font-bold py-3"
            >
              Create Your Account
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full h-14 rounded-lg mb-3 p-6 text-sm md:text-base
                shadow-md bg-primary-600"
                placeholder="Username"
                required={true}
                type="text"
                onChange={e => setUsername(e.target.value)}
              />
              <input
                className="w-full h-14 rounded-lg mb-3 p-6 text-sm md:text-base
                shadow-md bg-primary-600"
                placeholder="Email"
                required={true}
                type="email"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                className="w-full h-14 rounded-lg mb-3 p-6 text-sm md:text-base
                shadow-md bg-primary-600"
                placeholder="Password"
                required={true}
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
              <button
                className="w-full h-14 mt-3 rounded-lg 
              bg-gradient-to-r from-[#ef6b2e] via-[#bc5c78] to-[#9d5399]
              hover:from-[#ef6b2e]/80 hover:via-[#bc5c78]/80 hover:to-[#9d5399]/80
              "
              >
                Create Your Account
              </button>
            </form>
            <div className="flex space-x-2 pb-3 py-3">
              <p className="text-gray-500 text-[15px] md:text-md">
                Alread have an Account?
              </p>
              <Link to={"/login"}>
                <p className="underline text-[15px] md:text-md font-bold">
                  Login Now
                </p>
              </Link>
            </div>
            <div className="flex text-gray-500 justify-between w-full text-sm pt-4">
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
      <Toaster />
    </div>
  );
};

export default Register;
