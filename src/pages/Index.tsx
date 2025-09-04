"use client";

import React from "react";
import HeaderNav from "@/components/HeaderNav";
import Hero from "@/components/Hero";
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
      <HeaderNav />
      <Hero />
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