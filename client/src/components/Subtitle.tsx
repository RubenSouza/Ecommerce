type Props = {
  title: string;
};

export const Subtitle = (props: Props) => {
  return (
    <div>
      <h3 className="text-lg py-1">{props.title}</h3>
      <div className="bg-[#3CD3C1] h-1 w-8" />
    </div>
  );
};
