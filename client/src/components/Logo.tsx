import lightLogo from "../assets/lightLogo.svg";

type Props = {
  className?: string;
};

const Logo = (props: Props) => {
  return (
    <div>
      <img src={lightLogo} className={props.className} alt="logo" />
    </div>
  );
};

export default Logo;
