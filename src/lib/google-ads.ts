/**
 * Google Ads Conversion Tracking
 *
 * Este módulo fornece funções para rastrear conversões e eventos no Google Ads.
 * ID da Conta Google Ads: AW-17651533023
 *
 * Documentação: https://developers.google.com/tag-platform/gtagjs/reference
 *
 * Como testar:
 * 1. Abra o Console do navegador (F12)
 * 2. Digite: dataLayer
 * 3. Você verá todos os eventos registrados
 * 4. Use o Google Tag Assistant para validação avançada: https://tagassistant.google.com/
 */

// ID da conta do Google Ads
const GOOGLE_ADS_ID = 'AW-17651533023';

/**
 * Interface para dados de conversão do Google Ads
 */
interface ConversionData {
  send_to?: string;          // Label de conversão específico (ex: 'AW-17651533023/AbC-123')
  value?: number;            // Valor da conversão em moeda
  currency?: string;         // Código da moeda (ISO 4217)
  transaction_id?: string;   // ID único da transação
  event_category?: string;   // Categoria do evento
  event_label?: string;      // Label do evento
  [key: string]: unknown;    // Permitir propriedades adicionais
}

/**
 * Verifica se o gtag está disponível
 * @returns true se gtag está disponível, false caso contrário
 */
const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Registra eventos no Google Ads
 *
 * @param eventName - Nome do evento a ser rastreado
 * @param data - Dados adicionais do evento
 *
 * @example
 * trackGoogleAdsEvent('conversion', {
 *   send_to: 'AW-17651533023/AbC-123',
 *   value: 1.0,
 *   currency: 'BRL'
 * });
 */
export const trackGoogleAdsEvent = (eventName: string, data?: ConversionData) => {
  if (!isGtagAvailable()) {
    console.warn('Google Ads gtag não está disponível');
    return;
  }

  try {
    window.gtag('event', eventName, data);
    console.log('[Google Ads] Evento rastreado:', eventName, data);
  } catch (error) {
    console.error('[Google Ads] Erro ao rastrear evento:', error);
  }
};

/**
 * Rastreia conversão genérica no Google Ads
 * Use esta função para eventos de conversão principais
 *
 * @param conversionLabel - Label de conversão (opcional, configurado no Google Ads)
 * @param value - Valor da conversão
 * @param currency - Código da moeda (padrão: BRL)
 *
 * @example
 * trackConversion('AbC123XYZ', 1, 'BRL');
 */
export const trackConversion = (
  conversionLabel?: string,
  value: number = 1,
  currency: string = 'BRL'
) => {
  const data: ConversionData = {
    value,
    currency,
  };

  // Se houver um label específico de conversão, adiciona o send_to
  if (conversionLabel) {
    data.send_to = `${GOOGLE_ADS_ID}/${conversionLabel}`;
  }

  trackGoogleAdsEvent('conversion', data);
};

/**
 * Rastreia clique em CTA (Call-to-Action)
 * Use para rastrear cliques em botões importantes
 *
 * @param buttonName - Nome/identificação do botão
 * @param buttonLocation - Localização do botão na página
 *
 * @example
 * trackCTAClick('Conheça a Anna', 'Hero Section');
 */
export const trackCTAClick = (buttonName: string, buttonLocation?: string) => {
  trackGoogleAdsEvent('cta_click', {
    event_category: 'CTA',
    event_label: buttonName,
    button_location: buttonLocation,
    value: 1,
    currency: 'BRL',
  });
};

/**
 * Rastreia geração de lead (formulário preenchido)
 * Use quando um usuário preenche um formulário de contato
 *
 * @param leadType - Tipo de lead (ex: 'contact_form', 'demo_request')
 * @param value - Valor estimado do lead
 *
 * @example
 * trackLead('demo_request', 10);
 */
export const trackLead = (leadType: string = 'lead', value: number = 1) => {
  trackGoogleAdsEvent('generate_lead', {
    event_category: 'Lead',
    event_label: leadType,
    value,
    currency: 'BRL',
  });
};

/**
 * Rastreia início de checkout/agendamento
 * Use quando usuário inicia processo de agendamento ou compra
 *
 * @param data - Dados adicionais do checkout
 *
 * @example
 * trackCheckoutInitiated({ item_name: 'Consulta', value: 1 });
 */
export const trackCheckoutInitiated = (data?: object) => {
  trackGoogleAdsEvent('begin_checkout', {
    event_category: 'Engagement',
    value: 1,
    currency: 'BRL',
    ...data,
  });
};

/**
 * Rastreia visualização de conteúdo importante
 * Use para rastrear quando usuário visualiza seções importantes
 *
 * @param contentName - Nome do conteúdo visualizado
 * @param contentType - Tipo de conteúdo
 *
 * @example
 * trackViewContent('Funcionalidades', 'Section');
 */
export const trackViewContent = (contentName: string, contentType?: string) => {
  trackGoogleAdsEvent('view_item', {
    event_category: 'Content',
    event_label: contentName,
    content_type: contentType,
  });
};

/**
 * Rastreia engajamento com página (scroll, tempo, etc)
 * Use para medir engajamento geral
 *
 * @param engagementType - Tipo de engajamento
 * @param value - Valor do engajamento
 *
 * @example
 * trackEngagement('scroll_50', 0.5);
 */
export const trackEngagement = (engagementType: string, value?: number) => {
  trackGoogleAdsEvent('engagement', {
    event_category: 'Engagement',
    event_label: engagementType,
    value,
  });
};

/**
 * Rastreia clique em botão de WhatsApp
 * Evento específico para cliques no botão do WhatsApp
 *
 * @param origin - Origem do clique (ex: 'hero', 'cta_section', 'footer')
 *
 * @example
 * trackWhatsAppClick('hero');
 */
export const trackWhatsAppClick = (origin: string) => {
  trackGoogleAdsEvent('whatsapp_click', {
    event_category: 'Contact',
    event_label: `WhatsApp - ${origin}`,
    value: 1,
    currency: 'BRL',
  });
};

/**
 * Rastreia envio de formulário de contato
 * Use quando um formulário é enviado com sucesso
 *
 * @param formName - Nome do formulário
 * @param formType - Tipo do formulário
 *
 * @example
 * trackFormSubmit('Contato', 'contact_form');
 */
export const trackFormSubmit = (formName: string, formType?: string) => {
  trackGoogleAdsEvent('form_submit', {
    event_category: 'Form',
    event_label: formName,
    form_type: formType,
    value: 1,
    currency: 'BRL',
  });
};

/**
 * Rastreia clique em telefone
 * Use quando usuário clica em número de telefone
 *
 * @param phoneNumber - Número de telefone clicado (opcional)
 *
 * @example
 * trackPhoneClick('(11) 2160-9890');
 */
export const trackPhoneClick = (phoneNumber?: string) => {
  trackGoogleAdsEvent('phone_click', {
    event_category: 'Contact',
    event_label: phoneNumber || 'Phone Click',
    value: 1,
    currency: 'BRL',
  });
};

// Exporta também o ID para uso em casos específicos
export const GOOGLE_ADS_ACCOUNT_ID = GOOGLE_ADS_ID;

// Declaração de tipo global para gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      config?: any
    ) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
  }
}
