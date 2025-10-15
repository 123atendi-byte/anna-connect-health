import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import logo123atendi from "@/assets/logo-123atendi.jpeg";

const FormularioContato = () => {
  const { toast } = useToast();
  const [webhookUrl, setWebhookUrl] = useState("");
  
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
    <div className="min-h-screen bg-[#E5DDD5] flex items-center justify-center p-4">
      {/* WhatsApp Logo - Top Right */}
      <div className="fixed top-4 right-4 z-10">
        <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </div>

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
              <img 
                src={logo123atendi} 
                alt="123atendi" 
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <h1 className="text-2xl font-semibold text-gray-900">123atendi</h1>
              <CheckCircle2 className="w-6 h-6 text-[#25D366]" />
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

              <Input
                placeholder="URL do Webhook (opcional)"
                type="url"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="border-gray-200 focus:border-[#25D366] focus:ring-[#25D366] text-sm"
              />

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
