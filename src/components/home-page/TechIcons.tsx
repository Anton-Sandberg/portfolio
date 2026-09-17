import CSharpIcon from "@components/icons/CSharpIcon";
import CssIcon from "@components/icons/CssIcon";
import DotNetIcon from "@components/icons/DotNetIcon";
import HtmlIcon from "@components/icons/HtmlIcon";
import JavaScriptIcon from "@components/icons/JavaScriptIcon";
import ReactIcon from "@components/icons/ReactIcon";
import TypeScriptIcon from "@components/icons/TypeScriptIcon";
import UnityIcon from "@components/icons/UnityIcon";
import SharePointIcon from "@components/icons/SharePointIcon";

const TechIcons = () => {
  return (
    <div className="grid w-fit grid-cols-3 gap-4">
      <CSharpIcon className="size-14 text-[#9B4F96]" />
      <DotNetIcon className="size-14 text-[#623697]" />
      <UnityIcon className="size-14 text-[#cacaca]" />
      <ReactIcon className="size-14 text-[#61DAFB]" />
      <JavaScriptIcon className="size-14 text-[#F0DB4F]" />
      <HtmlIcon className="size-14 text-[#E44D26]" />
      <CssIcon className="size-14 text-[#1572B6]" />
      <TypeScriptIcon className="size-14 text-[#007acc]" />
      <SharePointIcon className="size-14" />
    </div>
  );
};

export default TechIcons;
