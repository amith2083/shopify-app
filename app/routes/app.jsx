import { Outlet, useLoaderData, useRouteError } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { AppProvider as AppBridgeProvider } from "@shopify/shopify-app-react-router/react";
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import { NavMenu } from "@shopify/app-bridge-react";
import { Link } from "react-router";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return { apiKey: process.env.SHOPIFY_API_KEY || "" };
};

export default function App() {
  const { apiKey } = useLoaderData();
 

  return (
    <AppBridgeProvider embedded apiKey={apiKey}>
      <PolarisProvider i18n={enTranslations}>
        <NavMenu>
          <Link to="/app" rel="home">
            Dashboard
          </Link>

          <Link to="/app/products">Products</Link>
        </NavMenu>

        <Outlet />
      </PolarisProvider>
    </AppBridgeProvider>
  );
}


export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => boundary.headers(headersArgs);
