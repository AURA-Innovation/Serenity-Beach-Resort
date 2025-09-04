"use client";

import React from "react";
import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import WhyLoveStrip from "@/components/WhyLoveStrip";
import ResortIntro from "@/components/ResortIntro";
import AboutSection from "@/components/AboutSection";
import AbacoDevelopers from "@/components/AbacoDevelopers";
import AmenitiesSection from "@/components/AmenitiesSection";
import ClubhouseSection from "@/components/ClubhouseSection";
import SpaSection from "@/components/SpaSection";
import BeachfrontSection from "@/components/BeachfrontSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import PhotosSection from "@/components/PhotosSection";
import PropertiesSection from "@/components/PropertiesSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import SkipToContent from "@/components/SkipToContent";
import ScrollToTop from "@/components/ScrollToTop";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import VapiWidget from "@/components/VapiWidget";
import TestAssistantPanel from "@/components/TestAssistantPanel";

const Index = () => {
  React.useEffect(() => {
    document.title = "Serenity Beach Resort – Private Caribbean Escape in Abaco, Bahamas";
    const description =
      "Plan your private Caribbean escape at Serenity: curated activities, beachfront properties, spa, and a welcoming clubhouse in Abaco, Bahamas.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipToContent />
      <HeaderNav />
      <main id="main-content">
        <HeroSection />
        <WhyLoveStrip />
        <TestAssistantPanel />
        <ResortIntro />
        <AboutSection />
        <AbacoDevelopers />
        <AmenitiesSection />
        <ClubhouseSection />
        <SpaSection />
        <BeachfrontSection />
        <ActivitiesSection />
        <PhotosSection />
        <PropertiesSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ScrollToTop />
      <StickyMobileCTA />
      {/* Voice widget (uses mic; browser will prompt for permission) */}
      <VapiWidget
        apiKey="cf022073-8795-431b-9aa1-8acef8ee9d50"
        assistantId="899066b1-1e06-4e00-acf8-722cf59c9ae1"
      />
    </div>
  );
};

export default Index;