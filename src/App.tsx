import React, { useState, useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
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
  const webApp = useTelegram();
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    if (webApp) {
      webApp.MainButton.setText('Оформить заказ');
      webApp.MainButton.onClick(() => {
        webApp.showPopup({
          title: 'Заказ оформлен!',
          message: `Вы заказали ${cart.length} товаров на сумму ${
            cart.reduce((sum, item) => sum + item.price, 0)
          } ₽`,
          buttons: [{ type: 'ok', text: 'OK' }]
        });
      });
    }
  }, [webApp, cart]);

  useEffect(() => {
    if (webApp) {
      if (cart.length > 0) {
        webApp.MainButton.show();
      } else {
        webApp.MainButton.hide();
      }
    }
  }, [cart, webApp]);

  const handleAddToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
    if (webApp) {
      webApp.showPopup({
        title: 'Добавлено в корзину',
        message: `${product.name} добавлен в корзину`,
        buttons: [{ type: 'ok', text: 'OK' }]
      });
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>ShopVikMar</h1>
        <p>Добро пожаловать в наш магазин!</p>
      </header>
      
      <main className="products-grid">
        {mockProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </main>

      {cart.length > 0 && (
        <div className="cart-info">
          В корзине: {cart.length} товаров
        </div>
      )}
    </div>
  );
}

export default App;