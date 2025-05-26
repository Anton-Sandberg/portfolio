import { Accordion } from "@radix-ui/react-accordion";
import AccordionCustomItem from "../AccordionCustomItem";
import { aboutMeData } from "@/constants/aboutMeData";

const AboutMeAccordion = () => {
  return (
    <Accordion type="single" collapsible className="space-y-5">
      {aboutMeData.map(({ value, title, content }) => (
        <AccordionCustomItem key={value} value={value} title={title}>
          {content}
        </AccordionCustomItem>
      ))}
    </Accordion>
  );
};

export default AboutMeAccordion;
