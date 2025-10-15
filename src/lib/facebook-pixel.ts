import ReactPixel from 'react-facebook-pixel';

const PIXEL_ID = '707550308831975';

export const initFacebookPixel = () => {
  if (typeof window !== 'undefined') {
    ReactPixel.init(PIXEL_ID, undefined, {
      autoConfig: true,
      debug: false, // Mude para true para debug no console
    });
    // Não dispara pageView aqui, deixa o PageTracker fazer isso
  }
};

export const trackEvent = (eventName: string, data?: object) => {
  if (typeof window !== 'undefined') {
    ReactPixel.track(eventName, data);
  }
};

export const trackPageView = () => {
  if (typeof window !== 'undefined') {
    ReactPixel.pageView();
  }
};

// Eventos específicos do Facebook Pixel
export const trackLead = (data?: object) => {
  trackEvent('Lead', data);
};

export const trackContact = (data?: object) => {
  trackEvent('Contact', data);
};

export const trackViewContent = (contentName: string, contentCategory?: string) => {
  trackEvent('ViewContent', {
    content_name: contentName,
    content_category: contentCategory,
  });
};

export const trackCompleteRegistration = (data?: object) => {
  trackEvent('CompleteRegistration', data);
};
