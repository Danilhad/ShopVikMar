import { Card, Button, Image, Cell } from '@telegram-apps/telegram-ui';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
}

export const ProductCard = ({ product, onBuy }: ProductCardProps) => {
  return (
    <Card
      style={{
        marginBottom: '16px',
        overflow: 'hidden'
      }}
    >
      <Image
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '140px',
          objectFit: 'cover'
        }}
      />
      
      <Cell
        description={product.description}
        after={
          <Button
            size="s"
            onClick={() => onBuy(product)}
            style={{ minWidth: '80px' }}
          >
            Купить
          </Button>
        }
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: '500' }}>{product.name}</span>
          <span style={{ 
            fontWeight: '600',
            color: 'var(--tg-theme-button-color)'
          }}>
            {product.price} ₽
          </span>
        </div>
      </Cell>
    </Card>
  );
};