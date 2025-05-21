interface ContactFormHeaderProps {
  isEmailSent: boolean | null;
}

const ContactFormHeader = ({ isEmailSent }: ContactFormHeaderProps) => {
  return (
    <h2 className="text-4xl pb-8 text-center">
      {isEmailSent === true ? (
        <span>Tack för ditt meddelande!</span>
      ) : (
        <span>Hör gärna av dig!</span>
      )}
    </h2>
  );
};

export default ContactFormHeader;
