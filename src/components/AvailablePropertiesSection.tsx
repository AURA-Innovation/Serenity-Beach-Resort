"use client";

import React from "react";
import { AVAILABLE_PROPERTIES, type PropertyItem } from "../data/available-properties";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageWithBlur from "@/components/ImageWithBlur";
import { buildUnsplashSrcSet, defaultSizes } from "@/utils/img";
import { toast } from "sonner";

type Filter = "All" | "Villas" | "Beachfront" | "Oceanview" | "Vista";

const IMG_BY_SUBTYPE: Record<string, string> = {
  Villa: "https://images.unsplash.com/photo-1560448075-bb4caa6c4a84?auto=format&fit=crop&q=80",
  Beachfront: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80",
  Oceanview: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
  Vista: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
};

function getImgFor(p: PropertyItem) {
  if (p.img) return p.img;
  if (p.kind === "Villa") return IMG_BY_SUBTYPE.Villa;
  if (p.subtype) return IMG_BY_SUBTYPE[p.subtype] || "/placeholder.svg";
  return "/placeholder.svg";
}

const AvailablePropertiesSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [filter, setFilter] = React.useState<Filter>("All");
  const [email, setEmail] = React.useState("");

  const filtered = AVAILABLE_PROPERTIES.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Villas") return p.kind === "Villa";
    return p.subtype === filter;
  });

  const requestPdf = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const id = toast.loading("Preparing your property PDF…");
    setTimeout(() => {
      toast.success("We’ll email you the PDF shortly.", { id });
      setEmail("");
    }, 900);
  };

  return (
    <section id="available-properties" className="py-16 bg-white">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Available Properties</h2>
          <p className="mt-2 text-gray-700 max-w-[65ch] mx-auto leading-7">
            These are all of the Bahamas properties for sale by Serenity. Explore villas and ocean-view lots,
            including premier beachfront parcels.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {(["All", "Villas", "Beachfront", "Oceanview", "Vista"] as Filter[]).map((f) => (
            <Button
              key={f}
              size="sm"
              variant={filter === f ? "default" : "outline"}
              className={`filter-tab ${filter === f ? "active bg-[#007bff] hover:bg-[#0056b3]" : ""} btn-lux`}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>

        <form
          onSubmit={requestPdf}
          className="mb-8 mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl"
          aria-label="Request available homes PDF"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email to receive the PDF"
            className="w-full sm:flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007bff]"
          />
          <Button type="submit" className="bg-[#007bff] hover:bg-[#0056b3] btn-lux">
            Send PDF
          </Button>
        </form>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => {
            const src = getImgFor(p);
            const srcSet = src.startsWith("http") ? buildUnsplashSrcSet(src) : undefined;
            return (
              <Card
                key={p.id}
                className="overflow-hidden card-lift"
                style={{ animation: inView ? `fadeUp 700ms ease-out ${i * 70}ms forwards` : "none", opacity: inView ? 1 : 0 }}
              >
                <div className="bg-gray-100">
                  <ImageWithBlur
                    src={src}
                    alt={`${p.name}${p.subtype ? ` – ${p.subtype}` : ""}`}
                    srcSet={srcSet}
                    sizes={defaultSizes}
                    className="w-full h-full object-cover"
                    containerClassName="w-full aspect-[4/3]"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="text-xl">{p.name}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{p.kind}</Badge>
                      {p.subtype && <Badge variant="outline">{p.subtype}</Badge>}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <span className="mr-3"><strong>Size:</strong> {p.size}</span>
                    {p.elevation && <span><strong>Elevation:</strong> {p.elevation}</span>}
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    {p.bedrooms && <span className="mr-3"><strong>Bedrooms:</strong> {p.bedrooms}</span>}
                    {p.widthOrFrontage && <span><strong>Frontage/Width:</strong> {p.widthOrFrontage}</span>}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {p.details?.length ? (
                    <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
                      {p.details.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button asChild size="sm" variant="outline" className="btn-lux">
                      <a href="#contact">Inquire</a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="text-[#007bff] border-[#007bff] btn-lux"
                    >
                      <a
                        href={`mailto:mhawn@ranchesatbeltcreek.com?subject=Property%20details%20request:%20${encodeURIComponent(
                          p.name,
                        )}`}
                      >
                        Email me details
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AvailablePropertiesSection;