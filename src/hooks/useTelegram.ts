import { useEffect, useState } from 'react';
import { TelegramWebApp } from '../types';

declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
}

export const useTelegram = () => {
  const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      setWebApp(tg);
    }
  }, []);

  return webApp;
};