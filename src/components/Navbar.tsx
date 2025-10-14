import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--hero-bg))]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">Anna</span>
            <span className="text-sm text-white/60">by 123atendi</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#funcionalidades" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Funcionalidades
            </a>
            <a href="#beneficios" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Benefícios
            </a>
            <a href="#depoimentos" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Depoimentos
            </a>
          </div>

          <Button 
            className="bg-white text-[hsl(var(--hero-bg))] hover:bg-white/90 font-semibold"
          >
            Agendar demonstração
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
