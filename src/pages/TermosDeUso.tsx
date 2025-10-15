import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermosDeUso = () => {
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
            Termos de Uso
          </h1>
          <p className="text-muted-foreground mb-8">
            Última atualização: Janeiro de 2025
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Aceitação dos Termos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Ao utilizar o 123atendi, você concorda com os Termos de Uso.</p>
                <p>Se não concordar, não utilize os serviços.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Descrição do Serviço</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Plataforma de automação para atendimento ao cliente que:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Permite interações via WhatsApp, Facebook, Instagram, Gmail e outras plataformas</li>
                  <li>Oferece soluções para otimizar atendimento e comunicação empresarial</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Cadastro e Conta do Usuário</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Requer informações pessoais como nome, e-mail e telefone.</p>
                <p className="font-semibold mt-4">O usuário é responsável por:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Manter credenciais seguras</li>
                  <li>Todas as atividades na conta</li>
                </ul>
                <p className="mt-4">A plataforma pode suspender contas que violem os termos.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Uso Permitido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Utilizar serviços apenas para fins legais.</p>
                <p className="font-semibold mt-4">É proibido:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Enviar spam</li>
                  <li>Enviar conteúdos ilegais</li>
                  <li>Tentar acessar ou modificar sistemas da plataforma</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Pagamentos e Assinaturas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Alguns recursos exigem pagamento.</p>
                <p>Valores detalhados no site <a href="https://www.123atendi.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.123atendi.com.br</a></p>
                <p>Pagamentos geralmente não são reembolsáveis.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Limitação de Responsabilidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">A 123atendi não se responsabiliza por:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Erros ou falhas no serviço</li>
                  <li>Perdas causadas pelo uso indevido</li>
                  <li>Problemas decorrentes de terceiros</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Alterações nos Termos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Os termos podem ser atualizados a qualquer momento.</p>
                <p>Usuários serão notificados via e-mail ou site.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Para dúvidas, entre em contato:</p>
                <p className="mt-2">
                  E-mail: <a href="mailto:contato@123atendi.com.br" className="text-primary hover:underline">contato@123atendi.com.br</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermosDeUso;
