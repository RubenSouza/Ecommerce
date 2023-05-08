// import imageTeste from "../assets/imageTeste.svg";

import Releases from "../components/Releases";
import Thumb from "../components/Thumb";

const Home = () => {
  return (
    <div className="flex flex-col">
      <section className="flex items-center justify-center h-full w-full px-5">
        <Thumb />
      </section>
      <section className="">
        <Releases />
      </section>
    </div>
  );
};

export default Home;
