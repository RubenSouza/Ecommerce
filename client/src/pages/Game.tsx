import { AiOutlineHeart } from "react-icons/ai";

import { BsFillCartPlusFill } from "react-icons/bs";

import image01 from "../assets/screenshots/01.jpg";
import image02 from "../assets/screenshots/02.jpg";
import image03 from "../assets/screenshots/03.jpg";
import image04 from "../assets/screenshots/04.jpg";
import image05 from "../assets/screenshots/05.jpg";
import image06 from "../assets/screenshots/06.jpg";
import image07 from "../assets/screenshots/07.jpg";
import image08 from "../assets/screenshots/08.jpg";
import image09 from "../assets/screenshots/09.jpg";
import image10 from "../assets/screenshots/10.jpg";
import GalleryCarousel from "../components/GalleryCarousel";
import GameItem from "../components/GameItem";
import GameCarousel from "../components/GameCarousel";
import popularBadge from "../assets/popularBadge.svg";
import { Title } from "../components/Title";

const Game = () => {
  const gallery = [
    <img src={image01} alt="screenshot" className="w-[900px]" />,
    <img src={image02} alt="screenshot" className="w-[900px]" />,
    <img src={image03} alt="screenshot" className="w-[900px]" />,
    <img src={image04} alt="screenshot" className="w-[900px]" />,
    <img src={image05} alt="screenshot" className="w-[900px]" />,
    <img src={image06} alt="screenshot" className="w-[900px]" />,
    <img src={image07} alt="screenshot" className="w-[900px]" />,
    <img src={image08} alt="screenshot" className="w-[900px]" />,
    <img src={image09} alt="screenshot" className="w-[900px]" />,
    <img src={image10} alt="screenshot" className="w-[900px]" />,
  ];

  // const games = [
  //   <GameItem />,
  //   <GameItem />,
  //   <GameItem />,
  //   <GameItem />,
  //   <GameItem />,
  //   <GameItem />,
  //   <GameItem />,
  //   <GameItem />,
  // ];

  return (
    <div className="w-screen flex flex-col items-center py-10">
      <div className="w-full lg:h-[600px] h-[300px]">
        <img
          src="https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5.png"
          alt="game wallpaper"
          className="w-full absolute right-0 left-0 top-0 h-[300px] md:h-[600px] object-cover object-top"
        />
      </div>
      <div
        className="w-full lg:w-[1100px] flex flex-col 
      md:flex-row justify-between px-4 lg:px-0 space-y-4"
      >
        <h3 className="text-3xl font-semibold">CyberPunk 2077</h3>
        <div
          className="bg-primary-700 rounded-md shadow-md shadow-gray-800 flex flex-col
        justify-center items h-[170px] w-full md:w-[400px] p-5 space-y-2 lg:absolute top-[550px] right-[380px]
        "
        >
          <p className="text-4xl font-semibold">R$ 199.99</p>
          <div className="m-auto w-full space-y-2 ">
            <div
              className="flex items-center justify-center
            rounded-md bg-[#f76195] h-12 w-full space-x-2 text-primary-50 font-semibold"
            >
              <BsFillCartPlusFill className="w-4 h-4" />
              <button>Add to Cart</button>
            </div>
            <div className="flex justify-center space-x-2 text-[#f231a5] font-semibold w-full">
              <AiOutlineHeart className="w-6 h-6" />
              <p>Wishlist it</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:px-0 lg:w-[1100px] h-[210px] lg:h-[270px] my-8">
        <GalleryCarousel slides={gallery} />
      </div>
      <div
        className="w-full lg:w-[1100px] px-4 lg:px-0 space-y-5 lg:space-y-0
      flex flex-col lg:flex-row justify-between text-base"
      >
        <div className="w-full lg:w-[600px] space-y-8">
          <div className="space-y-5">
            <Title title="Description" />
            <p className="text-base font-light">
              Cyberpunk 2077 é uma história de ação e aventura de mundo aberto
              dos criadores de The Witcher 3: Wild Hunt, que se passa em Night
              City, uma megalópole obcecada por poder, glamour e
              biomodificações. Você joga como V, um mercenário fora da lei atrás
              de um implante único que carrega a chave da imortalidade. Você
              pode personalizar aparatos cibernéticos, conjunto de habilidades e
              estilo de jogo do personagem e explorar uma vasta cidade onde as
              escolhas que você faz definem a história e o mundo ao seu redor.
            </p>
          </div>
          <div className="space-y-5 w-full text-sm">
            <Title title="System requirements" />
            <div
              className="w-full flex flex-col lg:flex-row  justify-between lg:space-x-10
            space-y-10 lg:space-y-0"
            >
              <div className="space-y-2 w-[300px]">
                <h4 className="font-bold">MÍNIMOS</h4>
                <div className="space-x-2">
                  <p className="inline font-bold">OS:</p>
                  <p className="inline">Windows 7 or 10 (64-bit) </p>
                </div>
                <div className="space-x-2">
                  <p className="inline font-bold">CPU:</p>
                  <p className="inline">Intel Core i5-3570K or AMD FX-8310</p>
                </div>
                <div className="space-x-2">
                  <p className="inline font-bold">RAM:</p>
                  <p className="inline">8GB</p>
                </div>
                <div className="space-x-2">
                  <p className="inline font-bold">GPU:</p>
                  <p className="inline">
                    Nvidia GeForce GTX 780 3GB or AMD Radeon RX 470 VRAM: 3GB
                  </p>
                </div>
                <div className="space-x-2">
                  <p className="inline font-bold">VRAM:</p>
                  <p className="inline">3GB</p>
                </div>
                <div className="space-x-2">
                  <p className="inline font-bold">Direct X:</p>
                  <p className="inline">Version 12</p>
                </div>
                <div className="space-x-2">
                  <p className="inline font-bold">Available Storage Space:</p>
                  <p className="inline">70GB HDD</p>
                </div>
              </div>
              <div className="space-y-2 w-[300px]">
                <h4 className="font-bold">RECOMENDADOS</h4>
                <div className="space-x-2">
                  <p className="inline font-bold">OS:</p>
                  <p className="inline">Windows 10 (64-bit)</p>
                </div>
                <div className="space-x-2">
                  <p className="inline font-bold">CPU:</p>
                  <p className="inline">
                    Intel Core i7-4790 or AMD Ryzen 3 3200G
                  </p>
                </div>
                <div className="space-x-2">
                  <p className="inline font-bold">RAM:</p>
                  <p className="inline">12GB</p>
                </div>
                <div className="space-x-2">
                  <p className="inline font-bold">GPU:</p>
                  <p className="inline">
                    GeForce GTX 1060 6GB, a GTX 1660 Super, or AMD Radeon RX 590
                  </p>
                </div>
                <div className="space-x-2">
                  <p className="inline font-bold">VRAM:</p>
                  <p className="inline">6GB</p>
                </div>
                <div className="space-x-2">
                  <p className="inline font-bold">Direct X:</p>
                  <p className="inline">Version 12</p>
                </div>

                <div className="space-x-2">
                  <p className="inline font-bold">Available Storage Space:</p>
                  <p className="inline">70GB SSD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[300px] flex-col space-y-4 font-light text-md">
          <div className="flex space-x-2">
            <div className="bg-[#3CD3C1] h-8 w-1" />
            <h3 className="text-2xl font-semibold">About</h3>
          </div>
          <div className="flex justify-between">
            <p className="">Genre:</p>
            <p className="">RPG, Ação</p>
          </div>

          <div className="flex justify-between flex-wrap">
            <p className="">Release date:</p>
            <p className="">10/12/2020</p>
          </div>
          <div className="flex justify-between">
            <p className="">Company:</p>
            <p className="">CD PROJEKT RED</p>
          </div>
          <div className="flex justify-between">
            <p className="">Company:</p>
            <p className="">CD PROJEKT RED</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[1100px] py-10 lg:px-0 space-y-4">
        <Title title="You may also like" />
        <div className="w-full">
          <img src={popularBadge} className="w-full lg:w-[1100px]" />
        </div>
        <div
          className="flex justify-between w-full h-[240px] md:h-[270px] 
  px-4 lg:px-0"
        >
          {/* <GameCarousel slides={games} /> */}
        </div>
      </div>
    </div>
  );
};

export default Game;
