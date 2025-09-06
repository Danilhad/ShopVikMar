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
        👤 Профиль
      </div>
      
      <Cell
        before={user.photoUrl ? <Avatar src={user.photoUrl} size={48} /> : undefined}
        subtitle={user.username ? `@${user.username}` : undefined}
        description="Имя пользователя"
      >
        {user.firstName} {user.lastName || ''}
      </Cell>
      
      <Cell description="Ваш ID в Telegram">
        {user.id.toString()}
      </Cell>
      
      <Cell description="Язык интерфейса">
        {user.languageCode || 'Не указан'}
      </Cell>
      
      {user.isPremium && (
        <Cell description="Статус аккаунта">
          ★ Premium-пользователь
        </Cell>
      )}
    </div>
  );
};