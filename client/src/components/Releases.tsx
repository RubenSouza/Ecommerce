import gameItem from "../assets/gameItem.svg";

const Releases = () => {
  return (
    <div
      className="bg-primary-50 w-full h-full text-primary-600 flex flex-col py-6
    items-center justify-center"
    >
      <h3>Releases</h3>
      <div className="flex justify-between space-x-6 w-[800px]">
        <img src={gameItem} alt="game item" className="w-64" />
        <img src={gameItem} alt="game item" className="w-64" />
        <img src={gameItem} alt="game item" className="w-64" />
      </div>
    </div>
  );
};

export default Releases;
