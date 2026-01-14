
import React from 'react';
import { InlineGrid } from '@shopify/polaris';
import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products }) {
  return (
    <InlineGrid columns={{ xs: 1, sm: 2, lg: 3 }} gap="400">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </InlineGrid>
  );
}