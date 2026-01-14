
import React from 'react';
import { Box, Text } from '@shopify/polaris';

export default function ProductImageSection({ image, title, inStock }) {
  return (
    <Box position="relative">
      {image ? (
        <>
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '240px',
              objectFit: 'cover',
              borderRadius: '8px',
              opacity: inStock ? 1 : 0.5,
              filter: inStock ? 'none' : 'grayscale(50%)',
            }}
          />
          {!inStock && (
            <Box
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(0,0,0,0.75)',
                padding: '12px 24px',
                borderRadius: '8px',
                backdropFilter: 'blur(4px)',
              }}
            >
              <Text as="p" variant="headingMd" fontWeight="bold" alignment="center" tone="base">
                <span style={{ color: '#FFFFFF' }}>OUT OF STOCK</span>
              </Text>
            </Box>
          )}
        </>
      ) : (
        <Box background="bg-surface-secondary" padding="800" borderRadius="200">
          <Text as="p" tone="subdued" alignment="center">
            No image
          </Text>
        </Box>
      )}
    </Box>
  );
}