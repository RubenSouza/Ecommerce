import gameThumb from "../assets/gameThumb.svg";
import badge from "../assets/badge.svg";
import buttonTeste from "../assets/buttonTeste.svg";

const Thumb = () => {
  return (
    <div className="flex pb-10 w-full md:w-[1024px] items-center justify-center">
      <div className="w-full relative">
        <img
          src={gameThumb}
          alt="game thumb"
          className="rounded-md md:w-[1024px] min-w-full"
        />
        <img
          src={badge}
          alt="badge"
          className="absolute top-5 right-0 md:-right-4 w-[110px] md:w-[150px]"
        />
        <div
          className="bg-slate-950 md:absolute bottom-0 right-5 left-5 md:bg-primary-700/80 md:h-[170px] 
        h-[200px] px-10 pt-6 "
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
