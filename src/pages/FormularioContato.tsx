import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Phone, Mail, User, Users } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FormularioContato = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const tipo = searchParams.get("tipo") || "contato";
  
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    pacientesMes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui você pode integrar com seu backend ou serviço de e-mail
    console.log("Formulário enviado:", formData);
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });
    
    // Redireciona para WhatsApp com mensagem pré-formatada
    const mensagemWhatsApp = `Olá! Meu nome é ${formData.nome}. Email: ${formData.email}. Telefone: ${formData.telefone}. Atendo ${formData.pacientesMes} pacientes por mês.`;
    window.open(
      `https://api.whatsapp.com/send/?phone=555121609890&text=${encodeURIComponent(mensagemWhatsApp)}`,
      "_blank"
    );
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getTitulo = () => {
    switch (tipo) {
      case "saber-mais":
        return "Quero Saber Mais";
      case "como-funciona":
        return "Como Funciona a Anna";
      case "contratar":
        return "Quero Contratar";
      default:
        return "Entre em Contato";
    }
  };

  const getDescricao = () => {
    switch (tipo) {
      case "saber-mais":
        return "Preencha o formulário e nossa equipe entrará em contato para apresentar todas as funcionalidades da Anna.";
      case "como-funciona":
        return "Agende uma demonstração gratuita e veja a Anna em ação no atendimento da sua clínica.";
      case "contratar":
        return "Estamos prontos para implementar a Anna na sua clínica. Preencha os dados e entraremos em contato.";
      default:
        return "Preencha o formulário abaixo e entraremos em contato o mais breve possível.";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-6 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para página inicial
            </Button>

            <Card className="shadow-lg border-2">
              <CardHeader className="text-center space-y-2 pb-6">
                <CardTitle className="text-3xl md:text-4xl font-bold text-foreground">
                  {getTitulo()}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {getDescricao()}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Nome completo *
                    </Label>
                    <Input
                      id="nome"
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={(e) => handleChange("nome", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Telefone/WhatsApp *
                    </Label>
                    <Input
                      id="telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.telefone}
                      onChange={(e) => handleChange("telefone", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pacientesMes" className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Quantos pacientes você atende por mês *
                    </Label>
                    <Select 
                      value={formData.pacientesMes} 
                      onValueChange={(value) => handleChange("pacientesMes", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10-20">10 - 20</SelectItem>
                        <SelectItem value="20-30">20 - 30</SelectItem>
                        <SelectItem value="mais-de-30">Mais de 30</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar mensagem
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Ao enviar, você será direcionado para o WhatsApp para finalizar o contato.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FormularioContato;
