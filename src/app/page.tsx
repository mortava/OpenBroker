import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IframeSection from "@/components/IframeSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content" role="main">
        <Hero />

        <IframeSection
          id="prequal"
          title="Get Pre-Qualified in Minutes"
          subtitle="Our AI-powered assistant guides you through a simple, conversational process to determine your home buying power. No hard credit pull required for pre-qualification."
          icon="bot"
          iframeSrc="https://grow.g1wins.com/pricing-engine-embed?key=g1_live_Q6-g4lBz_gPbVWHonwS2Fowu0GVb9Dhe&borrowerMode=true&tab=ai"
        />

        <IframeSection
          id="rates"
          title="See Today's Rates"
          subtitle="Get an instant, personalized rate quote based on your unique situation. Compare options and find the perfect loan for your needs."
          icon="calculator"
          iframeSrc="https://grow.g1wins.com/pricing-engine-embed?key=g1_live_Q6-g4lBz_gPbVWHonwS2Fowu0GVb9Dhe&borrowerMode=true&tab=manual"
        />

        <AboutSection />
      </main>

      <Footer />
    </>
  );
}
