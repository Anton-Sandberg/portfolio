import Highlight from "@components/common/Highlight";

const ProfileFacts = () => {
  return (
    <div className="space-y-2">
      <div>
        <Highlight>Namn:</Highlight> Anton Såndberg.
      </div>
      <div>
        <Highlight>Ålder:</Highlight> 31 år.
      </div>
      <div>
        <Highlight>Bosatt:</Highlight> Eskilstuna (Öppen för pendling).
      </div>
      <div>
        <Highlight>Studerar:</Highlight> .NET-utveckling på KYH.
      </div>
    </div>
  );
};

export default ProfileFacts;
