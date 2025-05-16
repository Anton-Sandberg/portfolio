import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Highlight = ({ children, className }: Props) => {
  return (
    <span className={clsx("font-extrabold text-highlight", className)}>{children}</span>
  );
};

export default Highlight;
