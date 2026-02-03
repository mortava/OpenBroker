import ChatInterface from "@/components/ChatInterface";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="main-content" role="main">
        <ChatInterface
          iframeSrc="https://obagent.qualr.com"
        />
        <AboutSection />
      </main>

      <Footer />
    </>
  );
}
