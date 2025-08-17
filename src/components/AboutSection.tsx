const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="card-neon p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-glow">
            Sobre a Banda
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="text-primary font-semibold">Brutos Rock</span> nasceu das chamas 
              da paixão pela música e da vontade de criar algo único e inesquecível. 
              Formada por músicos experientes e talentosos, a banda traz uma energia 
              incendiária que contagia todo tipo de público.
            </p>
            
            <p>
              Nosso som é uma fusão explosiva de rock, metal e elementos eletrônicos 
              que criam uma experiência sonora única. Cada apresentação é um espetáculo 
              de luzes, som e energia que deixa a plateia em êxtase.
            </p>
            
            <p>
              Desde nossa formação, já percorremos diversos palcos pelo país, 
              conquistando fãs e deixando nossa marca por onde passamos. 
              Prepare-se para uma experiência musical que vai incendiar seus sentidos!
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-primary/20">
            {[
              { number: "5+", label: "Anos de Estrada" },
              { number: "100+", label: "Shows Realizados" },
              { number: "50K+", label: "Fãs Conquistados" },
              { number: "3", label: "Álbuns Lançados" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;