import clsx from "clsx";

type Props = {
  className?: string;
};

const SharePointIcon = ({ className }: Props) => {
  return (
    <svg
      className={clsx("text-[#038387]", className ?? "size-full")}
      viewBox="0 0 128 128"
      role="img"
      aria-label="SharePoint"
    >
      <g fill="currentColor">
        <circle cx="72" cy="28" r="24" opacity="0.75" />
        <circle cx="91" cy="63" r="29" opacity="0.9" />
        <circle cx="70" cy="99" r="25" opacity="0.75" />
        <rect x="8" y="24" width="66" height="80" rx="8" />
      </g>
      <path
        d="M52 48c-5-3-10-5-16-5-7 0-11 3-11 7 0 5 4 7 13 10 13 4 20 10 20 21 0 13-10 22-27 22-8 0-17-2-22-5l5-14c5 3 11 5 18 5 7 0 11-3 11-7s-3-7-12-10C18 68 10 62 10 51c0-13 11-22 27-22 8 0 15 2 20 4l-5 15Z"
        fill="#fff"
      />
    </svg>
  );
};

export default SharePointIcon;
