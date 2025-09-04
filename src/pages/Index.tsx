"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import HeroChatPanel from "@/components/HeroChatPanel";
import AboutSection from "@/components/AboutSection";
import PropertiesSection from "@/components/PropertiesSection";
import BeachfrontSection from "@/components/BeachfrontSection";
import ClubhouseSection from "@/components/ClubhouseSection";
import SpaSection from "@/components/SpaSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import PhotosSection from "@/components/PhotosSection";
import AbacoDevelopers from "@/components/AbacoDevelopers";
import ContactSection from "@/components/ContactSection";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen">
      <section className="relative">
        <HeroSection />
        <div className="pointer-events-none absolute bottom-6 right-6 left-6 md:left-auto z-30 flex justify-center md:justify-end">
          <div className="pointer-events-auto w-full max-w-md">
            <HeroChatPanel />
          </div>
        </div>
      </section>

      <AboutSection />
      <PropertiesSection />
      <BeachfrontSection />
      <ClubhouseSection />
      <SpaSection />
      <AmenitiesSection />
      <PhotosSection />
      <AbacoDevelopers />
      <ContactSection />
    </main>
  );
};

export default Index;