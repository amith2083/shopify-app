# Shopify Embedded Admin App

A beautiful Shopify embedded app built with **React Router v7 + Vite**, Polaris UI, Recharts, and Shopify CLI.

## Features
- **Analytics Dashboard** – Sales & profit line charts, daily performance bar chart, top products list
- **Products Catalog** – Grid view with image management (add, edit, delete, drag & drop reorder), out-of-stock overlay, and email notification form
- Native Shopify admin sidebar navigation (Dashboard & Products appear in the real Shopify left sidebar)
- Fully embedded experience (runs inside Shopify admin iframe)

## How to Run Locally

### Prerequisites
- Node.js ≥ 20.19
- Shopify Partners account: https://partners.shopify.com
- A development store (free to create in Partners dashboard)
- Shopify CLI installed:
  ```bash
  npm install -g @shopify/cli @shopify/app
Steps

Clone the repositoryBashgit clone https://github.com/amith2083/shopify-app.git
cd shopify-app
Install dependenciesBashnpm install
Link to your Shopify app
Every developer uses their own Shopify app and dev store.Bashshopify app config link→ Select your app when prompted (create one in Partners dashboard if needed).This command downloads your app credentials automatically — you usually don’t need to create a .env file manually.
Run the appBashshopify app devWhat happens:
Starts local server
Creates secure public tunnel (Cloudflare)
Opens preview URL
Installs the app on your dev store
Loads your app embedded in the Shopify admin iframe
You will see:
"Products" navigation item in the Shopify admin left sidebar
Full Dashboard and Products pages with all features


Optional: If you get auth errors
Bash
cp .env.example .env
Then manually fill your API key & secret from Partners → App setup, and run shopify app config link again.
Alternative: Just preview UI (no Shopify auth)
Bash
npm run dev
Opens at http://localhost:3000 (no iframe or sidebar navigation).
Deploy to Production
Bash
shopify app deploy
