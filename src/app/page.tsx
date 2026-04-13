import Hero from "@/components/Hero";
import ServicesRail from "@/components/ServicesRail";
import ProcessHighlights from "@/components/ProcessHighlights";
import AboutSection from "@/components/AboutSection";
import SocialProof from "@/components/SocialProof";
import WorksPreview from "@/components/WorksPreview";
import FAQAccordion from "@/components/FAQAccordion";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesRail />
      <ProcessHighlights />
      <AboutSection />
      <SocialProof />
      <WorksPreview />
      <FAQAccordion />
      <ContactCTA />
    </>
  );
}
