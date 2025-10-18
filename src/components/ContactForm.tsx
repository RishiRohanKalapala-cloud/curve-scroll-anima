import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-background py-20 px-4 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Have a project in mind? Drop me a message.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          <div className="group relative">
            <input
              type="text"
              placeholder="Your Name"
              {...register("name")}
              className="w-full border-0 border-b-2 border-muted-foreground/30 bg-transparent px-0 py-4 text-lg text-black placeholder:text-muted-foreground/50 focus:border-black focus:outline-none focus:ring-0 transition-colors"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="group relative">
            <input
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className="w-full border-0 border-b-2 border-muted-foreground/30 bg-transparent px-0 py-4 text-lg text-black placeholder:text-muted-foreground/50 focus:border-black focus:outline-none focus:ring-0 transition-colors"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="group relative">
            <textarea
              placeholder="Your Message"
              rows={4}
              {...register("message")}
              className="w-full resize-none border-0 border-b-2 border-muted-foreground/30 bg-transparent px-0 py-4 text-lg text-black placeholder:text-muted-foreground/50 focus:border-black focus:outline-none focus:ring-0 transition-colors"
            />
            {errors.message && (
              <p className="mt-2 text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <div className="flex justify-center pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative overflow-hidden bg-black px-12 py-4 text-lg font-medium text-white transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              <span className="relative z-10">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
              <div className="absolute inset-0 -z-0 bg-accent opacity-0 transition-opacity group-hover:opacity-20" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
