import { useEffect, useState } from 'react';
import { init, retrieveLaunchParams } from '@telegram-apps/sdk';
import { Spinner, Cell } from '@telegram-apps/telegram-ui';
import './App.css';
import { UserProfile } from './components/UserProfile';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [initError, setInitError] = useState<string | null>(null);
  const [launchParams, setLaunchParams] = useState<any>(null);

  useEffect(() => {
    // Получаем параметры запуска
    const params = retrieveLaunchParams();
    setLaunchParams(params);

    try {
      // init() является синхронной функцией
      init();
      console.log('TMA SDK инициализирован');
      setIsLoading(false);
    } catch (err: any) {
      console.error('Ошибка инициализации TMA SDK:', err);
      setInitError(err.message || 'Неизвестная ошибка');
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spinner size="l" />
      </div>
    );
  }

  if (initError) {
    return (
      <div className="error-container">
        <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
          Произошла ошибка
        </div>
        <Cell description="Попробуйте открыть приложение еще раз через Telegram">
          {initError}
        </Cell>
      </div>
    );
  }

  return (
    <div className="tma-container">
      <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
        🚀 Мой TMA Проект
      </div>
      
      <div className="tma-section">
        <UserProfile launchParams={launchParams} />
      </div>

      <div className="tma-section">
        <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>
          🔧 Компоненты
        </div>
        <Cell
          description="Нажмите, чтобы увидеть компоненты Telegram UI"
          onClick={() => console.log('Open components demo')}
        >
          Показать UI компоненты
        </Cell>
      </div>
    </div>
  );
}

export default App;