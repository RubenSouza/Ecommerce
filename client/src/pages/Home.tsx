// import imageTeste from "../assets/imageTeste.svg";

import Releases from "../components/Releases";
import HomeCarousel from "../components/HomeCarousel";
import Thumb from "../components/Thumb";
import { useGetHomeQuery } from "../redux/services/games";
import PublisherSection from "../components/PublisherSection";
import ScreenLoading from "../components/ScreenLoading";
import { useEffect, useLayoutEffect, useRef } from "react";

const Home = () => {
  const { data: home, isLoading, isFetching, isError } = useGetHomeQuery("");

  const slides = home?.home?.highlights?.map((highlight: any) => (
    <Thumb
      key={highlight.id}
      title={highlight.title}
      description={highlight.highlight.short_description}
      badge={highlight.highlight.badge}
      badgeColor={highlight.highlight.badge_color}
      cover={highlight.highlight.cover}
      link={highlight.highlight.link}
    />
  ));

  const startRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToStart = () => {
      if (startRef.current) {
        startRef.current.scrollIntoView({ behavior: "instant" });
      }
    };
    scrollToStart();
  }, []);
  if (isLoading || isFetching) return <ScreenLoading />;

  return (
    <>
      <div className="absolute -top-20 h-2" ref={startRef}></div>
      <div className="w-full flex flex-col space-y-5 ">
        <section
          className="w-full h-full flex justify-center items-start"
          id="start"
        >
          <div className="h-[500px] md:h-[600px] lg:h-[650px] w-full lg:w-[1400px]">
            {slides && <HomeCarousel slides={slides} />}
          </div>
        </section>
        <section className="flex items-center justify-center w-full">
          <Releases />
        </section>
        {home?.home?.publishers.map((publisher: any, i: number) => (
          <section className="flex items-center justify-center w-full" key={i}>
            <PublisherSection
              publisherId={publisher.publisher}
              title={publisher.name}
            />
          </section>
        ))}
      </div>
    </>
  );
};

export default Home;
