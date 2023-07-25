import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full px-5 lg:px-24 flex flex-col bg-white py-20
    text-primary-600 text-sm items-center"
      >
        <div className="w-full h-full xl:w-[1024px] space-y-2">
          <Logo className="w-28" dark={true} />
          <div className="w-full h-full grid grid-cols-2 gap-x-16 gap-y-5 md:flex justify-between">
            <div>
              <h5 className="font-bold">Contact</h5>
              <div className="h-1 bg-[#33ddc9] w-8" />
              <p>suporte@koigames.com</p>
              <p>+55 83 81929969</p>
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
              <p>Rua José Pereira</p>
              <p>220 - 58401369</p>
              <p>Campina Grande, Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
