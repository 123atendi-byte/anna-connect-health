import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Calendar, AlertCircle, TrendingDown, TrendingUp, Heart, Clock, Sparkles, Bot, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { TypewriterText } from "@/components/TypewriterText";
import { FloatingElements } from "@/components/FloatingElements";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import logo from "@/assets/logo-123atendi.jpeg";
import aiChatbot from "@/assets/ai-chatbot-demo.jpg";
import aiDashboard from "@/assets/ai-dashboard-demo.jpg";
import whatsappChat from "@/assets/whatsapp-ai-chat.jpg";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section - Light Medical Background with Animations */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--hero-bg))] to-[hsl(var(--hero-bg-end))] pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32">
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 30% 50%, hsl(122, 39%, 69%, 0.2), transparent 50%)",
              "radial-gradient(circle at 70% 50%, hsl(200, 60%, 75%, 0.2), transparent 50%)",
              "radial-gradient(circle at 30% 50%, hsl(122, 39%, 69%, 0.2), transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Mouse follower gradient */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          style={{
            background: "radial-gradient(circle, hsl(122, 50%, 70%), transparent 70%)",
          }}
        />

        {/* Floating elements */}
        <FloatingElements />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center sm:text-left md:text-center">
            {/* Lead Capture Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {[
                { label: "Quero saber mais", tipo: "saber-mais" },
                { label: "Como funciona", tipo: "como-funciona" },
                { label: "Quero contratar", tipo: "contratar" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Button
                    variant="outline"
                    onClick={() => navigate(`/contato?tipo=${item.tipo}`)}
                    className="bg-white text-primary border-primary/30 hover:bg-primary/10 hover:border-primary px-4 md:px-6 py-2 font-medium transition-all hover:scale-105 shadow-sm"
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Hero Title with Typewriter */}
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              O primeiro passo para cuidar melhor
              <br />
              dos seus pacientes é ter um
              <br />
              <span className="text-primary inline-block relative">
                <TypewriterText 
                  texts={["atendimento inteligente"]}
                  className="text-primary"
                />
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-primary/40 blur-sm"
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Mais agilidade, organização e resultados: leve sua clínica para o próximo nível com tecnologia de ponta em atendimento.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="px-4"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-5 md:px-8 md:py-6 text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all w-full sm:w-auto"
                asChild
              >
                <a href="https://api.whatsapp.com/send/?phone=555121609890&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a%20Anna" target="_blank" rel="noopener noreferrer">
                  Conheça a Anna
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative animated gradient */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Clientes/Parceiros */}
      <section className="hidden py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-8 md:mb-12">
            Clínicas que já transformaram o atendimento com a Anna
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-12 md:w-32 md:h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-xs md:text-sm font-semibold">Clínica {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="funcionalidades" className="py-16 md:py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Como funciona
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A Anna conversa com os pacientes da sua clínica de forma natural e humanizada
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <div className="grid sm:grid-cols-1 gap-6">
                {[
                  {
                    icon: MessageSquare,
                    title: "Responde automaticamente",
                    desc: "Atendimento instantâneo no WhatsApp para dúvidas comuns e informações",
                  },
                  {
                    icon: Calendar,
                    title: "Agendamento direto na agenda",
                    desc: "Anna agenda pacientes automaticamente na agenda do médico, além de fazer confirmações e reagendamentos",
                  },
                  {
                    icon: AlertCircle,
                    title: "Prioriza urgências",
                    desc: "Identifica casos urgentes e conecta com a equipe médica",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                  >
                    <Card className="border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-xl">
                      <CardContent className="p-6 flex items-start gap-4">
                        <motion.div 
                          className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <item.icon className="w-7 h-7 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{item.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src={aiChatbot} 
                    alt="Anna AI Chatbot em uso" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-16 md:py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-4 px-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Sua equipe foca no que importa.{" "}
              <span className="text-primary">A Anna cuida do resto.</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src={aiDashboard} 
                    alt="Dashboard de gerenciamento Anna" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
                <motion.div
                  className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: TrendingDown, title: "Reduza faltas", desc: "Lembretes automáticos diminuem no-shows e otimizam sua agenda" },
                  { icon: TrendingUp, title: "Aumente produtividade", desc: "Sua equipe ganha tempo para focar em tarefas de maior valor" },
                  { icon: Heart, title: "Melhore experiência", desc: "Respostas rápidas e personalizadas aumentam satisfação" },
                  { icon: Clock, title: "Atendimento 24h", desc: "Anna trabalha sem parar, mesmo fora do horário comercial" },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <Card className="border-border hover:shadow-xl transition-all duration-300 bg-card h-full hover:border-primary/30">
                      <CardContent className="p-5 md:p-6">
                        <motion.div 
                          className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <item.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Principais */}
      <section className="py-16 md:py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              O que a Anna pode fazer por você
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Funcionalidades Principais
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Atendimento 24/7",
                desc: "Anna está disponível para responder às dúvidas dos pacientes, agendar consultas e fornecer informações relevantes a qualquer hora do dia, todos os dias da semana."
              },
              {
                icon: Zap,
                title: "Integração com Sistemas Existentes",
                desc: "Nossa solução se integra perfeitamente com prontuários eletrônicos, sistemas de gestão e outras ferramentas utilizadas pela sua clínica, garantindo uma operação fluida."
              },
              {
                icon: Calendar,
                title: "Agendamento e Acompanhamento Automatizado",
                desc: "Os pacientes agendam diretamente pelo WhatsApp. Enviamos lembretes automáticos para reduzir faltas e otimizar a agenda da sua clínica."
              },
              {
                icon: TrendingUp,
                title: "Relatórios e Análises",
                desc: "Dashboards detalhados que permitem acompanhar métricas de desempenho, histórico de interações e outros indicadores essenciais para uma gestão eficiente."
              },
              {
                icon: MessageSquare,
                title: "Centralização de Mensagens",
                desc: "Consolidamos todas as comunicações de WhatsApp, Instagram e Facebook em uma única plataforma, garantindo que nenhum paciente seja ignorado."
              },
              {
                icon: Heart,
                title: "CRM Integrado",
                desc: "Todo o histórico de interações dos pacientes em um só lugar. Atendimento mais personalizado e ágil, facilitando o acompanhamento e engajamento."
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-xl h-full">
                  <CardContent className="p-6 md:p-8">
                    <motion.div 
                      className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <feature.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section com Mockup */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-muted/50 to-muted overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl bg-gradient-to-br from-muted to-background border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="z-10"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Badge variant="outline" className="mb-6 bg-background/50 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 mr-2" />
                    CONHEÇA A ANNA
                  </Badge>
                </motion.div>

                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Comece a{" "}
                  <span className="text-primary">revolucionar</span>
                  <br />
                  o atendimento da sua clínica com IA.
                </motion.h2>

                <motion.p
                  className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Anna automatiza agendamentos, confirmações e atendimento 24/7 pelo WhatsApp. Transforme sua clínica hoje mesmo.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-xl hover:scale-105 transition-all group"
                    asChild
                  >
                    <a href="https://api.whatsapp.com/send/?phone=555121609890&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a%20Anna" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Agende uma demonstração
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <img 
                      src={whatsappChat} 
                      alt="Anna WhatsApp em ação" 
                      className="w-full max-w-md mx-auto drop-shadow-2xl rounded-3xl"
                    />
                  </motion.div>
                </div>

                {/* Elementos decorativos */}
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                
                <motion.div
                  className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 md:py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Médicos que já usam a Anna
            </motion.h2>
          </div>

          <div className="max-w-7xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
              className="w-full"
            >
              <CarouselContent>
                {[
                  {
                    initials: "LR",
                    quote: "A Anna mudou completamente nosso fluxo de atendimento.",
                    name: "Dra. Lívia Rezende",
                    specialty: "Pediatra"
                  },
                  {
                    initials: "RA",
                    quote: "Hoje nenhum paciente fica sem resposta.",
                    name: "Dr. Rafael Avancini",
                    specialty: "Traumatologista"
                  },
                  {
                    initials: "RH",
                    quote: "O agendamento automático revolucionou minha agenda.",
                    name: "Dr. Rafael Hartman",
                    specialty: "Traumatologista"
                  },
                  {
                    initials: "FH",
                    quote: "Anna liberou minha equipe para focar no atendimento.",
                    name: "Dr. Flavio Hanciau",
                    specialty: "Traumatologista"
                  }
                ].map((testimonial, i) => (
                  <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5 }}
                      className="h-full"
                    >
                      <Card className="border-primary/20 bg-card hover:shadow-xl transition-all duration-300 h-full">
                        <CardContent className="p-6 md:p-8">
                          <div className="flex items-start gap-3 md:gap-4 mb-4">
                            <motion.div 
                              className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
                              whileHover={{ scale: 1.1, rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <span className="text-primary font-bold text-base md:text-lg">{testimonial.initials}</span>
                            </motion.div>
                            <div>
                              <p className="text-base md:text-lg text-foreground italic mb-3">
                                "{testimonial.quote}"
                              </p>
                              <p className="text-sm font-semibold text-foreground">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-muted-foreground">{testimonial.specialty}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Final - Dark */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(var(--hero-bg))] to-[hsl(var(--hero-bg-end))] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(122,39%,49%,0.15),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6">
            Transforme o atendimento da sua clínica com a Anna, a Inteligência Artificial da 123atendi
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Centralize o atendimento da sua clínica em uma solução inteligente que automatiza agendamentos, confirmações e todo o contato com seus pacientes.
          </p>
          <Button
            size="lg"
            className="bg-white text-[hsl(var(--hero-bg))] hover:bg-white/90 font-semibold px-6 py-5 md:px-8 md:py-6 text-base md:text-lg shadow-2xl w-full sm:w-auto"
            asChild
          >
            <a href="https://api.whatsapp.com/send/?phone=555121609890&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a%20Anna" target="_blank" rel="noopener noreferrer">
              Quero conhecer a Anna
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <img src={logo} alt="123atendi" className="h-20 w-20 rounded-lg" />
              </div>
              <p className="text-background/60 text-sm">
                Inteligência artificial para atendimento médico
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-background/80 mb-2 text-sm">
                Email: contato@123atendi.com.br
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
        href="https://api.whatsapp.com/send/?phone=555121609890&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a%20Anna"
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
