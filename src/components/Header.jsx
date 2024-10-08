import globeIcon from "../assets/discover.svg";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="inline-flex gap-2 items-center py-3 sm:py-3.5">
        <div className="aspect-square w-6 md:w-8 overflow-hidden">
          <img src={globeIcon} alt="" className="w-full h-full" />
        </div>
        <h1 className="text-2xl md:text-3xl font-sans text-gray-600">
          Discover
        </h1>
      </div>
      
    </div>
  );
};

export default Header;
