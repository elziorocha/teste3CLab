import HomeFooter from "../components/Home/HomeFooter";
import HomeHeader from "../components/Home/homeHeader";
import HomeIntro from "../components/Home/HomeIntro";
import HomeOptions from "../components/Home/HomeOptions";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="flex flex-col gap-20">
        <HomeHeader />
        <HomeIntro />
        <HomeOptions />
      </div>
      <HomeFooter />
    </div>
  );
};

export default Home;
