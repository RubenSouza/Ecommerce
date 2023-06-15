import Button from "./Button";
import { Subtitle } from "./Subtitle";

const Passowrd = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Subtitle title="Change password" />
      <div className="flex flex-col items-end">
        <div
          className="flex flex-col lg:flex-row w-full lg:space-x-4 
        my-4 space-y-2 lg:space-y-0"
        >
          <div className="w-full space-y-1">
            <label htmlFor="name" className="text-sm  text-primary-200">
              Old Password
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              className="w-full border rounded-sm py-3 text-primary-700"
            />
          </div>
          <div className="w-full space-y-1">
            <label htmlFor="email" className="text-sm text-primary-200">
              New Password
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="w-full border rounded-sm py-3 text-primary-700"
            />
          </div>
        </div>
        <Button content="Save" className="w-[100px] h-[48px] mt-8" />
      </div>
    </div>
  );
};

export default Passowrd;
