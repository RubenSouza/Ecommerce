import badgeImg from "../assets/badge.svg";
import Button from "./Button";
import { Link } from "react-router-dom";
import Badge from "./badge";

type Props = {
  title: string;
  description: string;
  badge: string;
  cover: string;
  badgeColor: string;
  link: string;
};

const Thumb = ({
  title,
  badge,
  badgeColor,
  cover,
  description,
  link,
}: Props) => {
  return (
    <div
      className="flex w-full md:w-[1024px] md:min-h-[580px] md:h-[580px] md:max-h-[580px] items-center 
    justify-center px-5 xl:px-0"
    >
      <div className="w-full h-full relative">
        <img
          src={cover}
          alt="home highlight"
          className="rounded-md w-full h-full object-cover"
        />

        <div className="absolute w-full h-full top-0 ">
          <Badge badge={badge} badgeColor={badgeColor} />
        </div>
        <div
          className="bg-slate-950 md:absolute bottom-0 right-0 left-0 md:bg-primary-700/80 md:h-[170px] 
        h-[200px] px-10 pt-6 "
        >
          <div className="w-full ">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="pt-2">{description.substring(0, 70)}</p>
          </div>
          <div className="w-[150px] py-3">
            <Link to={link}>
              <Button className="w-full h-[48px]" content="Buy Now" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumb;
