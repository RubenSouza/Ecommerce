import { FaTrashAlt } from "react-icons/fa";
import visa from "../assets/visa.svg";

const ProfileCardItem = () => {
  return (
    <div className="flex h-[50px] items-center text-sm space-x-2 w-full my-4">
      <img src={visa} alt="game Image" className="h-[40px] rounded-sm" />
      <div className="flex justify-between items-center w-full">
        <p className="">*** *** **** 4325</p>
        <div className="cursor-pointer px-2">
          <FaTrashAlt className="w-5 h-5 " />
        </div>
      </div>
    </div>
  );
};

export default ProfileCardItem;
