import { Product } from '../types';
import { Button, Card, Cell, Text } from '@telegram-apps/telegram-ui';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card>
      <Cell
        before={
          <img 
            src={product.image} 
            alt={product.name}
            style={{ 
              width: 60, 
              height: 60, 
              borderRadius: 8,
              objectFit: 'cover'
            }}
          />
        }
        after={
          <Button size="s" onClick={() => onAddToCart(product)}>
            {product.price} ₽
          </Button>
        }
      >
        <Text type="body-1" weight="2">
          {product.name}
        </Text>
        <Text type="body-2" color="hint">
          {product.description}
        </Text>
      </Cell>
    </Card>
  );
};