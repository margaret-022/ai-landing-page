import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Terminal from "@/components/Terminal";
import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg font-sans">
      <Header />
      <Hero />
      <Terminal />
      <Capabilities />
      <Footer />
    </div>
  );
}
