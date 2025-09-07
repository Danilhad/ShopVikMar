import { Cell, Avatar } from '@telegram-apps/telegram-ui';

interface UserProfileProps {
  className?: string;
  launchParams: any;
}

export const UserProfile = ({ className, launchParams }: UserProfileProps) => {
  const user = launchParams?.initData?.user;

  if (!user) {
    return (
      <Cell description="Данные пользователя не получены">
        Неизвестный пользователь
      </Cell>
    );
  }

  return (
    <div className={className}>
      <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>
        👤 Профиль {launchParams.isMock && '(тестовый режим)'}
      </div>
      
      <Cell
        before={<Avatar size={48} />}
        subtitle={user.username ? `@${user.username}` : undefined}
        description="Имя пользователя"
      >
        {user.first_name} {user.last_name || ''}
      </Cell>
      
      <Cell description="Ваш ID в Telegram">
        {user.id.toString()}
      </Cell>
      
      <Cell description="Язык интерфейса">
        {user.language_code || 'Не указан'}
      </Cell>
      
      {user.is_premium && (
        <Cell description="Статус аккаунта">
          ★ Premium-пользователь
        </Cell>
      )}
    </div>
  );
};