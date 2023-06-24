import ButtonLoading from "./ButtonLoading";

type Props = {
  className?: string;
  content: string;
  onClick?: () => void;
  disabled?: boolean;
  id?: string;
  isLoading?: boolean;
};

const Button = (props: Props) => {
  return (
    <div>
      <button
        className={`bg-gradient-to-b from-[#FF5F5F] from-10% via-[#F062C0] 
        via-100% to-[#F23131] to-100% rounded-sm text-white disabled:opacity-30
        disabled:cursor-not-allowed disabled:bg-white disabled:text-primary-450
        ${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
        id={props.id}
      >
        {props.isLoading ? <ButtonLoading /> : props.content}
      </button>
    </div>
  );
};

export default Button;
