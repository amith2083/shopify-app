import React from 'react';
import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  InlineGrid,
  Box,
  Badge,
  InlineStack,
} from '@shopify/polaris';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

import {MOCK_ANALYTICS} from '../sampleData/mockAnalytics.jsx'

export default function AnalyticsDashboard() {
  return (
    <Page title="Analytics Dashboard">
      <Layout>
        {/* Summary Metrics  */}
        <Layout.Section>
          <InlineGrid columns={{ xs: 1, sm: 2, md: 4 }} gap="400">
            {MOCK_ANALYTICS.summary.map((metric, index) => (
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
        </Layout.Section>

        {/* Sales & Profit Chart */}
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text as="h2" variant="headingMd">
                Sales & Profit Overview
              </Text>
              <Box paddingBlockEnd="400">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={MOCK_ANALYTICS.chartData}>
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
        </Layout.Section>

        {/* Two Column Section */}
        <Layout.Section>
          <InlineGrid columns={{ xs: 1, md: 2 }} gap="400">
            {/* Top Products */}
            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingMd">
                  Top Products
                </Text>
                <BlockStack gap="300">
                  {MOCK_ANALYTICS.topProducts.map((product, index) => (
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

            {/* Daily Performance */}
            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingMd">
                  Daily Performance
                </Text>
                <Box paddingBlockEnd="200">
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={MOCK_ANALYTICS.chartData}>
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
                      <Bar 
                        dataKey="profit" 
                        fill="	#00bfff" 
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </BlockStack>
            </Card>
          </InlineGrid>
        </Layout.Section>
      </Layout>
    </Page>
  );
}