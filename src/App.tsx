import { useState } from 'react';
import { Section, Text, Divider, Tooltip, Avatar } from '@telegram-apps/telegram-ui';
import { ProductCard } from './components/ProductCard';
import { Product } from './types';
import { useTelegram, TelegramUser } from './hooks/useTelegram';

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Премиум кофе",
    price: 450,
    description: "Ароматный свежеобжаренный кофе",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Чайная коллекция", 
    price: 300,
    description: "Отборные сорта чая",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "Сладости",
    price: 250,
    description: "Домашние десерты",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 4,
    name: "Пряники",
    price: 350,
    description: "Ароматные пряники",
    image: "https://via.placeholder.com/200"
  }
];

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const user = useTelegram();

  const handleAddToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <>
      <Section>
        <Text type="header-1">ShopVikMar</Text>
        <Text type="body-2" color="hint">
          Добро пожаловать в наш магазин!
        </Text>
        
        {/* Tooltip с приветствием */}
        {user && (
          <div style={{ marginTop: 16, marginBottom: 8 }}>
            <Tooltip 
              text={`Привет, ${user.first_name}! 🛍️`}
              placement="bottom"
            >
              <Avatar 
                size={40}
                src={user.photo_url} 
                fallbackName={user.first_name?.[0] || 'U'}
                style={{ 
                  cursor: 'pointer',
                  border: '2px solid var(--tgui--button_color)'
                }}
              />
            </Tooltip>
          </div>
        )}
      </Section>

      <Divider />

      <Section>
        <Text type="header-2" style={{ marginBottom: 16 }}>Наши товары</Text>
        
        {/* Сетка из двух колонок */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 12,
          padding: '8px 0'
        }}>
          {mockProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </Section>
    </>
  );
}

export default App;