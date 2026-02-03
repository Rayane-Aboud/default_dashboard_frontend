# Frontend Dashboard – Project Setup

This is a clean, default configuration for a modern frontend dashboard built with React. It comes structured and ready for development with theming, routing, state management, and modular features.

---

## Project Structure

```
src/
├── app
│   ├── providers
│   │   └── ThemeProvider.tsx      # Handles light/dark theme context
│   ├── store.ts                   # Root store configuration (Zustand or similar)
│   └── useThemeStore.ts           # Custom hook for theme state
├── App.tsx                        # Main app entry
├── assets
│   └── react.svg                   # Logo or static assets
├── components
│   └── layout
│       ├── Header.tsx / Header.css
│       ├── MainLayout.tsx / MainLayout.css
│       └── Sidebar.tsx / Sidebar.css
├── config
│   └── i18n.ts                     # Internationalization setup
├── core
│   └── api
│       ├── client.ts               # API client instance
│       └── types.ts                # Shared API types
├── features
│   ├── auth
│   │   ├── pages
│   │   │   ├── Login.tsx
│   │   │   ├── Signup.tsx
│   │   │   └── Auth.css
│   │   ├── store
│   │   │   └── authStore.ts        # Auth state management
│   │   └── types.ts
│   ├── dashboard
│   │   └── pages
│   │       ├── Dashboard.tsx
│   │       └── Dashboard.css
│   └── vehicles
│       ├── pages
│       │   └── VehiclesPage.tsx
│       └── types.ts
├── main.tsx                        # React DOM entry point
├── routes
│   ├── AppRoutes.tsx               # App-level route definitions
│   └── ProtectedRoute.tsx          # Route guard for authenticated pages
├── styles
│   └── globals.css                 # Global styles
└── types
    └── index.ts                    # Shared TypeScript types
```

---

## Features

* **Theming:** Light/Dark mode support via `ThemeProvider` and `useThemeStore`.
* **Routing:** Modular route setup with `AppRoutes` and protected routes.
* **State Management:** Centralized store in `store.ts`, feature-level stores for auth and other modules.
* **Feature-Based Structure:** Each feature has its own folder with pages, state, and types for scalability.
* **API Integration:** Centralized API client and type definitions for consistent requests.
* **Styling:** Modular CSS per component/page for maintainable UI.

---

## Getting Started

1. **Install dependencies**

```bash
npm install
# or
yarn install
```

2. **Run development server**

```bash
npm run dev
# or
yarn dev
```

3. **Build for production**

```bash
npm run build
# or
yarn build
```

4. **Preview production build**

```bash
npm run preview
# or
yarn preview
```

---

## Recommended Workflow

* Add new features under `features/` with separate pages, store, and types.
* Keep layouts and shared components in `components/layout`.
* Define all routes in `routes/AppRoutes.tsx`.
* Use `core/api/client.ts` for API calls to maintain consistency.
* Use `styles/globals.css` for global styles and per-component CSS for modularity.

---

This setup is ready for scaling, adding authentication, dashboards, and domain-specific modules like vehicles or reports.
