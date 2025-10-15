/**
 * Definições de tipos TypeScript para Google Ads (gtag.js)
 *
 * Este arquivo fornece tipagem para o gtag do Google Ads,
 * evitando erros TypeScript no código.
 */

declare global {
  interface Window {
    /**
     * Função gtag para rastreamento do Google Ads
     *
     * @param command - Comando gtag ('config', 'event', 'js', 'set')
     * @param targetId - ID do Google Ads ou Date para 'js' command
     * @param config - Configuração adicional (opcional)
     */
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      config?: Record<string, any>
    ) => void;

    /**
     * Data Layer do Google Tag Manager / Google Ads
     * Array que armazena todos os eventos e configurações
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: Array<any>;
  }
}

export {};
