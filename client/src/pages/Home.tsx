// import imageTeste from "../assets/imageTeste.svg";

import FreeGames from "../components/FreeGames";
import MostPopulars from "../components/MostPopulars";
import Releases from "../components/Releases";
import ComingSoon from "../components/ComingSoon";
import HomeCarousel from "../components/HomeCarousel";
import Thumb from "../components/Thumb";

const Home = () => {
  const slides = [
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
  ];

  return (
    <div className="w-full flex flex-col space-y-5">
      <section className="w-full h-full flex justify-center items-start">
        <div className="h-[500px] lg:h-[650px] w-full lg:w-[1400px]">
          <HomeCarousel slides={slides} />
        </div>
      </section>
      <section className="flex items-center justify-center w-full">
        <Releases />
      </section>
      {/* <section className="flex items-center justify-center w-full">
        <MostPopulars />
      </section> */}
      {/* <section className="flex items-center justify-center w-full">
        <ComingSoon />
      </section> */}
      {/* <section className="flex items-center justify-center w-full">
        <FreeGames />
      </section> */}
    </div>
  );
};

export default Home;
