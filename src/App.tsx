import { useState } from 'react';
import { 
  Button,
  Card,
  Cell,
  Divider,
  Section,
  Text,
  Headline,
  Title,
  Caption
} from '@telegram-apps/telegram-ui';
import { ProductCard } from './components/ProductCard';
import { Product } from './types';
import './App.css';

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Премиум кофе",
    price: 450,
    description: "Ароматный свежеобжаренный кофе",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Чайная коллекция", 
    price: 300,
    description: "Отборные сорта чая со всего мира",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Сладости",
    price: 250,
    description: "Домашние десерты и выпечка",
    image: "https://via.placeholder.com/150"
  }
];

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div className="app">
      <Section>
        <Title level="1">VikMar Shop</Title>
        <Title level="2">Добро пожаловать в магазин</Title>
        <Caption>Второстепенный текст, подпись, пояснение или уведомление об ошибке.</Caption>
      </Section>

      <Divider />

      <Section>
        <Headline>Крупный текст для подзаголовков</Headline>
        <div className="products-grid">
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
          <Card>
            <Cell
              before="🛒"
              after={
                <Button 
                  size="s" 
                  onClick={() => alert(`Заказ на ${cart.reduce((sum, item) => sum + item.price, 0)} ₽`)}
                >
                  Оформить
                </Button>
              }
            >
              <Text>В корзине: {cart.length} товаров</Text>
              <Text type="body-2" color="hint">
                На сумму: {cart.reduce((sum, item) => sum + item.price, 0)} ₽
              </Text>
            </Cell>
          </Card>
        </Section>
      )}
    </div>
  );
}

export default App;