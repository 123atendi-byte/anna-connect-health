import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Calendar, AlertCircle, TrendingDown, TrendingUp, Heart, Clock } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Atendimento médico com inteligência artificial
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                A IA Anna responde pacientes, confirma consultas e mantém sua clínica sempre conectada — tudo pelo WhatsApp.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Agendar demonstração
              </Button>
            </div>
            <div className="animate-slide-up hidden md:block">
              <img 
                src={heroImage} 
                alt="Médico usando smartphone para atendimento inteligente" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A Anna conversa com os pacientes da sua clínica, entende pedidos e executa tarefas de forma natural e humanizada.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Responde automaticamente no WhatsApp
                </h3>
                <p className="text-muted-foreground">
                  Atendimento instantâneo para dúvidas comuns, informações sobre horários e procedimentos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Confirma e reagenda consultas
                </h3>
                <p className="text-muted-foreground">
                  Confirmações automáticas, lembretes e reagendamentos sem intervenção humana.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Encaminha urgências para o médico
                </h3>
                <p className="text-muted-foreground">
                  Identifica casos urgentes e prioriza o contato direto com a equipe médica.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sua equipe foca no que importa. A Anna cuida do resto.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Reduza faltas de pacientes
                </h3>
                <p className="text-sm text-muted-foreground">
                  Lembretes automáticos diminuem no-shows e otimizam sua agenda.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Aumente a produtividade
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sua equipe ganha tempo para focar em tarefas de maior valor.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Melhore a experiência do paciente
                </h3>
                <p className="text-sm text-muted-foreground">
                  Respostas rápidas e personalizadas aumentam a satisfação.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Tenha atendimento 24h
                </h3>
                <p className="text-sm text-muted-foreground">
                  Anna trabalha sem parar, mesmo fora do horário comercial.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Médicos que já usam a Anna
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-foreground italic mb-4">
                  "A Anna mudou completamente nosso fluxo de atendimento."
                </p>
                <p className="text-sm font-semibold text-primary">
                  Dra. Lívia Rezende
                </p>
                <p className="text-sm text-muted-foreground">Pediatra</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-lg text-foreground italic mb-4">
                  "Hoje nenhum paciente fica sem resposta."
                </p>
                <p className="text-sm font-semibold text-primary">
                  Dr. Rafael Avancini
                </p>
                <p className="text-sm text-muted-foreground">Ortopedista</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Transforme o atendimento da sua clínica com IA.
          </h2>
          <Button 
            size="lg"
            variant="secondary"
            className="font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
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
              <h3 className="text-2xl font-bold mb-4">123atendi</h3>
              <p className="text-background/80">
                Inteligência artificial para transformar o atendimento médico.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-background/80 mb-2">
                Email: contato@123atendi.com.br
              </p>
              <p className="text-background/80">
                Site: www.123atendi.com.br
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <a href="#" className="block text-background/80 hover:text-background mb-2 transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
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
