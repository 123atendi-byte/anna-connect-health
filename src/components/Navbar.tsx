import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#funcionalidades" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Funcionalidades
            </a>
            <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Benefícios
            </a>
            <a href="#depoimentos" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Depoimentos
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-border">
              <div className="flex flex-col gap-6 mt-8">
                <a href="#funcionalidades" className="text-muted-foreground hover:text-foreground transition-colors text-lg font-medium">
                  Funcionalidades
                </a>
                <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors text-lg font-medium">
                  Benefícios
                </a>
                <a href="#depoimentos" className="text-muted-foreground hover:text-foreground transition-colors text-lg font-medium">
                  Depoimentos
                </a>
              </div>
            </SheetContent>
          </Sheet>

          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm md:text-base px-4 md:px-6"
            asChild
          >
            <a href="https://api.whatsapp.com/send/?phone=555121609890&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a%20Anna" target="_blank" rel="noopener noreferrer">
              <span className="hidden sm:inline">Agendar demonstração</span>
              <span className="sm:hidden">Agendar</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
