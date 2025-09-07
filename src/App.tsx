import { useEffect, useState } from 'react';
import { SDKProvider, useLaunchParams, useThemeParams, useBackButton } from '@telegram-apps/sdk-react';
import { AppRoot, Cell, Spinner, Div } from '@telegram-apps/telegram-ui';
import { TonConnectButton } from '@tonconnect/ui-react';

import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { mockProducts } from './data/mockProducts';
import './App.css';

function AppContent() {
  const launchParams = useLaunchParams();
  const themeParams = useThemeParams();
  const backButton = useBackButton();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (backButton) {
      backButton.show();
      return backButton.on('click', () => {
        window.history.back();
      });
    }
  }, [backButton]);

  const handleBuyProduct = (product: any) => {
    console.log('Покупка товара:', product);
    alert(`Вы выбрали: ${product.name} за ${product.price} ₽`);
  };

  if (isLoading) {
    return (
      <Div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <Spinner size="l" />
      </Div>
    );
  }

  const user = launchParams.initData?.user;

  return (
    <Div>
      <Header username={user?.username} photoUrl={user?.photoUrl} />
      
      <Cell
        style={{ marginBottom: '16px' }}
        description="Выберите понравившийся товар"
      >
        🛍️ Наши товары
      </Cell>

      <div className="products-grid">
        {mockProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onBuy={handleBuyProduct}
          />
        ))}
      </div>

      <Cell style={{ marginTop: '24px' }}>
        <TonConnectButton />
      </Cell>
    </Div>
  );
}

function App() {
  return (
    <SDKProvider>
      <AppRoot>
        <AppContent />
      </AppRoot>
    </SDKProvider>
  );
}

export default App;