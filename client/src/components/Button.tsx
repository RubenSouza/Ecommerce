type Props = {
  className?: string;
  content: string;
  onClick?: () => void;
};

const Button = (props: Props) => {
  return (
    <div>
      <button
        className={`bg-gradient-to-b from-[#FF5F5F] from-10% via-[#F062C0] via-100% to-[#F23131] to-100% 
        rounded-sm text-white
        ${props.className}`}
        onClick={props.onClick}
      >
        {props.content}
      </button>
    </div>
  );
};

export default Button;
