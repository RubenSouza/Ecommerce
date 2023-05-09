import gameThumb from "../assets/gameThumb.svg";
import badge from "../assets/badge.svg";
import buttonTeste from "../assets/buttonTeste.svg";

const Thumb = () => {
  return (
    <div className="flex items-center justify-center pb-10 w-[1024px]">
      <div className="relative w-full">
        <img
          src={gameThumb}
          alt="game thumb"
          className="w-[1024px] rounded-md"
        />
        <img src={badge} alt="badge" className="absolute top-5 right-0" />
        <div
          className="absolute bottom-0 right-5 left-5 bg-primary-700/80 h-[170px] 
        px-10 pt-6 "
        >
          <h3 className="text-xl font-bold">Desafie a morte</h3>
          <p className="pt-2">
            Jogue a nova temporada de{" "}
            <span className="text-pink-600 font-bold ">CrashLands</span>
          </p>
          <img src={buttonTeste} className="w-36 py-4" />
        </div>
      </div>
    </div>
  );
};

export default Thumb;
