type Props = {
  badge: string;
  badgeColor: string;
};

const Badge = ({ badge, badgeColor }: Props) => {
  return (
    <div className="w-full h-full relative">
      <div
        className={`hidden sm:absolute sm:top-16 lg:top-10 -right-5 w-[150px]
    h-[45px] rounded-sm md:flex justify-center 
    items-center text-base text-primary-110 font-semibold
    
    ${badgeColor === "primary" ? "bg-[#3CD3C1]" : "bg-[#FF5F5F]"} 
      
      `}
      >
        <div
          className={`absolute -bottom-[9px] -right-[0.9px] w-[21px] 
          h-[10px] badge
          
          ${badgeColor === "primary" ? "bg-[#3CD3C1]/50" : "bg-[#FF5F5F]/50"} 
          `}
        />
        <p>{badge}</p>
      </div>
    </div>
  );
};

export default Badge;
