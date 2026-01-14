
import React from 'react';
import { InlineStack, Badge } from '@shopify/polaris';

const getBadgeTone = (tag) => {
  switch (tag) {
    case 'Best Seller': return 'success';
    case 'Featured': return 'info';
    case 'Few Stocks Remaining': return 'warning';
    case 'Out of Stock': return 'critical';
    default: return 'default';
  }
};

export default function ProductTags({ tags }) {
  return (
    <InlineStack gap="200" wrap>
      {tags.map((tag, i) => (
        <Badge key={i} tone={getBadgeTone(tag)}>
          {tag}
        </Badge>
      ))}
    </InlineStack>
  );
}