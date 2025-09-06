import { useState } from 'react';
import { Section, Text, Divider } from '@telegram-apps/telegram-ui';
import { ProductCard } from './components/ProductCard';
import { Product } from './types';
import { useTelegram } from './hooks/useTelegram';

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
    console.log('Added to cart:', product.name, 'Total items:', cart.length + 1);
  };

  return (
    <>
      <Section>
        <Text type="header-1">ShopVikMar</Text>
        <Text type="body-2" color="hint">
          Добро пожаловать в наш магазин!
        </Text>
        
        {/* Простое приветствие без Tooltip */}
        {user && user.first_name && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 8, 
            marginTop: 12,
            padding: 8,
            background: 'var(--tgui--secondary_bg_color)',
            borderRadius: 8
          }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'var(--tgui--button_color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 14
            }}>
              {user.first_name[0]}
            </div>
            <Text type="body-2">
              Привет, {user.first_name}!
            </Text>
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

      {cart.length > 0 && (
        <Section>
          <div style={{
            background: 'var(--tgui--button_color)',
            color: 'var(--tgui--button_text_color)',
            padding: 12,
            borderRadius: 8,
            textAlign: 'center'
          }}>
            <Text>В корзине: {cart.length} товаров</Text>
          </div>
        </Section>
      )}
    </>
  );
}

export default App;