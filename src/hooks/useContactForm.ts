import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import type { ContactFormData } from "@/types/ContactFormData";
import { useState } from "react";

export const useContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const [isEmailSent, setIsEmailSent] = useState<boolean | null>(null);
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSending(true);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          title: data.title || "Portfolio Inquiry",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsEmailSent(true);
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setIsEmailSent(false);
    } finally {
      setIsSending(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isEmailSent,
    isSending,
  };
};
