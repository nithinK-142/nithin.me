"use client";
import { FormEvent, useState } from "react";
import axios from "axios";
import Button from "@/components/Button";
import toast from "react-hot-toast";

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const defaultValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Form = () => {
  const [formData, setFormData] = useState<FormData>(defaultValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const responsePromise = axios.post("/api/send-mail", { data: formData });

      toast.promise(responsePromise, {
        loading: "processing...",
        success: (response) => {
          return response.data.message;
        },
        error: (error) =>
          `User verification failed: ${error.response.data.error}`,
      });
    } catch (error: any) {
      console.log(error.response);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-full md:max-w-md">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Homelander"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-2 py-1 rounded-sm outline-none bg-white/70 dark:bg-neutral-700"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="leaderof7@vought.corp"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-2 py-1 rounded-sm outline-none bg-white/70 dark:bg-neutral-700"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block mb-2 text-sm">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="To conquer earth!"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-2 py-1 rounded-sm outline-none bg-white/70 dark:bg-neutral-700"
        />
      </div>
      <label className="block mb-2 text-sm" htmlFor="message">
        Message
      </label>
      <textarea
        className="w-full min-h-full px-2 py-1 rounded-sm outline-none bg-white/70 dark:bg-neutral-700"
        rows={4}
        name="message"
        id="message"
        placeholder="I would like to ask you..."
        required
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <Button buttonText="Send Message" fontWeight="medium" type="submit" />
    </form>
  );
};

export default Form;
