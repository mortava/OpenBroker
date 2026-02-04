import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
      </main>
      <Footer />
    </>
  );
}
