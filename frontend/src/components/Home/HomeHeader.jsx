import logo from "../../assets/logo.png";
import HomeLinks from "./HomeLinks";

const HomeHeader = () => {
  return (
    <nav className="bg-primary flex justify-between items-center py-5 px-6">
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

      <h2 className="text-3xl font-bold text-defaultWhiteText italic">
        Teste 3C Lab
      </h2>

      <HomeLinks />
    </nav>
  );
};

export default HomeHeader;
