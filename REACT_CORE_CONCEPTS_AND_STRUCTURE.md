# React Core Concepts & App Structure (Production-Oriented)

This document explains the key React architecture concepts you asked for, then shows how they map to a real React app structure.

---

## 1. Component-Based Architecture

**Idea:** The UI is split into small, reusable pieces called **components**. Each component owns a focused part of the interface and its behavior.

**Why it matters in production:**

- **Reusability:** A `Button`, `Input`, `Modal`, or `UserCard` can be used across many screens. [web:1]
- **Maintainability:** Changes to a component affect all places it’s used, reducing duplication and bugs.
- **Testability:** Small components are easier to unit-test in isolation.
- **Team scalability:** Different engineers can own different components or features without stepping on each other.

**Example mental model:**

- `App` → root component
  - `Header`
  - `Sidebar`
  - `DashboardPage`
    - `DashboardStats`
    - `RecentOrdersTable`

Each of these is a component with its own props, state (if needed), and rendering logic.

---

## 2. Virtual DOM

**Idea:** The **Virtual DOM (VDOM)** is a lightweight, in-memory representation of what the UI should look like. It’s a tree of plain JavaScript objects describing components, elements, props, and children.

**Key points:**

- It is **not** a full copy of the real DOM; it’s a description of the UI based on your components’ return values.
- When state or props change, React creates a **new VDOM tree** and compares it with the previous one.
- This comparison is called **diffing**; the process of updating the real DOM to match the new VDOM is called **reconciliation**.

**Why it matters in production:**

- React updates only the parts of the real DOM that actually changed, which is faster than re-rendering entire pages.
- The reconciliation algorithm (Fiber) allows **incremental rendering**, so large UIs can update smoothly without blocking the main thread for too long.

---

## 3. Rendering in React

**Rendering** is the process where React:

1. Calls your component functions (or class `render` methods) to get a description of the UI (VDOM).
2. Compares the new VDOM with the previous one (diffing).
3. Applies minimal changes to the real DOM (reconciliation).

**What triggers a re-render?**

- A component’s **state** changes (`setState` / `useState` setter).
- A component’s **props** change (because its parent re-rendered).
- A parent component re-renders, which may cause children to re-render unless optimized.

**Production considerations:**

- Avoid heavy work inside render; keep components pure and fast.
- Use keys correctly in lists so React can efficiently match items between renders.
- Don’t declare components inside other components; that breaks reconciliation and causes unnecessary re-mounts.

---

## 4. Component Tree

**Idea:** All components in a React app form a **component tree**, starting from the root (`App`) down to the smallest leaf components.

Example:

```text
<App>
  ├─ <AppLayout>
  │   ├─ <Header>
  │   └─ <Sidebar>
  └─ <DashboardPage>
      ├─ <DashboardStats>
      └─ <RecentOrdersTable>
          └─ <OrderRow>
```

**Why it matters:**

- The tree defines **ownership** of state and props.
- Data flows down this tree via props.
- Events and callbacks flow up the tree (child → parent).
- Understanding the tree helps you decide where to lift state and how to structure features.

In production code, you should be able to look at the folder structure and mentally reconstruct this tree.

---

## 5. Data Flow (Unidirectional / One-Way)

**Idea:** React uses **unidirectional (one-way) data flow**: data flows from parent to child via **props**, and changes flow back up via callbacks/events.

**Core rules:**

- **State** lives in the component that owns it (often a parent).
- State is passed down to children as **props** (read-only).
- Children cannot directly modify props; they request changes by calling callbacks passed from the parent.
- When state changes, React re-renders that component and its descendants, propagating new props down the tree.

**Simple flow:**

1. Parent owns `state` (e.g., `user`, `orders`).
2. Parent passes `user` and `orders` down as props to children.
3. Child triggers an action (e.g., “delete order”) by calling a callback prop.
4. Parent updates its state; new state flows down again as new props.

**Why it matters in production:**

- Predictable data flow makes debugging easier: you know where state lives and how it changes.
- It enforces a **single source of truth** for each piece of data.
- It scales better in large apps than two-way binding, which can become hard to reason about.

---

## 6. React App Structure (How These Concepts Map to Files)

Now, map these concepts to a typical Vite + React SPA structure.

### 6.1 Entry Point & Root Component

- `index.html` – single HTML document for the SPA.
- `src/main.tsx` – mounts React into `#root` by rendering `<App />`.
- `src/App.tsx` – root component; wires providers, router, and layout.

This is where the **component tree** starts: `main.tsx` → `App` → rest of the app.

### 6.2 App-Level Wiring (`app/`)

```text
src/app/
  router.tsx        # Route definitions (React Router)
  providers.tsx     # Global providers (Auth, Theme, QueryClient, etc.)
  layout/
    AppLayout.tsx   # Main layout wrapper
    Header.tsx
    Sidebar.tsx
```

- `router.tsx` defines which component renders for each URL (e.g., `/login`, `/dashboard`). This shapes the top of your component tree per route.
- `providers.tsx` wraps the tree with global context (auth user, theme, API client).
- `layout/` components form the persistent shell around page components.

### 6.3 Features (`features/`)

```text
src/features/
  auth/
    LoginForm.tsx
    authApi.ts
  dashboard/
    DashboardPage.tsx
    DashboardStats.tsx
    dashboardApi.ts
```

Each feature:

- Contains **page-level** and **feature-specific** components (part of the component tree).
- Owns its own data fetching via `*Api.ts` modules.
- Uses **unidirectional data flow**:
  - State (local or global) → props → child components.
  - Child components call callbacks to request changes.

### 6.4 Shared UI (`components/ui/`)

```text
src/components/ui/
  Button.tsx
  Input.tsx
  Modal.tsx
  Table.tsx
```

These are **reusable, presentational components**:

- Receive data via props.
- Emit events via callbacks.
- Are used across many features, reinforcing **component-based architecture**.

### 6.5 Hooks, Services, Utils

```text
src/hooks/
  useAuth.ts
  useDebounce.ts

src/services/
  apiClient.ts

src/utils/
  formatDate.ts
```

- **Hooks**: encapsulate reusable logic (e.g., reading auth state, debouncing input).
- **Services**: centralize HTTP calls, interceptors, error handling (used by feature API modules).
- **Utils**: pure helper functions.

### 6.6 How Rendering & Virtual DOM Fit In

At runtime:

1. `main.tsx` renders `<App />` into the DOM.
2. `App` renders providers + router + layout.
3. Router picks a page component (e.g., `DashboardPage`).
4. That page renders its child components (`DashboardStats`, `RecentOrdersTable`, etc.).
5. Each render produces a **VDOM tree**.
6. When state or props change, React:
   - Re-renders affected components.
   - Diffs the new VDOM against the old one.
   - Updates only the changed parts of the real DOM (reconciliation).

Understanding this flow helps you:

- Decide where to put state (which component owns it).
- Avoid unnecessary re-renders.
- Structure components so the tree is clear and testable.

---

## 7. Summary of Concepts

- **Component-Based Architecture:** UI is built from small, reusable components.
- **Virtual DOM:** In-memory description of the UI used to compute efficient updates.
- **Rendering:** Components → VDOM → diff → reconcile → update real DOM.
- **Component Tree:** Hierarchical structure of components from `App` down to leaves.
- **Data Flow:** Unidirectional: parent state → child props; child events/callbacks → parent state updates.
- **App Structure:** Files and folders reflect these concepts: entry point, root component, layout, features, shared UI, hooks, services.

Use this document alongside your codebase: as you read a file, ask yourself which concept it represents (component, part of the tree, data flow, rendering behavior, etc.).
