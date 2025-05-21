import { CONTACT_EMAIL } from "@/constants/contact";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4">
      <span className="block">Eller mejla:</span>
      <button
        onClick={handleCopyEmail}
        className="hover:text-highlight hover:underline transition"
      >
        <span>{copied ? "Kopierad!" : CONTACT_EMAIL}</span>
        <FaCopy className="mx-2 inline" />
      </button>
    </div>
  );
};

export default CopyEmailButton;
