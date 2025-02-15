import HomeHeader from "../components/Home/homeHeader";
import HomeIntro from "../components/Home/HomeIntro";
import HomeOptions from "../components/Home/HomeOptions";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-20 mb-16">
      <HomeHeader />
      <HomeIntro />
      <HomeOptions />
    </div>
  );
};

export default Home;
