import React from "react";

interface TestimonialCardProps {
  name: string;
  quote: string;
}

const TestimonialCard = ({ name, quote }: TestimonialCardProps) => {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 flex flex-col h-full w-full">
      <div className="flex items-center gap-4 mb-4">
        <div>
          <p className="font-semibold">{name}</p>
        </div>
      </div>
      <p className="text-neutral-200 italic mb-4">“{quote}”</p>
      <div className="mt-auto text-right text-sm">★ ★ ★ ★ ★</div>
    </div>
  );
};

export default TestimonialCard;
