// import imageTeste from "../assets/imageTeste.svg";

import FreeGames from "../components/FreeGames";
import MostPopulars from "../components/MostPopulars";
import Releases from "../components/Releases";
import Thumb from "../components/Thumb";
import ComingSoon from "../components/ComingSoon";

const Home = () => {
  return (
    <div className="flex flex-col">
      <section className="flex items-center justify-center h-full w-full px-5">
        <Thumb />
      </section>
      <section className="flex items-center justify-center w-full">
        <Releases />
      </section>
      <section className="flex items-center justify-center w-full">
        <MostPopulars />
      </section>
      <section className="flex items-center justify-center w-full">
        <ComingSoon />
      </section>
      <section className="flex items-center justify-center w-full">
        <FreeGames />
      </section>
    </div>
  );
};

export default Home;
