import AboutMeAccordion from "@/components/about-page/AboutMeAccordion";
import ProfileFacts from "@/components/about-page/ProfileFacts";
import ProfilePicture from "@assets/images/profile-picture.jpg";

const About = () => {
  return (
    <section>
      <div className="max-w-3xl mx-auto py-10 flex flex-col md:flex-row justify-center gap-6">
        <div className="flex justify-center md:self-start">
          <div className="bg-neutral-900 flex p-4 flex-col justify-between w-full rounded-2xl">
            <img
              src={ProfilePicture}
              alt="Profile"
              className="w-32 object-contain mb-4 rounded-2xl border-4 border-neutral-800 self-center"
            />

            <ProfileFacts />
          </div>
        </div>
        <div className="flex-1">
          <AboutMeAccordion />
        </div>
      </div>
    </section>
  );
};

export default About;
