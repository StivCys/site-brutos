import { Button } from "@/components/ui/button";

interface LinkItem {
  title: string;
  description: string;
  url: string;
  icon?: React.ReactNode;
}

interface LinkGridProps {
  title: string;
  items: LinkItem[];
}

const LinkGrid = ({ title, items }: LinkGridProps) => {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-glow">
        {title}
      </h2>
      
      <div className="grid-responsive">
        {items.map((item, index) => (
          <div key={index} className="card-neon p-6 group">
            <div className="flex items-start space-x-4">
              {item.icon && (
                <div className="text-primary text-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              )}
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                
                <Button 
                  variant="outline"
                  size="sm"
                  className="btn-neon w-full"
                  onClick={() => window.open(item.url, '_blank')}
                >
                  Acessar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkGrid;