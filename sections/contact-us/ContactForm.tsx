"use client";

import Button from "@/components/reusable/Button";
import SectionHeading from "@/components/reusable/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { z } from "zod";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { addUserMessage } from "@/actions/mail-collector";
import { ContactUsFormPayload } from "@/types/general";
import { useForm } from "react-hook-form";
import { HInput } from "@/components/reusable/Input";

const schema = z.object({
  phone: z
    .string()
    .min(8, "Phone Number must be at least 8 characters")
    .max(11, "Phone Number must be at most 11 characters"),
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.email("Email is required"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FD = z.infer<typeof schema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FD) => {
    try {
      const res = await addUserMessage({ ...data } as ContactUsFormPayload);
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success("Your inquery is submitted successfully");
      }
      reset();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="bg-secondary py-24 px-5">
      <SectionHeading
        title="Send Us a Message"
        align="center"
        className="mb-12"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {" "}
          {/* Grid layout for inputs */}
          <div>
            <HInput
              label="Your Name"
              placeholder="John Doe"
              className="w-full border border-secondary/50 rounded-lg px-4 py-3 bg-white text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
              {...register("name")}
              error={errors.name ? errors.name.message : ""}
            />
          </div>
          <div>
            <HInput
              label="Phone Number"
              placeholder="+1 (555) 123-4567"
              className="w-full border border-secondary/50 rounded-lg px-4 py-3 bg-white text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
              {...register("phone")}
              error={errors.phone ? errors.phone.message : ""}
            />
          </div>
          <div className="md:col-span-2">
            {" "}
            {/* Email spans both columns */}
            <HInput
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              className="w-full border border-secondary/50 rounded-lg px-4 py-3 bg-white text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
              {...register("email")}
              error={errors.email ? errors.email.message : ""}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="form-message"
            className="block text-lg font-medium text-primary mb-2"
          >
            Your Message
          </label>
          <Textarea
            id="form-message"
            placeholder="Tell us how we can help..."
            rows={10}
            {...register("message")}
            className="w-full border mb-3 border-secondary/50 rounded-lg px-4 py-3 bg-white text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors resize-y"
          />
          {errors.message && errors.message.message && (
            <p className="text-sm text-red-500 bg-third py-1 px-2 rounded-3xl w-fit">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="flex justify-end">
          <Button text="Submit Inquiry" type="submit" />
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
