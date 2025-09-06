import { useEffect, useState } from 'react';
import { retrieveLaunchParams, type LaunchParams } from '@telegram-apps/sdk';

export const useTelegram = () => {
  const [launchParams, setLaunchParams] = useState<LaunchParams | null>(null);

  useEffect(() => {
    // Получаем параметры запуска из Telegram
    const lp = retrieveLaunchParams();
    setLaunchParams(lp);
  }, []);

  return launchParams;
};