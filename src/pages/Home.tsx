import Hero from "@/components/home-page/Hero";
import TechIcons from "@/components/home-page/TechIcons";
import WelcomeMessage from "@/components/home-page/WelcomeMessage";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-10">
      <div>
        <WelcomeMessage />
      </div>

      <div className="flex flex-col items-center space-y-6">
        <Hero />
        <TechIcons />
      </div>
    </div>
  );
};

export default Home;
