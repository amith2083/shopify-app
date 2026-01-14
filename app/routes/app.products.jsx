import React from 'react';
import { Page, Layout } from '@shopify/polaris';
import ProductGrid from '../components/ProductGrid.jsx';
import {MOCK_PRODUCTS} from '../sampleData/mockProducts'


export default function ProductsListing() {
  return (
    <Page title="Products" subtitle="Manage your product catalog" primaryAction={{ content: 'Add product' }}>
      <Layout>
        <Layout.Section>
          <ProductGrid products={MOCK_PRODUCTS} />
        </Layout.Section>
      </Layout>
    </Page>
  );
}