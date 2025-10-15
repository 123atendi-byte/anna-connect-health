import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PoliticasPrivacidade = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para página inicial
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Política de Privacidade
          </h1>
          <p className="text-muted-foreground mb-8">
            Última atualização: Janeiro de 2025
          </p>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <p className="text-lg">
                Esta política explica como o 123atendi coleta, usa, armazena e protege as informações dos usuários.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Coleta de Informações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">Tipos de informações coletadas:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Informações do usuário:</strong> Nome, e-mail, telefone</li>
                  <li><strong>Dados de uso:</strong> Registros de atendimento, mensagens</li>
                  <li><strong>Informações técnicas:</strong> Endereço IP, navegador, dispositivo, cookies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Uso das Informações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">Finalidades da coleta:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Personalizar serviços</li>
                  <li>Oferecer suporte técnico</li>
                  <li>Analisar métricas de uso</li>
                  <li>Enviar comunicações</li>
                  <li>Garantir segurança dos dados</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Compartilhamento de Informações</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">O 123atendi NÃO vende dados.</p>
                <p className="mt-4">Compartilhamento apenas em casos de:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Exigências legais</li>
                  <li>Parceiros de tecnologia</li>
                  <li>Processos de fusão ou aquisição</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Segurança dos Dados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>O 123atendi implementa medidas de segurança para proteger suas informações.</p>
                <p>Recomendamos aos usuários manterem boas práticas de segurança digital.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Direitos do Usuário</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">Você pode:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir informações incorretas</li>
                  <li>Solicitar exclusão de dados</li>
                  <li>Revogar consentimentos</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Alterações na Política</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Esta política pode ser atualizada periodicamente.</p>
                <p>Mudanças significativas serão notificadas aos usuários.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Para dúvidas sobre privacidade, entre em contato:</p>
                <p className="mt-2">
                  E-mail: <a href="mailto:contato@123atendi.com.br" className="text-primary hover:underline">contato@123atendi.com.br</a>
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-center font-semibold">
                Ao usar o 123atendi, você concorda com esta Política de Privacidade.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PoliticasPrivacidade;
