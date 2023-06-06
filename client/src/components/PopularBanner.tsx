import { Link } from "react-router-dom";
import Button from "./Button";

type Props = {
  title: string;
  src: string;
  alt: string;
  link: string;
};

const PopularBanner = ({ title, src, alt, link }: Props) => {
  return (
    <div className="w-full h-full relative">
      <img
        src={src}
        alt={alt}
        className="w-full lg:w-[1024px] h-[200px] md:h-[350px] object-cover object-top
        "
      />
      <div
        className="w-full h-full flex flex-col justify-end py-4 px-5 
      items-start absolute top-0 space-y-2 text-primary-50"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-center">{title}</h1>
        <Link to={link}>
          <Button className="w-[120px] h-[48px]" content="Buy Now" />
        </Link>
      </div>
    </div>
  );
};

export default PopularBanner;
