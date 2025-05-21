import { useContactForm } from "@/hooks/useContactForm";
import InputField from "@/components/input/InputField";
import InputTextArea from "@/components/input/InputTextArea";
import PrimaryButton from "@/components/PrimaryButton";
import CopyEmailButton from "@/components/contact-page/CopyEmailButton";
import FormStatusMessage from "@/components/contact-page/FormStatusMessage";
import ContactFormHeader from "@/components/contact-page/ContactFormHeader";

const ContactForm = () => {
  const { register, handleSubmit, errors, onSubmit, isEmailSent, isSending } =
    useContactForm();

  return (
    <div className=" bg-black rounded-xl text-lg">
      <ContactFormHeader isEmailSent={isEmailSent} />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Namn"
          name="name"
          type="text"
          register={register("name", { required: "Ange namn." })}
          error={errors.name}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          register={register("email", {
            required: "Ange email.",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email format",
            },
          })}
          error={errors.email}
        />

        <InputTextArea
          label="Meddelande"
          name="message"
          register={register("message", { required: "Ange meddelande." })}
          error={errors.message}
        />

        <PrimaryButton type="submit" className="w-full">
          Skicka Meddelande
        </PrimaryButton>
      </form>

      <FormStatusMessage isSending={isSending} isEmailSent={isEmailSent} />

      <CopyEmailButton />
    </div>
  );
};

export default ContactForm;
