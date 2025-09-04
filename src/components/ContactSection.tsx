"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useInView } from "@/hooks/useInView";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CONTACT } from "@/config/contact";

const ContactSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [submitting, setSubmitting] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
    inquiryType: "General",
    preferredTime: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const id = toast.loading("Sending message...");
    setTimeout(() => {
      toast.success("Message sent! Thank you.", {
        id,
        action: {
          label: "Call us",
          onClick: () => (window.location.href = `tel:${CONTACT.phone}`),
        },
      });
      setSubmitting(false);
      setForm({ name: "", email: "", message: "", inquiryType: "General", preferredTime: "" });
    }, 900);
  };

  return (
    <section id="contact" className="py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Contact {CONTACT.businessName}
        </h2>
        <p className="text-center text-gray-700 max-w-[65ch] leading-7 mx-auto">
          We would love to hear from you — whether it’s to book a treatment, inquire about properties,
          or plan an unforgettable stay.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-6">
            <div className="rounded-2xl glass-panel p-6 hover-shimmer">
              <h3 className="text-xl font-semibold mb-3">{CONTACT.businessName}</h3>

              <div className="text-gray-700 mb-3">
                {CONTACT.addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>

              <div className="text-gray-700 mb-3">
                <strong>Hours: </strong>
                <span>{CONTACT.hours}</span>
              </div>

              <div className="text-gray-700 space-y-1">
                <div>
                  <strong>Phone: </strong>
                  <a href={`tel:${CONTACT.phone}`} className="text-[#007bff] hover:underline">
                    {CONTACT.phonePretty}
                  </a>
                </div>
                <div>
                  <strong>Email: </strong>
                  <a href={`mailto:${CONTACT.email}`} className="text-[#007bff] hover:underline">
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <Button asChild variant="outline">
                  <a href={CONTACT.mapPlaceUrl} target="_blank" rel="noreferrer">
                    Locate Us
                  </a>
                </Button>

                <Button asChild variant="outline" className="bg-green-600 hover:bg-green-700 text-white border-green-600">
                  <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">
                    WhatsApp Us
                  </a>
                </Button>

                <Button asChild className="bg-[#007bff] hover:bg-[#0056b3] btn-lux btn-gold-hover">
                  <a href="#booking">Request a Call</a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden glass-panel">
              <iframe
                width="100%"
                height="240"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAWp1Blvwa3DrCWJ3IinkxwUgSr9AosRaw&q=Serenity+Beach+Resort,+Ocean+Dr+South+Abaco,+Bahamas&zoom=15"
                title="Serenity Beach Resort Location"
              />
            </div>
          </div>

          <div className="rounded-2xl glass-panel p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-1">Send Us a Message</h3>
            <p className="text-sm text-gray-600 mb-4">
              We’ll respond by email or phone. For urgent inquiries, call {CONTACT.phonePretty}.
            </p>

            <form onSubmit={onSubmit} className="grid gap-4" aria-label="Contact form">
              <div className="grid gap-3 sm:grid-cols-2">
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
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Select
                  value={form.inquiryType}
                  onValueChange={(v) => setForm((f) => ({ ...f, inquiryType: v }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General">General</SelectItem>
                    <SelectItem value="Property">Property</SelectItem>
                    <SelectItem value="Activities">Activities</SelectItem>
                    <SelectItem value="Spa">Spa</SelectItem>
                    <SelectItem value="Events">Events</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  type="time"
                  placeholder="Preferred contact time"
                  value={form.preferredTime}
                  onChange={(e) => setForm((f) => ({ ...f, preferredTime: e.target.value }))}
                />
              </div>

              <Textarea
                placeholder="Message"
                required
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="min-h-[140px]"
              />
              <div className="flex items-center justify-between gap-3">
                <Button
                  type="submit"
                  className="bg-[#007bff] hover:bg-[#0056b3] btn-lux btn-gold-hover"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>

                <div className="text-sm text-gray-600">
                  Or{" "}
                  <a href={CONTACT.whatsappUrl} className="text-green-600 hover:underline" target="_blank" rel="noreferrer">
                    WhatsApp us
                  </a>
                  {" "}or{" "}
                  <a href={`tel:${CONTACT.phone}`} className="text-[#007bff] hover:underline">
                    call {CONTACT.phonePretty}
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;