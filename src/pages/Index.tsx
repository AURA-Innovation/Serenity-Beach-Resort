"use client";

import React, { Suspense, lazy } from "react";
import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import WhyLoveStrip from "@/components/WhyLoveStrip";
import ResortIntro from "@/components/ResortIntro";
const AboutSection = lazy(() => import("@/components/AboutSection"));
const AbacoDevelopers = lazy(() => import("@/components/AbacoDevelopers"));
const AmenitiesSection = lazy(() => import("@/components/AmenitiesSection"));
const ClubhouseSection = lazy(() => import("@/components/ClubhouseSection"));
const SpaSection = lazy(() => import("@/components/SpaSection"));
const BeachfrontSection = lazy(() => import("@/components/BeachfrontSection"));
const ActivitiesSection = lazy(() => import("@/components/ActivitiesSection"));
const PhotosSection = lazy(() => import("@/components/PhotosSection"));
const PropertiesSection = lazy(() => import("@/components/PropertiesSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
import SiteFooter from "@/components/SiteFooter";
import SkipToContent from "@/components/SkipToContent";
import ScrollToTop from "@/components/ScrollToTop";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import VapiWidget from "@/components/VapiWidget";
import TestAssistantPanel from "@/components/TestAssistantPanel";
import { VapiProvider } from "@/components/vapi/VapiProvider";
import { ENV } from "@/environment";
import SectionLoader from "@/components/SectionLoader";
import ErrorBoundary from "@/components/ErrorBoundary";

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
    <VapiProvider apiKey={ENV.YOUR_PUBLIC_API_KEY} assistantId={ENV.YOUR_ASSISTANT_ID}>
      <div className="min-h-screen bg-background text-foreground">
        <SkipToContent />
        <HeaderNav />
        <ErrorBoundary>
          <main id="main-content">
            <HeroSection />
            <WhyLoveStrip />
            <TestAssistantPanel />
            <ResortIntro />

            <Suspense fallback={<SectionLoader />}>
              <AboutSection />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <AbacoDevelopers />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <AmenitiesSection />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <ClubhouseSection />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <SpaSection />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <BeachfrontSection />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <ActivitiesSection />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <PhotosSection />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <PropertiesSection />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <ContactSection />
            </Suspense>
          </main>
        </ErrorBoundary>
        <SiteFooter />
        <ScrollToTop />
        <StickyMobileCTA />
        <VapiWidget />
      </div>
    </VapiProvider>
  );
};

export default Index;