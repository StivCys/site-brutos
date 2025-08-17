import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MusicSection from "@/components/MusicSection";
import ShowsSection from "@/components/ShowsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-contain md:object-cover -z-10"
      >
        <source src="/video-espaco.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <Header />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <ShowsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
