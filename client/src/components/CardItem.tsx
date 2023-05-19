import visa from "../assets/visa.svg";

const CardItem = () => {
  return (
    <div className="flex h-[50px] items-center text-sm space-x-2 w-full">
      <img src={visa} alt="game Image" className="h-[40px] rounded-sm" />
      <div className="flex justify-between items-center w-full">
        <p className="">*** *** **** 4325</p>
        <input
          type="radio"
          name="card"
          className="bg-transparent border-[2px] border-primary-400 text-[#F231A5]
                    checked:bg-[#F231A5] w-4 h-4 rounded-full focus:ring-0 focus:ring-offset-0"
        />
      </div>
    </div>
  );
};

export default CardItem;
