import React from 'react';
import {
  Card,
  BlockStack,
  Text,
  Box,
  InlineStack,
} from '@shopify/polaris';

export default function TopProducts({ products }) {
  return (
    <Card>
      <BlockStack gap="400">
        <Text as="h2" variant="headingMd">
          Top Products
        </Text>
        <BlockStack gap="300">
          {products.map((product, index) => (
            <Box
              key={index}
              padding="300"
              background="bg-surface-secondary"
              borderRadius="200"
            >
              <InlineStack align="space-between" blockAlign="center">
                <BlockStack gap="100">
                  <Text as="p" variant="bodyMd" fontWeight="semibold">
                    {product.name}
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    {product.sales} units sold
                  </Text>
                </BlockStack>
                <Text as="p" variant="bodyMd" fontWeight="semibold">
                  {product.revenue}
                </Text>
              </InlineStack>
            </Box>
          ))}
        </BlockStack>
      </BlockStack>
    </Card>
  );
}