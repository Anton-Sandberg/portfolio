import PrimaryButton from "@/components/PrimaryButton";
import resume from "@/assets/resumeTemplate.pdf";

const ResumeDownloadCard = () => {
  return (
    <div className="text-center">
      <p className="mb-6 text-xl font-medium">
        Här kan du ladda ner mitt CV i PDF-format.
      </p>
      <a href={resume} download>
        <PrimaryButton className="px-6 py-3">Ladda ner CV</PrimaryButton>
      </a>
    </div>
  );
};

export default ResumeDownloadCard;
