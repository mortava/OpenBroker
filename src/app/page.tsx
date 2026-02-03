import ChatInterface from "@/components/ChatInterface";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="main-content" role="main">
        <ChatInterface
          iframeSrc="https://grow.g1wins.com/pricing-engine-embed?key=g1_live_Q6-g4lBz_gPbVWHonwS2Fowu0GVb9Dhe&borrowerMode=true&tab=ai"
        />
        <AboutSection />
      </main>

      <Footer />
    </>
  );
}
