import React from "react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PrimaryButton = ({ children, className = "", ...props }: PrimaryButtonProps) => {
  return (
    <button
      className={`px-4 py-2 bg-neutral-800  text-highlight rounded-lg hover:bg-accent-secondary transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
