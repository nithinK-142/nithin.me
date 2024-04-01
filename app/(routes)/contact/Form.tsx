"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/Button";
import axios from "axios";
import toast from "react-hot-toast";

const defaultValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(4, "Name is required")
    .max(20, "Name is too long!"),
  email: z.string().trim().email("Invalid email"),
  subject: z.string().max(20, "Subject is too long!").optional(),
  message: z.string().min(6, "Message is required"),
});

export type FormSchemaType = z.infer<typeof formSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      const responsePromise = axios.post("/api/send-mail", { data });
      toast.promise(responsePromise, {
        loading: "processing...",
        success: (response) => {
          reset(defaultValues);
          return response.data.message;
        },
        error: (error) => error.response.data.error,
      });
    } catch (error: any) {
      console.log(error.response);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-full md:max-w-md">
      <div className="mb-4 relative">
        <label htmlFor="name" className="block mb-2 text-sm">
          Name
        </label>
        <span className="absolute right-0 -bottom-5 text-xs font-medium text-red-500">
          {errors.name?.message}
        </span>
        <input
          type="text"
          id="name"
          {...register("name")}
          placeholder="Homelander"
          className={`w-full px-2 py-1 rounded-sm outline-none bg-white/70 dark:bg-neutral-700 ${
            errors.name && "outline outline-red-500/30"
          }`}
        />
      </div>

      <div className="mb-4 relative">
        <label htmlFor="email" className="block mb-2 text-sm">
          Email
        </label>
        <span className="absolute right-0 -bottom-5 text-xs font-medium text-red-500">
          {errors.email?.message}
        </span>
        <input
          type="text"
          id="email"
          {...register("email")}
          placeholder="leaderof7@vought.corp"
          className={`w-full px-2 py-1 rounded-sm outline-none bg-white/70 dark:bg-neutral-700 ${
            errors.email && "outline outline-red-500/30"
          }`}
        />
      </div>

      <div className="mb-4 relative">
        <label htmlFor="subject" className="block mb-2 text-sm">
          Subject
        </label>
        <span className="absolute right-0 -bottom-5 text-xs font-medium text-red-500">
          {errors.subject?.message}
        </span>
        <input
          type="text"
          id="subject"
          {...register("subject")}
          placeholder="To conquer earth! (optional)"
          className={`w-full px-2 py-1 rounded-sm outline-none bg-white/70 dark:bg-neutral-700 ${
            errors.subject && "outline outline-red-500/30"
          }`}
        />
      </div>

      <div className="mb-4 relative">
        <label className="block mb-2 text-sm" htmlFor="message">
          Message
        </label>
        <span className="absolute right-0 -bottom-5 text-xs font-medium text-red-500">
          {errors.message?.message}
        </span>
        <textarea
          className={`w-full min-h-full px-2 py-1 rounded-sm outline-none bg-white/70 dark:bg-neutral-700 ${
            errors.message && "outline outline-red-500/30"
          }`}
          rows={4}
          {...register("message")}
          placeholder="I would like to ask you..."
        ></textarea>
      </div>

      <Button buttonText="Send Message" fontWeight="medium" type="submit" />
    </form>
  );
};

export default Form;
