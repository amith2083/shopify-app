
import React, { useState } from 'react';
import {
  Box,
  BlockStack,
  InlineStack,
  Text,
  TextField,
  Button,
  Icon,
  Banner,
} from '@shopify/polaris';
import { AlertTriangleIcon, EmailIcon } from '@shopify/polaris-icons';

export default function OutOfStockNotification({ config, productTitle }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = () => {
    if (!email) return setEmailError('Email is required');
    if (!validateEmail(email)) return setEmailError('Please enter a valid email address');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <Box padding="400" background="bg-surface-secondary" borderRadius="200" borderWidth="025" borderColor="border">
      <BlockStack gap="400">
        <InlineStack gap="200" blockAlign="center">
          <Icon source={AlertTriangleIcon} tone="caution" />
          <Text as="h4" variant="headingSm" fontWeight="semibold">{config.heading}</Text>
        </InlineStack>

        <Text as="p" variant="bodySm" tone="subdued">{config.message}</Text>

        {submitted && (
          <Banner tone="success" onDismiss={() => setSubmitted(false)}>
            <Text as="p" variant="bodySm">
              Thanks! We'll notify you at <strong>{email}</strong> when "{productTitle}" is back in stock.
            </Text>
          </Banner>
        )}

        {!submitted && (
          <BlockStack gap="300">
            <TextField
              label="Email address"
              labelHidden
              type="email"
              value={email}
              onChange={(v) => { setEmail(v); if (emailError) setEmailError(''); }}
              placeholder="Enter your email"
              autoComplete="email"
              error={emailError}
              prefix={<Icon source={EmailIcon} tone="base" />}
              helpText="We'll only use this to notify you about this product"
            />
            <Button
              fullWidth
              onClick={handleSubmit}
              variant="primary"
              tone="success"
              style={{ backgroundColor: config.buttonColor, borderColor: config.buttonColor }}
            >
              Notify me when available
            </Button>
          </BlockStack>
        )}
      </BlockStack>
    </Box>
  );
}