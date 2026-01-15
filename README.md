# Shopify Embedded Analytics & Product Management App

A modern, production-ready Shopify embedded app featuring analytics dashboards, product management, and seamless admin integration. Built with React Router v7, Vite, Polaris UI, and Shopify CLI.

---

## ✨ Features

### 📊 Analytics Dashboard
- **Sales & Profit Charts** – Interactive line charts showing revenue trends over time
- **Daily Performance** – Bar chart visualization of daily sales metrics  
- **Top Products** – Real-time list of best-selling items with performance indicators

### 📦 Products Catalog
- **Grid View** – Clean, responsive product grid layout
- **Image Management** – Add, edit, delete, and drag-to-reorder product images
- **Stock Indicators** – Visual overlays for out-of-stock items
- **Email Notifications** – Built-in form for inventory alerts

### 🔗 Shopify Integration
- **Native Admin Navigation** – Dashboard and Products pages appear in Shopify's left sidebar
- **Embedded Experience** – Runs seamlessly inside Shopify admin iframe

---

## 📁 Project Structure

```
scalable-admin/
├── app/
│   ├── assets/                  # Static assets (images, fonts, etc.)
│   ├── components/              # Reusable UI components
│   │   ├── DailyPerformanceChart.jsx
│   │   ├── ImageEditModal.jsx
│   │   ├── ImageManager.jsx
│   │   ├── ImageThumbnail.jsx
│   │   ├── OutOfStockNotification.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductImageSection.jsx
│   │   ├── ProductTags.jsx
│   │   ├── SalesProfitChart.jsx
│   │   ├── SummaryMetrics.jsx
│   │   └── TopProducts.jsx
│   │
│   ├── routes/                  # Remix routes
│   │   ├── app._index.jsx       # Dashboard home (AnalyticsDashboard)
│   │   ├── app.additional.jsx
│   │   ├── app.jsx              # Main app layout / entry
│   │   ├── app.products.jsx     # Products listing page
│   │   ├── auth.$.jsx           # Authentication routes
│   │   └── root.jsx             # Root layout
│   │
│   ├── db.server.js             # Database / data utilities
│   └── entry.server.jsx         # Server entry point (Remix)
│
├── sampleData/
│   ├── mockAnalytics.jsx        # Mock data for analytics dashboard
│   └── mockProducts.jsx         # Mock data for products listing
│
├── webhooks/
│   ├── app.scopes_update.jsx
│   └── app.uninstalled.jsx      # Webhook handlers
│
├── public/                      # Public assets (served statically)
├── prisma/                      # (if using Prisma – optional)
├── package.json
├── remix.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- **Node.js** ≥ 20.19 ([Download](https://nodejs.org/))
- **Shopify Partners Account** ([Sign up free](https://partners.shopify.com/))
- **Development Store** (Create in Partners dashboard → Stores → Add store)
- **Shopify CLI** installed globally:

```bash
npm install -g @shopify/cli @shopify/app
```

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/amith2083/shopify-app.git
cd shopify-app
```

**2. Install dependencies**

```bash
npm install
```

**3. Link to your Shopify app**

Every developer needs their own Shopify app credentials:

```bash
shopify app config link
```

- Select your app from the list (or create a new custom app in Partners dashboard)
- This downloads your app's API credentials automatically
- No manual `.env` file needed in most cases

**4. Start the development server**

```bash
shopify app dev
```

This command will:

- ✅ Start the local Vite dev server
- ✅ Create a secure Cloudflare tunnel (public URL)
- ✅ Open your browser to the app installation page
- ✅ Install the app on your development store
- ✅ Load your app embedded in Shopify admin

**5. Access your app**

After installation, you'll see:

- "Products" in Shopify admin's left sidebar
- Full Dashboard and Products pages with all features working
- Live reload on code changes

---

## 🛠️ Development

### Local Development Modes

#### Embedded Mode (Recommended)

```bash
shopify app dev
```

Full Shopify integration with admin sidebar and authentication.

#### Standalone UI Preview

```bash
npm run dev
```

Opens at `http://localhost:3000` - useful for rapid UI development without Shopify authentication (no sidebar navigation).

---

## 🔧 Troubleshooting

### Authentication Errors

If you encounter OAuth or token issues:

```bash
cp .env.example .env
```

Then manually add your credentials from Partners Dashboard → Apps → [Your App] → App setup:

- `SHOPIFY_API_KEY`
- `SHOPIFY_API_SECRET`

Run `shopify app config link` again.

### Port Already in Use

Change the port in `vite.config.ts`:

```typescript
server: { port: 3001 }
```

### Tunnel Connection Failed

Run with verbose logging:

```bash
shopify app dev --verbose
```

---

## 🏗️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React Router v7** | Modern routing with server-side rendering support |
| **Vite** | Lightning-fast build tool and dev server |
| **Shopify Polaris** | Official Shopify design system |
| **Recharts** | Composable charting library |
| **Shopify App Bridge** | Embedded app authentication and navigation |






