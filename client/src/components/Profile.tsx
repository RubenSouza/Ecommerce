import { useSelector } from "react-redux";
import Button from "./Button";
import { Subtitle } from "./Subtitle";

const Profile = () => {
  const user = useSelector((state: any) => state.userLogged.user);
  const jsonUser = JSON.parse(user);

  const userName = jsonUser.username;
  const userEmail = jsonUser.email;

  return (
    <div className="w-full h-full flex flex-col">
      <Subtitle title="Profile" />
      <div className="flex flex-col items-end">
        <div
          className="flex flex-col lg:flex-row w-full lg:space-x-4 
        my-4 space-y-2 lg:space-y-0"
        >
          <div className="w-full space-y-1">
            <label htmlFor="name" className="text-sm  text-primary-200">
              Username
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={userName}
              autoComplete="off"
              className="w-full border rounded-sm py-3 text-primary-700 placeholder:text-primary-200"
            />
          </div>
          <div className="w-full space-y-1">
            <label htmlFor="email" className="text-sm text-primary-200">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder={userEmail}
              disabled={true}
              className="w-full border rounded-sm py-3 bg-primary-150 cursor-not-allowed"
            />
          </div>
        </div>
        <Button content="Save" className="w-[100px] h-[48px] mt-8" />
      </div>
    </div>
  );
};

export default Profile;
