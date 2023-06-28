import ProfileCardItem from "./ProfileCardItem";
import { Subtitle } from "./Subtitle";

const MyCards = () => {
  return (
    <div className="w-full h-full">
      <Subtitle title="My Cards" />
      <ProfileCardItem />
      <div className="w-full h-[2px] bg-primary-460 " />
      <ProfileCardItem />
      <div className="w-full h-[2px] bg-primary-460 " />
      <ProfileCardItem />
      <div className="w-full h-[2px] bg-primary-460 " />
    </div>
  );
};

export default MyCards;
