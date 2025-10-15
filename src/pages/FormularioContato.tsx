import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import logo123atendi from "@/assets/logo-123atendi.jpeg";
import { trackLead, trackContact, trackViewContent } from "@/lib/facebook-pixel";
import { trackLead as trackGoogleAdsLead, trackFormSubmit, trackWhatsAppClick } from "@/lib/google-ads";

// Verified badge component (WhatsApp-style rosette)
const VerifiedBadge = ({ size = 28 }: { size?: number }) => {
  const center = 50;
  const outer = 48;
  const inner = 40;
  const spikes = 12;
  const total = spikes * 2;
  const pts: string[] = [];
  for (let i = 0; i < total; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const ang = (Math.PI * 2 * i) / total - Math.PI / 2;
    const x = center + r * Math.cos(ang);
    const y = center + r * Math.sin(ang);
    pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Verificado" role="img">
      <polygon points={pts.join(" ")} fill="#25D366" />
      <path d="M30 52 L45 67 L74 38" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
};

const FormularioContato = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const tipo = searchParams.get("tipo") || "contato";
  const webhookUrl = "https://webhook.123atendi.com.br/webhook/annaleads";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    pacientesMes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          tipo: tipo,
          timestamp: new Date().toISOString(),
          origem: "Site Anna Connect Health",
        }),
      });

      if (response.ok) {
        // Rastrear evento de Lead no Facebook Pixel
        trackLead({
          content_name: "Formulário de Contato",
          content_category: tipo,
          value: 1,
          currency: "BRL",
        });

        // Rastrear evento de Lead no Google Ads
        trackGoogleAdsLead(tipo, 1);
        trackFormSubmit("Formulário de Contato", tipo);

        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Redirecionando para WhatsApp...",
        });

        // Extrai o primeiro nome
        const primeiroNome = formData.nome.split(" ")[0];

        // Mensagem para WhatsApp
        const mensagemWhatsApp = `Oi, gostaria de saber mais sobre a Anna, me chamo ${primeiroNome}.`;

        // Redireciona para WhatsApp após 1 segundo
        setTimeout(() => {
          // Rastrear evento de Contact (redirecionamento WhatsApp) - Facebook Pixel
          trackContact({
            content_name: "WhatsApp Redirect",
            content_category: tipo,
          });

          // Rastrear clique no WhatsApp - Google Ads
          trackWhatsAppClick("Formulário de Contato");

          window.open(
            `https://api.whatsapp.com/send/?phone=555121609890&text=${encodeURIComponent(mensagemWhatsApp)}`,
            "_blank"
          );

          // Limpa o formulário
          setFormData({
            nome: "",
            email: "",
            telefone: "",
            pacientesMes: "",
          });

          // Redireciona para home após 2 segundos
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }, 1000);
      } else {
        throw new Error("Erro ao enviar formulário");
      }
    } catch (error) {
      console.error("Erro ao enviar para webhook:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="flex items-center justify-center gap-1.5 mb-3">
              <h1 className="text-2xl font-bold text-gray-900">123atendi</h1>
              <VerifiedBadge size={32} />
            </div>
            <p className="text-base text-gray-600 font-medium">
              Anna - Inteligência artificial para clínicas
            </p>
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
                disabled={isSubmitting}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-6 rounded-full text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FormularioContato;
