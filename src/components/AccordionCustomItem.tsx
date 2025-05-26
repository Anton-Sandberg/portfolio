import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import type { ReactNode } from "react";
import Highlight from "@components/common/Highlight";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  value: string;
  title: ReactNode;
  children: ReactNode;
}

const AccordionCustomItem = ({ value, title, children }: Props) => {
  return (
    <AccordionItem value={value} className="bg-neutral-900 rounded-2xl p-4">
      <AccordionTrigger className="group flex justify-between items-center w-full">
        <Highlight className="text-xl text-left">{title}</Highlight>
        <IoIosArrowDown className="size-7 group-data-[state=open]:rotate-180" />
      </AccordionTrigger>
      <AccordionContent className="rounded-2xl pt-2">
        <div className="w-full">{children}</div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionCustomItem;
