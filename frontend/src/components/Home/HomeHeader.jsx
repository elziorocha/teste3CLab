import logo from "../../assets/logo.png";
import { FaGithub, FaLinkedin, FaUserCircle } from "react-icons/fa";

const HomeHeader = () => {
  return (
    <nav className="bg-secondary/75 flex justify-between items-center py-5 px-6">
      <section className="flex gap-1.5 items-center">
        <img
          src={logo}
          alt="logo do website"
          className="size-16 drop-shadow-md"
        />
        <h1 className="text-3xl italic text-defaultWhiteText font-semibold text-shadow-md">
          PampaDevs
        </h1>
      </section>
      <section className="flex gap-6">
        <FaGithub
          className="size-12 bg-defaultWhite rounded-full p-1 cursor-pointer
        hover:bg-defaultDark hover:text-defaultWhiteText transition-all duration-300"
        />
        <FaUserCircle
          className="size-12 bg-defaultWhite rounded-full p-1 cursor-pointer
        hover:bg-defaultDark hover:text-defaultWhiteText transition-all duration-300"
        />
        <FaLinkedin
          className="size-12 bg-defaultWhite rounded-md p-0.5 cursor-pointer
        hover:bg-defaultDark hover:text-defaultWhiteText transition-all duration-300"
        />
      </section>
    </nav>
  );
};

export default HomeHeader;
