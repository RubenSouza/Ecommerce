import darkLogo from "../assets/darkLogo.svg";
import lightLogo from "../assets/lightLogo.svg";
import { useSelector } from "react-redux";

type Props = {
  className?: string;
};

const Logo = (props: Props) => {
  return (
    <div>
      <img src={lightLogo} className={props.className} alt="logo" />
      {/* <img src={darkLogo} className={props.className} alt="logo" /> */}
    </div>
  );
};

export default Logo;
