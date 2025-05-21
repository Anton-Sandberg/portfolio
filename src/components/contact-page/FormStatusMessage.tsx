interface FormStatusMessageProps {
  isSending: boolean;
  isEmailSent: boolean | null;
}

const FormStatusMessage = ({ isSending, isEmailSent }: FormStatusMessageProps) => {
  return (
    <div className="mt-2">
      {isSending && <p className="text-neutral-400">Skickar meddelande...</p>}
      {!isSending && isEmailSent === true && (
        <p className="text-success">Ditt meddelande har skickats!</p>
      )}
      {!isSending && isEmailSent === false && (
        <p className="text-error">Något gick fel, försök igen senare.</p>
      )}
    </div>
  );
};

export default FormStatusMessage;
