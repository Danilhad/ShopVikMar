export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 89990,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=200&fit=crop',
    description: 'Флагманский смартфон'
  },
  {
    id: 2,
    name: 'Samsung Galaxy',
    price: 69990,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=200&fit=crop',
    description: 'Мощный Android'
  },
  {
    id: 3,
    name: 'AirPods Pro',
    price: 24990,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=200&fit=crop',
    description: 'Беспроводные наушники'
  },
  {
    id: 4,
    name: 'MacBook Air',
    price: 119990,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop',
    description: 'Легкий ноутбук'
  }
];