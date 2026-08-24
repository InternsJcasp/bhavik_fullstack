# React SPA Architecture & Project Structure (Production-Oriented)

## 1. Why This Architecture?

This structure is designed for internal SPA dashboards built with React + Vite. It focuses on:

- **Maintainability**: clear boundaries between features and shared code
- **Scalability**: easy to add new features without breaking existing ones
- **Testability**: isolated components and services that can be unit-tested
- **Team-friendliness**: predictable locations for components, hooks, and API calls

React apps are built from independent components, each with its own logic and appearance. [web:1][web:12]  
Grouping code by **feature** (e.g., `auth`, `dashboard`, `orders`) instead of just by file type keeps the codebase understandable as it grows. [web:33][web:35][web:36]

---

## 2. High-Level Architecture (SPA Dashboard)

```text
Browser
  └─ index.html (single HTML entry point) [web:41]
       └─ main.tsx (renders <App /> into #root) [web:34][web:41]
            └─ App.tsx
                 ├─ Router (React Router) [web:39][web:47]
                 │    ├─ /login → LoginPage
                 │    └─ /dashboard → DashboardPage
                 ├─ Providers (auth, theme, query client, etc.)
                 └─ Layout (Header, Sidebar, Content area) [web:34][web:40]
```

Key layers:

- **Entry point**: `main.tsx` mounts the React app. [web:34][web:41]
- **Router**: maps URLs to page components and wraps them in layouts. [web:39][web:47]
- **Providers**: global context (auth user, theme, API client, error boundaries).
- **Layout**: shared shell (header, sidebar, main content area).
- **Features**: business modules (`auth`, `dashboard`, `orders`, etc.) that own their own components, hooks, and API calls. [web:33][web:35][web:38]
- **Shared UI**: reusable components (`Button`, `Input`, `Modal`, `Table`) used across features. [web:35][web:46]
- **Services**: HTTP client, error handling, request/response types. [web:35][web:38][web:46]

This keeps the app scalable: each feature can evolve independently while shared pieces stay consistent. [web:33][web:36]

---

## 3. Recommended Folder Structure

```text
my-dashboard/
├─ public/                  # Static assets (favicons, etc.)
├─ src/
│  ├─ app/
│  │  ├─ router.tsx        # Route definitions (React Router) [web:39][web:47]
│  │  ├─ providers.tsx     # Global providers (Auth, Theme, QueryClient, etc.)
│  │  └─ layout/
│  │     ├─ AppLayout.tsx  # Main layout wrapper
│  │     ├─ Header.tsx
│  │     └─ Sidebar.tsx
│  │
│  ├─ features/
│  │  ├─ auth/
│  │  │  ├─ LoginForm.tsx
│  │  │  ├─ authSlice.ts or authStore.ts   # Global auth state (if using Redux/Zustand)
│  │  │  └─ authApi.ts                     # Auth-related API calls
│  │  │
│  │  └─ dashboard/
│  │     ├─ DashboardPage.tsx
│  │     ├─ DashboardStats.tsx
│  │     └─ dashboardApi.ts
│  │
│  ├─ components/
│  │  └─ ui/
│  │     ├─ Button.tsx
│  │     ├─ Input.tsx
│  │     ├─ Modal.tsx
│  │     └─ Table.tsx
│  │
│  ├─ hooks/
│  │  ├─ useAuth.ts
│  │  └─ useDebounce.ts
│  │
│  ├─ services/
│  │  └─ apiClient.ts      # Base axios/fetch client, interceptors, error handling
│  │
│  ├─ styles/
│  │  └─ globals.css       # Global styles, CSS variables, resets
│  │
│  ├─ utils/
│  │  └─ formatDate.ts     # Pure helper functions
│  │
│  ├─ App.tsx              # Root component (providers + router + layout)
│  └─ main.tsx             # Entry point: renders <App /> into #root [web:34][web:41]
│
├─ index.html               # Single HTML document for the SPA [web:41]
├─ package.json
├─ vite.config.ts
└─ tsconfig.json (if using TypeScript)
```

### Another React Folder Structure:

```
src/
  app/
    router.tsx
    providers.tsx
    layout/
      AppLayout.tsx
      Header.tsx
      Sidebar.tsx
  features/
    auth/
      LoginForm.tsx
      authSlice.ts or authStore.ts
      authApi.ts
    dashboard/
      DashboardPage.tsx
      DashboardStats.tsx
      dashboardApi.ts
  components/
    ui/
      Button.tsx
      Input.tsx
      Modal.tsx
      Table.tsx
  hooks/
    useAuth.ts
    useDebounce.ts
  services/
    apiClient.ts
  styles/
    globals.css
  utils/
    formatDate.ts
  App.tsx
  main.tsx
```

### Explanation of Key Folders

- **`app/`**: Application-level wiring.
  - `router.tsx`: defines routes and guards (e.g., protected routes for logged-in users). [web:39][web:47]
  - `providers.tsx`: wraps the app with global contexts (auth, theme, query client).
  - `layout/`: shared layout components (header, sidebar, content wrapper). [web:34][web:40]

- **`features/`**: Business modules. Each feature owns:
  - Page-level components (`DashboardPage`, `LoginForm`)
  - Feature-specific components (`DashboardStats`)
  - Feature-specific hooks (if any)
  - API calls related to that feature (`authApi`, `dashboardApi`) [web:33][web:35][web:38]

- **`components/ui/`**: Reusable, generic UI components used across features. [web:35][web:46]
  - These should be **dumb** (presentational) and receive data via props.

- **`hooks/`**: Reusable custom hooks used across features (e.g., `useAuth`, `useDebounce`).

- **`services/`**: Centralized API layer.
  - `apiClient.ts`: base HTTP client (axios/fetch), interceptors (auth token), error handling. [web:35][web:38][web:46]

- **`styles/`**: Global styles, CSS variables, resets, and theme tokens.

- **`utils/`**: Pure utility functions (formatting, validation helpers).

- **`App.tsx` + `main.tsx`**:
  - `main.tsx`: renders `<App />` into the DOM. [web:34][web:41]
  - `App.tsx`: wires together providers, router, and layout.

---

## 4. Design Principles

1. **Feature-first organization**  
   Group code by business domain (`auth`, `dashboard`, `orders`) instead of just by type. [web:33][web:35][web:36]  
   This makes it easier to locate and modify all code related to a feature.

2. **Clear boundaries**
   - Features should not depend on each other’s internals.
   - Shared logic goes into `hooks/`, `components/ui/`, or `services/`.

3. **Small, focused components**  
   Each component should do one thing well and be easy to test. [web:1][web:12]

4. **Centralized API layer**  
   All HTTP calls go through `services/apiClient.ts` and feature-specific API modules (`authApi`, `dashboardApi`). [web:35][web:38][web:46]  
   This simplifies error handling, auth headers, and mocking in tests.

5. **Global state only when needed**  
   Prefer local component state. Use global state (context, Redux, Zustand) only for truly shared concerns like auth user, theme, or cached data. [web:38][web:47]

---

## 5. How This Maps to SPA Behavior

- The browser loads `index.html` once. [web:41]
- `main.tsx` mounts React into `#root`. [web:34][web:41]
- The router handles navigation inside the app without full page reloads. [web:39][web:47]
- Each feature module fetches its own data via the API layer and renders its components.
- Shared UI and utilities keep the codebase consistent and reduce duplication.

This structure supports a production-grade React SPA that is easy to extend, test, and hand over to other engineers.

---

## 6. Next Steps (for your learning path)

After you internalize this structure, we can:

1. Generate a Vite + React project and refactor it to match this layout.
2. Add React Router and implement `/login` and `/dashboard` routes.
3. Build reusable `Button` and `Input` components and wire them into a login form.

You can save this file as `REACT_ARCHITECTURE_AND_STRUCTURE.md` in your project root or docs folder.
