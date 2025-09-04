"use client";

import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import ResortIntro from "@/components/ResortIntro";
import AboutSection from "@/components/AboutSection";
import AbacoDevelopers from "@/components/AbacoDevelopers";
import AmenitiesSection from "@/components/AmenitiesSection";
import ClubhouseSection from "@/components/ClubhouseSection";
import SpaSection from "@/components/SpaSection";
import BeachfrontSection from "@/components/BeachfrontSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import PropertiesSection from "@/components/PropertiesSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main>
        <HeroSection />
        <ResortIntro />
        <AboutSection />
        <AbacoDevelopers />
        <AmenitiesSection />
        <ClubhouseSection />
        <SpaSection />
        <BeachfrontSection />
        <ActivitiesSection />
        <PropertiesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;