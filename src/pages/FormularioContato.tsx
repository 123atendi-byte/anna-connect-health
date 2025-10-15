import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import logo123atendi from "@/assets/logo-123atendi.jpeg";

const FormularioContato = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const webhookUrl = ""; // Configure seu webhook aqui
  
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    pacientesMes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Formulário enviado:", formData);
    
    // Envia para webhook se configurado
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
          }),
        });
        console.log("Dados enviados para webhook");
      } catch (error) {
        console.error("Erro ao enviar para webhook:", error);
      }
    }
    
    toast({
      title: "Mensagem enviada!",
      description: "Redirecionando para WhatsApp...",
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

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* WhatsApp Logo and Name - Top Left */}
      <div className="fixed top-4 left-4 z-10 flex items-center gap-2">
        <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="text-lg font-semibold text-gray-800">WhatsApp</span>
      </div>

      {/* Back Button - Top Right */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Voltar para página inicial"
      >
        <ArrowLeft className="w-6 h-6 text-gray-600" />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header with Logo */}
          <div className="bg-white pt-12 pb-6 px-6 text-center border-b">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <img 
                  src={logo123atendi} 
                  alt="123atendi" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <h1 className="text-2xl font-bold text-gray-900">123atendi</h1>
              <div className="relative flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Badge serrilhado de verificação */}
                  <path d="M50 5 L55 15 L65 10 L65 20 L75 20 L72 30 L82 35 L75 43 L82 51 L72 56 L75 66 L65 66 L65 76 L55 71 L50 81 L45 71 L35 76 L35 66 L25 66 L28 56 L18 51 L25 43 L18 35 L28 30 L25 20 L35 20 L35 10 L45 15 Z" 
                    fill="#25D366" 
                    stroke="#25D366" 
                    strokeWidth="0"/>
                  {/* Check branco */}
                  <path d="M35 50 L45 60 L65 40" 
                    stroke="white" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="none"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Seu nome"
                value={formData.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                required
                className="border-gray-200 focus:border-[#25D366] focus:ring-[#25D366]"
              />

              <Input
                placeholder="Telefone"
                type="tel"
                value={formData.telefone}
                onChange={(e) => handleChange("telefone", e.target.value)}
                required
                className="border-gray-200 focus:border-[#25D366] focus:ring-[#25D366]"
              />

              <Input
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="border-gray-200 focus:border-[#25D366] focus:ring-[#25D366]"
              />

              <Select 
                value={formData.pacientesMes} 
                onValueChange={(value) => handleChange("pacientesMes", value)}
                required
              >
                <SelectTrigger className="border-gray-200 focus:border-[#25D366] focus:ring-[#25D366]">
                  <SelectValue placeholder="Quantos pacientes você atende por mês" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10-20">10 - 20</SelectItem>
                  <SelectItem value="20-30">20 - 30</SelectItem>
                  <SelectItem value="mais-de-30">Mais de 30</SelectItem>
                </SelectContent>
              </Select>


              <Button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-6 rounded-full text-base"
              >
                Iniciar conversa
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FormularioContato;
