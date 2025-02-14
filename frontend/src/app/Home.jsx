import HomeHeader from "../components/Home/homeHeader";
import HomeIntro from "../components/Home/HomeIntro";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-16 mb-16">
      <HomeHeader />
      <HomeIntro />
    </div>
  );
};

export default Home;
