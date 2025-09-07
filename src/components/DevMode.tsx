import { useState } from 'react';
import { Cell, Button, Input } from '@telegram-apps/telegram-ui';

interface DevModeProps {
  onLaunchParams: (params: any) => void;
}

export const DevMode = ({ onLaunchParams }: DevModeProps) => {
  const [userId, setUserId] = useState('123456789');
  const [firstName, setFirstName] = useState('Иван');
  const [lastName, setLastName] = useState('Иванов');
  const [username, setUsername] = useState('ivanov');

  const handleSimulate = () => {
    const mockParams = {
      initData: {
        user: {
          id: parseInt(userId),
          first_name: firstName,
          last_name: lastName,
          username: username,
          language_code: 'ru',
          is_premium: true,
          allows_write_to_pm: true
        },
        auth_date: Date.now(),
        hash: 'mock_hash_for_development'
      }
    };
    
    onLaunchParams(mockParams);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🔧 Режим разработки</h2>
      <p>Приложение открыто вне Telegram. Заполните тестовые данные:</p>
      
      <Cell description="ID пользователя">
        <Input 
          value={userId} 
          onChange={(e) => setUserId(e.target.value)}
          placeholder="123456789"
        />
      </Cell>
      
      <Cell description="Имя">
        <Input 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Иван"
        />
      </Cell>
      
      <Cell description="Фамилия">
        <Input 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Иванов"
        />
      </Cell>
      
      <Cell description="Username">
        <Input 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          placeholder="ivanov"
        />
      </Cell>
      
      <Button 
        size="l" 
        onClick={handleSimulate}
        style={{ marginTop: '16px' }}
      >
        Запустить с тестовыми данными
      </Button>
    </div>
  );
};