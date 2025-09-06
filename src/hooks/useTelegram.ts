import { useEffect, useState } from 'react';
import { retrieveLaunchParams } from '@telegram-apps/sdk';

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: string;
}

export const useTelegram = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    try {
      const launchParams = retrieveLaunchParams();
      const userData = (launchParams as any).initDataUnsafe?.user;
      if (userData) {
        setUser(userData);
      }
    } catch (error) {
      console.log('Telegram user data not available');
    }
  }, []);

  return user;
};