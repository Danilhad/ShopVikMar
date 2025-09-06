import { Product } from '../types';
import { Card, Button, Text } from '@telegram-apps/telegram-ui';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Изображение товара */}
      <img
        alt={product.name}
        src={product.image}
        style={{
          width: '100%',
          height: 120,
          objectFit: 'cover',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12
        }}
      />
      
      {/* Информация о товаре */}
      <div style={{ padding: 12, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Text type="body-2" weight="2" style={{ marginBottom: 4 }}>
          {product.name}
        </Text>
        
        <Text type="caption-1" color="hint" style={{ 
          flex: 1,
          marginBottom: 8,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {product.description}
        </Text>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text type="body-1" weight="2" style={{ color: 'var(--tgui--button_color)' }}>
            {product.price} ₽
          </Text>
          <Button 
            size="s" 
            onClick={() => onAddToCart(product)}
          >
            Купить
          </Button>
        </div>
      </div>
    </Card>
  );
};