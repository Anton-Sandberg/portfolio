import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const baseClass = "max-w-screen-xl mx-auto px-12 sm:px-14 md:px-10 lg:px-24 xl:px-30";

const Container = ({ children, className }: Props) => {
  return <div className={clsx(baseClass, className)}>{children}</div>;
};

export default Container;
