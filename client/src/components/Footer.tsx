import darkLogo from "../assets/darkLogo.svg";

const Footer = () => {
  return (
    <div className="w-full h-full">
      <div
        className="px-24 flex flex-col bg-white py-6
    text-primary-600 text-sm items-center"
      >
        <div className="w-[1024px]">
          <img src={darkLogo} alt="dark logo" className="w-24" />
          <div className="flex justify-between space-x-6">
            <div>
              <h5 className="font-bold">Contact</h5>
              <div className="h-1 bg-[#33ddc9] w-8" />
              <p>suporte@wongames.gg</p>
              <p>+55 21 33283719</p>
            </div>
            <div>
              <h5 className="font-bold">Follow US</h5>
              <div className="h-1 bg-[#33ddc9] w-8" />
              <p>Instagram</p>
              <p>Twitter</p>
              <p>YouTube</p>
              <p>Facebook</p>
            </div>
            <div>
              <h5 className="font-bold">Links</h5>
              <div className="h-1 bg-[#33ddc9] w-6" />
              <p>Store</p>
              <p>Explore</p>
              <p>Search</p>
              <p>FAQ</p>
            </div>
            <div>
              <h5 className="font-bold">Localization</h5>
              <div className="h-1 bg-[#3CD3C1] w-8" />
              <p>Rua 7 de Maio</p>
              <p>527 - 89020330</p>
              <p>Rio de Janeiro, Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
