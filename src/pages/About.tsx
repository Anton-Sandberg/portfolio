import AboutMeAccordion from "@/components/about-page/AboutMeAccordion";
import ProfileFacts from "@/components/about-page/ProfileFacts";
import { FaUser } from "react-icons/fa";

const About = () => {
  return (
    <section className="max-w-3xl mx-auto py-10 flex flex-col md:flex-row justify-center gap-6">
      <div className="flex justify-center md:self-start">
        <div className="bg-neutral-900 flex p-4 flex-col justify-between w-full rounded-2xl">
          <FaUser className="size-50 p-4 self-center" />
          <ProfileFacts />
        </div>
      </div>
      <div className="flex-1">
        <AboutMeAccordion />
      </div>
    </section>
  );
};

export default About;
