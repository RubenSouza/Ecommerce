import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import waves from "../assets/waves.svg";
import { Link } from "react-router-dom";
import { BsGoogle, BsGithub } from "react-icons/bs";
import axios from "axios";
import DarkMode from "../components/DarkMode";

const Register = () => {
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registerData = {
      username,
      email,
      password,
    };

    try {
      const fetchUser = await axios.post(
        "http://localhost:3001/v1/api/users/register",
        registerData
      );

      if (fetchUser) {
        window.location.href = "/";
      }
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  return (
    <div className="h-screen">
      <DarkMode />
      <div className="flex justify-center items-center h-full ">
        <div
          className="bg-primary-110/90 dark:bg-primary-450 h-[590px] w-[450px] z-20 rounded-lg
        shadow-lg shadow-black"
        >
          <div
            className="flex flex-col space-y-1 justify-center items-center 
          h-full w-full px-8"
          >
            <h1 className="text-[33px] font-bold pt-3">Create Your Account</h1>
            <p className="text-gray-500">The Best Chat App</p>
            <div className="flex space-x-1 w-full pt-3">
              <div
                className="w-full h-14 rounded-lg flex justify-center items-center p-[1px]
              bg-gradient-to-r from-[#ef6b2e] via-[#bc5c78] to-[#9d5399]"
              >
                <div
                  className="bg-primary-100 dark:bg-primary-600 w-full h-full flex space-x-2
                justify-center items-center rounded-lg cursor-pointer
                hover:bg-gradient-to-r hover:from-[#ef6b2e]/80 hover:via-[#bc5c78]/80 
                hover:to-[#9d5399]/80"
                >
                  <div>
                    <BsGoogle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-md">Login With Google</p>
                  </div>
                </div>
              </div>
              <div
                className="w-full h-14 rounded-lg flex justify-center items-center p-[1px]
              bg-gradient-to-r from-[#ef6b2e] via-[#bc5c78] to-[#9d5399]"
              >
                <div
                  className="bg-primary-100 dark:bg-primary-600 w-full h-full flex space-x-2
                justify-center items-center rounded-lg cursor-pointer
                hover:bg-gradient-to-r hover:from-[#ef6b2e]/80 hover:via-[#bc5c78]/80 
                hover:to-[#9d5399]/80"
                >
                  <div>
                    <BsGithub className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-md">Login With Github</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-500"> -- OR -- </p>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full h-14 rounded-lg mb-3 p-6 bg-primary-50 shadow-md dark:bg-primary-600"
                placeholder="Username"
                required={true}
                type="text"
                onChange={e => setUsername(e.target.value)}
              />
              <input
                className="w-full h-14 rounded-lg mb-3 p-6 bg-primary-50 shadow-md dark:bg-primary-600"
                placeholder="Email"
                required={true}
                type="email"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                className="w-full h-14 rounded-lg mb-3 p-6 bg-primary-50 shadow-md dark:bg-primary-600"
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
              <p className="text-gray-500 text-md">Alread have an Account?</p>
              <Link to={"/"}>
                <p className="underline text-md">Login Now</p>
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
