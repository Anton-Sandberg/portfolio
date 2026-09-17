import Hero from "@/components/home-page/Hero";
import TechIcons from "@/components/home-page/TechIcons";
import WelcomeMessage from "@/components/home-page/WelcomeMessage";

const Home = () => {
  return (
    <div className="grid grid-cols-1 items-center gap-8 py-6 md:min-h-[calc(100vh-10.5rem)] md:grid-cols-2 md:py-8">
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
