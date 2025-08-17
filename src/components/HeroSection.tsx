import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse-glow"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Animated Logo */}
        <div className="mb-16 animate-float pt-10">
          <div className="inline-block rounded-full bg-gradient-fire animate-pulse-glow overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-90 h-90 object-cover"
            >
              {/* Use um vídeo com proporção quadrada para melhores resultados */}
              <source src="/logo.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow animate-glow">
          BRUTUS ROCK
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto">
          Queimando os palcos com o som mais quente da cidade. 
          Experiência musical incendiária que vai explodir seus sentidos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            className="btn-neon text-lg px-8 py-4 font-semibold"
            onClick={() => scrollToSection("music")}
          >
            Ouvir Agora
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={() => scrollToSection("shows")}
          >
            Próximos Shows
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-primary" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;