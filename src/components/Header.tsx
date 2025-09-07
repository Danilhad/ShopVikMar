import { useRef, useState } from 'react';
import { Tooltip, Avatar, Cell } from '@telegram-apps/telegram-ui';

interface HeaderProps {
  username?: string;
  photoUrl?: string;
}

export const Header = ({ username, photoUrl }: HeaderProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [tooltipShown, setTooltipShown] = useState(false);
  const displayName = username ? `@${username}` : 'пользователь';

  return (
    <>
      <Cell
        ref={targetRef}
        onMouseEnter={() => setTooltipShown(true)}
        onMouseLeave={() => setTooltipShown(false)}
        onClick={() => setTooltipShown(!tooltipShown)}
        before={<Avatar src={photoUrl} size={40} />}
        style={{
          marginBottom: '16px',
          cursor: 'pointer'
        }}
      >
        Привет, {displayName}!
      </Cell>

      <Tooltip
        shown={tooltipShown}
        targetRef={targetRef}
        placement="top"
        arrow={true}
        style={{ maxWidth: '200px' }}
      >
        Добро пожаловать в наш магазин! 🛍️
      </Tooltip>
    </>
  );
};