"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { toast } from "sonner";
import { useInView } from "@/hooks/useInView";

const ContactSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [submitting, setSubmitting] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const id = toast.loading("Sending message...");
    setTimeout(() => {
      toast.success("Message sent! Thank you.", { id });
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  return (
    <section id="contact" className="py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          We love our guests, so feel free to visit during normal business hours.
        </p>
        <div className="mt-6 text-center">
          <Button asChild variant="outline">
            <a href="https://goo.gl/maps/V8ZmdfWyqCuv6bcYA">Locate Us</a>
          </Button>
        </div>

        <div className="max-w-xl mx-auto mt-10 p-6 rounded-lg border bg-white shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <form onSubmit={onSubmit} className="grid gap-4">
            <Input
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
            <Input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
            <Textarea
              placeholder="Message"
              required
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              className="min-h-[140px]"
            />
            <Button
              type="submit"
              className="bg-[#007bff] hover:bg-[#0056b3]"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;