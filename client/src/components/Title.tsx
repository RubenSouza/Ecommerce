type Props = {
  title: string;
};

export const Title = (props: Props) => {
  return (
    <div className="flex space-x-2 lg:px-0">
      <div className="bg-[#3CD3C1] h-8 w-1" />
      <h3 className="text-2xl font-semibold">{props.title}</h3>
    </div>
  );
};
