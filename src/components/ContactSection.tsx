"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { toast } from "sonner";
import { useInView } from "@/hooks/useInView";

const CONTACT = {
  name: "Serenity Beach Resort",
  addressLines: ["Schooner Bay, Crossing Rocks", "Abaco, The Bahamas"],
  hours: "Open today 09:00 am – 05:00 pm",
  phone: "4067506135",
  phonePretty: "(406) 750-6135",
  email: "mhawn@ranchesatbeltcreek.com",
  mapSrc:
    "https://maps.googleapis.com/maps/api/js/StaticMapService.GetMapImage?1m2&1i74724&2i111011&2e1&3u10&4m2&1u600&2u300&5m6&1e0&5sen-US&6sus&10b1&12b1&14i47083502&8e1&client=google-maps-embed&token=7436",
};

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
    // Simulate network delay for demo purposes
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
          Contact Serenity Beach Resort
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          We would love to hear from you — whether it’s to book a treatment, inquire about properties,
          or plan an unforgettable stay.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
          {/* Left: Contact Info + Map */}
          <div className="space-y-6">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{CONTACT.name}</h3>

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
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="text-[#007bff] hover:underline"
                  >
                    {CONTACT.phonePretty}
                  </a>
                </div>
                <div>
                  <strong>Email: </strong>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-[#007bff] hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <Button asChild variant="outline">
                  <a href="https://goo.gl/maps/V8ZmdfWyqCuv6bcYA" target="_blank" rel="noreferrer">
                    Locate Us
                  </a>
                </Button>

                <Button asChild className="bg-[#007bff] hover:bg-[#0056b3]">
                  <a href="#booking">Request a Call</a>
                </Button>
              </div>

              <p className="mt-4 text-xs text-gray-500">
                This site is protected by reCAPTCHA and the Google{" "}
                <a className="text-[#007bff] hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a className="text-[#007bff] hover:underline" href="https://policies.google.com/terms" target="_blank" rel="noreferrer">
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden border shadow-sm">
              <img
                src={CONTACT.mapSrc}
                alt="Map of Serenity Beach Resort"
                className="w-full h-60 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <p className="text-sm text-gray-600 mb-4">
              Prefer to message us? Fill out the form and we’ll get back to you shortly.
            </p>

            <form onSubmit={onSubmit} className="grid gap-4" aria-label="Contact form">
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
              <div className="flex items-center justify-between gap-3">
                <Button
                  type="submit"
                  className="bg-[#007bff] hover:bg-[#0056b3]"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>

                <div className="text-sm text-gray-500">
                  Or call us:{" "}
                  <a href={`tel:${CONTACT.phone}`} className="text-[#007bff] hover:underline">
                    {CONTACT.phonePretty}
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