import { useState, useEffect } from "react";
import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setMode } from "../redux/features/darkMode";

const DarkMode = () => {
  const dispatch = useDispatch();
  const [isDark, setIsDark] = useState<boolean>(false);

  const darkMode = useSelector((state: any) => state.darkMode.mode);

  useEffect(() => {
    if (darkMode === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const handleIsDark = () => {
    if (isDark) {
      dispatch(setMode("light"));
      setIsDark(false);
    } else {
      dispatch(setMode("dark"));
      setIsDark(true);
    }
  };

  return (
    <div
      className={`absolute top-4 right-5 w-24 h-11 border-[2px]
     rounded-full border-[#c5c5c5] bg-[#f2f2f2] transition-colors duration-300 ease-linear hover:cursor-pointer ${
       isDark ? "bg-primary-700 border-primary-400" : ""
     }`}
    >
      <div className="flex flex-row justify-between">
        <BsSun
          className={`w-10  h-10 text-primary-100 rounded-full p-[7px]
          transition-colors duration-200 ease-in  
           ${!isDark ? "bg-yellow-500" : ""}`}
          onClick={handleIsDark}
        />
        <MdOutlineDarkMode
          className={`w-10  h-10 text-primary-600 rounded-full p-[6px]
          transition-colors duration-200 ease-in  
            ${isDark ? "bg-primary-300 text-primary-50 shadow-md" : ""}`}
          onClick={handleIsDark}
        />
      </div>
    </div>
  );
};

export default DarkMode;
