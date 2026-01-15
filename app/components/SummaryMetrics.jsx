import React from 'react';
import { InlineGrid, Card, BlockStack, Text, Badge } from '@shopify/polaris';

export default function SummaryMetrics({ metrics }) {
  return (
    <InlineGrid columns={{ xs: 1, sm: 2, md: 4 }} gap="400">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <BlockStack gap="200">
            <Text as="h3" variant="headingSm" tone="subdued">
              {metric.label}
            </Text>
            <Text as="p" variant="heading2xl">
              {metric.value}
            </Text>
            <Badge tone={metric.status}>{metric.change}</Badge>
          </BlockStack>
        </Card>
      ))}
    </InlineGrid>
  );
}