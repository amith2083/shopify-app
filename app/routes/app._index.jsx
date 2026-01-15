import React from "react";
import { Page, Layout, InlineGrid } from "@shopify/polaris";
import SummaryMetrics from "../components/SummaryMetrics.jsx";
import SalesProfitChart from "../components/SalesProfitChart.jsx";
import TopProducts from "../components/TopProducts.jsx";
import DailyPerformanceChart from "../components/DailyPerformanceChart.jsx";
import { MOCK_ANALYTICS } from "../sampleData/mockAnalytics.jsx";

export default function AnalyticsDashboard() {
  return (
    <Page title="Analytics Dashboard">
      <Layout>
        <Layout.Section>
          <SummaryMetrics metrics={MOCK_ANALYTICS.summary} />
        </Layout.Section>

        <Layout.Section>
          <SalesProfitChart data={MOCK_ANALYTICS.chartData} />
        </Layout.Section>

        <Layout.Section>
          <InlineGrid columns={{ xs: 1, md: 2 }} gap="400">
            <TopProducts products={MOCK_ANALYTICS.topProducts} />
            <DailyPerformanceChart data={MOCK_ANALYTICS.chartData} />
          </InlineGrid>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
