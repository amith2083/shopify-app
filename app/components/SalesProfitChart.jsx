import React from 'react';
import {
  Card,
  BlockStack,
  Text,
  Box,
} from '@shopify/polaris';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';  

export default function SalesProfitChart({ data }) {
  return (
    <Card>
      <BlockStack gap="400">
        <Text as="h2" variant="headingMd">
          Sales & Profit Overview
        </Text>
        <Box paddingBlockEnd="400">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="name"
                stroke="#9CA3AF"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke="#9CA3AF"
                style={{ fontSize: '12px' }}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#bf2424"
                strokeWidth={2.5}
                dot={{ fill: '#bf2424', r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#10B981"
                strokeWidth={2.5}
                dot={{ fill: '#10B981', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </BlockStack>
    </Card>
  );
}