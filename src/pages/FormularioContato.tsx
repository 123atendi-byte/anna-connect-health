import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Building2, Phone, Mail, User } from "lucide-react";
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
    clinica: "",
    cargo: "",
    interesse: tipo,
    mensagem: "",
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
    const mensagemWhatsApp = `Olá! Meu nome é ${formData.nome}, da ${formData.clinica}. Tenho interesse em: ${formData.interesse}. ${formData.mensagem}`;
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
                  <div className="grid md:grid-cols-2 gap-6">
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                      <Label htmlFor="clinica" className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        Nome da Clínica *
                      </Label>
                      <Input
                        id="clinica"
                        placeholder="Sua clínica"
                        value={formData.clinica}
                        onChange={(e) => handleChange("clinica", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cargo">Cargo/Função</Label>
                    <Select value={formData.cargo} onValueChange={(value) => handleChange("cargo", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione seu cargo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medico">Médico(a)</SelectItem>
                        <SelectItem value="gestor">Gestor(a)</SelectItem>
                        <SelectItem value="secretaria">Secretária/Recepcionista</SelectItem>
                        <SelectItem value="proprietario">Proprietário(a)</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interesse">Área de interesse</Label>
                    <Select 
                      value={formData.interesse} 
                      onValueChange={(value) => handleChange("interesse", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="saber-mais">Quero saber mais</SelectItem>
                        <SelectItem value="como-funciona">Como funciona</SelectItem>
                        <SelectItem value="contratar">Quero contratar</SelectItem>
                        <SelectItem value="demonstracao">Agendar demonstração</SelectItem>
                        <SelectItem value="duvida">Tirar dúvida</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Conte-nos mais sobre suas necessidades..."
                      rows={4}
                      value={formData.mensagem}
                      onChange={(e) => handleChange("mensagem", e.target.value)}
                    />
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
