import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Calendar, AlertCircle, TrendingDown, TrendingUp, Heart, Clock, Sparkles, Bot, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Dark Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--hero-bg))] to-[hsl(var(--hero-bg-end))] pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(122,39%,49%,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-4 py-2">
                <Bot className="w-4 h-4 mr-2" />
                Chatbot
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Automação Inteligente
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                IA
              </Badge>
            </div>

            {/* Hero Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Atendimento médico com{" "}
              <span className="text-primary inline-block relative">
                inteligência artificial
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 blur-sm"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto animate-slide-up">
              A IA Anna responde pacientes, confirma consultas e mantém sua clínica sempre conectada — tudo pelo WhatsApp.
            </p>
            
            <Button 
              size="lg" 
              className="bg-white text-[hsl(var(--hero-bg))] hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-2xl animate-fade-in"
            >
              Conheça a Anna
            </Button>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Clientes/Parceiros */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-12">
            Clínicas que já transformaram o atendimento com a Anna
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-semibold">Clínica {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="funcionalidades" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Como funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A Anna conversa com os pacientes da sua clínica de forma natural e humanizada
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Responde automaticamente
                </h3>
                <p className="text-muted-foreground">
                  Atendimento instantâneo no WhatsApp para dúvidas comuns e informações
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Gerencia consultas
                </h3>
                <p className="text-muted-foreground">
                  Confirmações automáticas, lembretes e reagendamentos
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Prioriza urgências
                </h3>
                <p className="text-muted-foreground">
                  Identifica casos urgentes e conecta com a equipe médica
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Sua equipe foca no que importa.{" "}
              <span className="text-primary">A Anna cuida do resto.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-all duration-300 bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingDown className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  Reduza faltas
                </h3>
                <p className="text-sm text-muted-foreground">
                  Lembretes automáticos diminuem no-shows e otimizam sua agenda
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  Aumente produtividade
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sua equipe ganha tempo para focar em tarefas de maior valor
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  Melhore experiência
                </h3>
                <p className="text-sm text-muted-foreground">
                  Respostas rápidas e personalizadas aumentam satisfação
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  Atendimento 24h
                </h3>
                <p className="text-sm text-muted-foreground">
                  Anna trabalha sem parar, mesmo fora do horário comercial
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Médicos que já usam a Anna
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-card hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">LR</span>
                  </div>
                  <div>
                    <p className="text-lg text-foreground italic mb-3">
                      "A Anna mudou completamente nosso fluxo de atendimento."
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      Dra. Lívia Rezende
                    </p>
                    <p className="text-sm text-muted-foreground">Pediatra</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">RA</span>
                  </div>
                  <div>
                    <p className="text-lg text-foreground italic mb-3">
                      "Hoje nenhum paciente fica sem resposta."
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      Dr. Rafael Avancini
                    </p>
                    <p className="text-sm text-muted-foreground">Ortopedista</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final - Dark */}
      <section className="py-24 bg-gradient-to-br from-[hsl(var(--hero-bg))] to-[hsl(var(--hero-bg-end))] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(122,39%,49%,0.15),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Transforme o atendimento da sua clínica com IA
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de clínicas que já automatizaram seu atendimento
          </p>
          <Button 
            size="lg"
            className="bg-white text-[hsl(var(--hero-bg))] hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-2xl"
          >
            Quero conhecer a Anna
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Anna</h3>
              <p className="text-background/80 text-sm">
                by 123atendi
              </p>
              <p className="text-background/60 text-sm mt-2">
                Inteligência artificial para atendimento médico
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-background/80 mb-2 text-sm">
                Email: contato@123atendi.com.br
              </p>
              <p className="text-background/80 text-sm">
                Site: www.123atendi.com.br
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <a href="#" className="block text-background/80 hover:text-background mb-2 transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
            <p>&copy; 2025 123atendi. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Fixed Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all z-50"
        aria-label="Falar no WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;
