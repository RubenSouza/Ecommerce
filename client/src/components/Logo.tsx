import ecommerceLogo from "../assets/Logo Ecommerce.png";
import ecommerceLogoDark from "../assets/Logo Ecommerce Dark.png";

type Props = {
  className?: string;
  dark?: boolean;
};

const Logo = (props: Props) => {
  return (
    <div>
      {props.dark ? (
        <img src={ecommerceLogoDark} className={props.className} alt="logo" />
      ) : (
        <img src={ecommerceLogo} className={props.className} alt="logo" />
      )}
    </div>
  );
};

export default Logo;
