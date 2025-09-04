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
import SkipToContent from "@/components/SkipToContent";
import ScrollToTop from "@/components/ScrollToTop";
import PhotosSection from "@/components/PhotosSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SkipToContent />
      <HeaderNav />
      <main id="main-content">
        <HeroSection />
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
    </div>
  );
};

export default Index;