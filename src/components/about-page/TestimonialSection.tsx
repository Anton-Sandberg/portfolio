import Highlight from "@components/common/Highlight";
import TestimonialCard from "./TestimonialCard";
const TestimonialSection = () => {
  return (
    <section className=" max-w-3xl mx-auto pt-6 pb-2">
      <Highlight>
        <h3 className="text-xl text-center mb-4">Testimonials</h3>
      </Highlight>
      <div className="flex w-full justify-between gap-6">
        <TestimonialCard name="Påhittade Per" quote="Anton är så duktig!" />
        <TestimonialCard name="Låtsas Lars" quote="Anton är bra!" />
        <TestimonialCard name="Fiktiva Frida" quote="Anton har talang!" />
      </div>
    </section>
  );
};

export default TestimonialSection;
