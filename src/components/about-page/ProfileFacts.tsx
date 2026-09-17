import Highlight from "@components/common/Highlight";

const getAge = (birthYear: number, birthMonth: number, birthDay: number) => {
  const today = new Date();
  let age = today.getFullYear() - birthYear;
  const currentMonth = today.getMonth() + 1;
  const hasHadBirthday =
    currentMonth > birthMonth ||
    (currentMonth === birthMonth && today.getDate() >= birthDay);

  if (!hasHadBirthday) age -= 1;

  return age;
};

const ProfileFacts = () => {
  const age = getAge(1994, 2, 1);

  return (
    <div className="space-y-2">
      <div>
        <Highlight>Namn:</Highlight> Anton Såndberg.
      </div>
      <div>
        <Highlight>Ålder:</Highlight> {age} år.
      </div>
      <div>
        <div>
          <Highlight>Bosatt:</Highlight> Eskilstuna.
        </div>
        <div>Öppen för att pendla eller flytta vid rätt tjänst.</div>
      </div>
    </div>
  );
};

export default ProfileFacts;
