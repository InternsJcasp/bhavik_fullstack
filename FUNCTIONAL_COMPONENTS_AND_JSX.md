# Functional Components & JSX (Production-Oriented Guide)

This document consolidates everything covered on **Functional Components** and **JSX** in a production-focused way, with examples and rules you can apply directly in a real React codebase.

---

## 1. Functional Components

### What They Are

A **functional component** is a JavaScript function that returns JSX. In modern React, this is the default way to write components.

```tsx
// src/components/ui/Button.tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

export function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="btn-primary"
    >
      {label}
    </button>
  );
}
```

**Production practices:**

- Use **TypeScript types** for props so the component contract is explicit.
- Keep components **pure**: same props → same JSX.
- Prefer **named exports** for easier refactoring and tree-shaking.

---

## 2. Component Naming

Naming conventions matter for readability, tooling, and onboarding.

**Rules to follow:**

- **File name = component name**, PascalCase:
  - `Button.tsx`, `LoginForm.tsx`, `DashboardPage.tsx`
- **Exported component name** matches the file:
  - `export function Button(...)`, `export function LoginForm(...)`
- Use **domain-driven names** for feature components:
  - `OrderTable`, `UserAvatar`, `InvoiceSummary`
- Avoid generic names like `Card1`, `Card2`; use `PricingCard`, `StatsCard`, `NotificationCard`.

**Example:**

```tsx
// src/features/auth/LoginForm.tsx
export function LoginForm() {
  // ...
}
```

This makes it obvious what the component does just from the import path.

---

## 3. Component Structure

A clean, production-ready functional component usually follows this internal structure:

```tsx
type Props = {
  userId: string;
  onLogout: () => void;
};

export function Header({ userId, onLogout }: Props) {
  // 1. Hooks (state, effects, context, etc.)
  // 2. Derived data / local variables
  // 3. Event handlers
  // 4. Return JSX
}
```

**Inside the function:**

1. **Hooks first** – `useState`, `useEffect`, custom hooks, context.
2. **Derived data** – computed values, formatting, filtering.
3. **Handlers** – `onClick`, `onChange`, etc.
4. **Return JSX** – keep it as clean as possible; extract complex parts into sub-components.

**Example:**

```tsx
type DashboardStatsProps = {
  totalOrders: number;
  revenue: number;
};

export function DashboardStats({ totalOrders, revenue }: DashboardStatsProps) {
  // Hooks (if any)

  // Derived data
  const formattedRevenue = `$${revenue.toLocaleString()}`;

  // Handlers (if any)

  // JSX
  return (
    <div className="dashboard-stats">
      <div className="stat">
        <span className="label">Total Orders</span>
        <span className="value">{totalOrders}</span>
      </div>
      <div className="stat">
        <span className="label">Revenue</span>
        <span className="value">{formattedRevenue}</span>
      </div>
    </div>
  );
}
```

In production, if the JSX gets too big, you split it into smaller components instead of having one giant return block.

---

## 4. Component Reusability

Reusability comes from:

- **Clear props interface** – only what the component needs.
- **No hidden dependencies** – don’t reach into global state inside a “dumb” UI component unless that’s its purpose.
- **Configurable via props** – text, handlers, flags, children.

**Example: Reusable `Button`**

```tsx
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
};

export function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
}
```

**Usage:**

```tsx
<Button onClick={() => console.log("clicked")}>Save</Button>
<Button variant="danger" onClick={handleDelete}>Delete</Button>
```

In a real codebase, you’d also add accessibility (ARIA), loading states, and maybe icon support, but the principle is the same: small, configurable, reusable.

---

## 5. Component Composition

**Composition** means building complex UIs by combining smaller components instead of making one giant component.

You compose via:

- **Children prop**
- **Props that accept components** (`renderX`, `header`, `footer`)
- **Layout components** that wrap content

**Example using `children`:**

```tsx
type CardProps = {
  title: string;
  children: React.ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{children}</div>
    </div>
  );
}
```

**Usage:**

```tsx
<Card title="Order Summary">
  <OrderTable orders={orders} />
</Card>

<Card title="User Profile">
  <UserDetails user={user} />
</Card>
```

Composition keeps components small, testable, and reusable. In production, you should rarely see a component that does everything; instead, you see small pieces composed together.

---

## 6. JSX: Syntax

**JSX** is a syntax extension that lets you write HTML-like markup inside JavaScript. It gets compiled to `React.createElement` calls. [web:63][web:66]

**Basic example:**

```tsx
const element = <h1>Hello, team</h1>;
```

**Key syntax rules:**

- Tags must be properly opened and closed.
- Self-closing tags for elements without children: `<img />`, `<input />`.
- Multi-line JSX must be wrapped in parentheses:

```tsx
return (
  <div>
    <h1>Dashboard</h1>
    <p>Welcome back</p>
  </div>
);
```

---

## 7. JSX Expressions

You can embed any valid JavaScript **expression** inside JSX using `{}`.

**Examples:**

```tsx
const userName = "JCasp";

// Text content
<h1>Hello, {userName}</h1>

// Computed value
<p>Total: {orders.length} orders</p>

// Function call
<span>{formatDate(order.createdAt)}</span>

// Ternary
<p>{isLoggedIn ? "Logged in" : "Guest"}</p>
```

**Important:**

- Only **expressions**, not statements. No `if`, `for`, `while` directly inside `{}`. Use ternaries or extract logic before the return.
- Keep expressions simple; if it gets complex, compute it above the `return`.

---

## 8. JSX Attributes

JSX attributes look like HTML but follow JavaScript naming rules.

**Examples:**

```tsx
<input type="email" placeholder="Enter email" />

<img src={user.avatarUrl} alt={user.name} />

<button className="btn-primary" disabled={isSubmitting}>
  Submit
</button>
```

**Key differences from HTML:**

- Use **camelCase** for multi-word attributes: `tabIndex`, `strokeWidth`.
- Use `className` instead of `class`.
- Use `htmlFor` instead of `for` on labels.
- Attribute values can be:
  - Strings: `className="btn"`
  - Expressions: `disabled={isSubmitting}`, `src={user.avatarUrl}`.

**Don’t mix quotes and braces:**

```tsx
// Wrong
<img src="{user.avatarUrl}" />

// Correct
<img src={user.avatarUrl} />
```

---

## 9. JSX Elements

A **JSX element** is the result of writing something like `<Button />` or `<div>...</div>`. JSX elements are JavaScript expressions and can be used anywhere expressions are allowed.

**Examples:**

```tsx
const button = <Button onClick={handleClick}>Click me</Button>;

function Page() {
  const header = <Header userId={userId} onLogout={handleLogout} />;

  return (
    <div>
      {header}
      <main>
        <button>Plain button</button>
        {button}
      </main>
    </div>
  );
}
```

You can store JSX elements in variables, pass them as props, or return them conditionally.

---

## 10. JSX Rules (Must-Know in Production)

Core rules you should enforce in your codebase:

### 1. Single Root Element

A JSX expression must have exactly one outermost element.

```tsx
// Wrong
return (
  <h1>Title</h1>
  <p>Subtitle</p>
);

// Correct
return (
  <>
    <h1>Title</h1>
    <p>Subtitle</p>
  </>
);
```

Use a fragment `<>...</>` when you don’t need an extra `<div>`.

### 2. Close Every Tag

- `<div>...</div>`
- `<img />`, `<input />`, `<br />` [web:70]

### 3. Use DOM Property Names

- `className` instead of `class`
- `htmlFor` instead of `for`
- camelCase for most attributes (`tabIndex`, `strokeWidth`); `aria-*` and `data-*` stay kebab-case.

### 4. Expressions Inside `{}`

- Use `{}` to insert JavaScript expressions in text or attributes.
- No statements (`if`, `for`) directly inside JSX; move logic outside or use ternaries.

### 5. Multi-line JSX in Parentheses

Wrap multi-line JSX in `()` for clarity and to avoid return pitfalls.

---

## 11. JSX vs HTML

Conceptually similar, but with important differences:

- **JSX is JavaScript**, not HTML. It gets compiled to JS function calls.
- **Attributes use camelCase** and JS naming: `className`, `htmlFor`, `tabIndex`.
- **Values can be expressions**:

  ```tsx
  // HTML-like thinking
  <img src="avatar.png" />

  // JSX with dynamic value
  <img src={user.avatarUrl} />
  ```

- **Inline styles are objects**, not CSS strings:

  ```tsx
  <div style={{ display: "flex", gap: 8 }} />
  ```

- **No raw HTML strings** unless you explicitly use `dangerouslySetInnerHTML` (and you usually avoid that).
- **Components look like tags**: `<Button />`, `<LoginForm />` – these are not HTML elements; they’re your own components.

In production, you treat JSX as “HTML-like JavaScript” with strict rules, not as loose HTML.

---

## 12. How to Use This Document

- Use this as a reference when writing or reviewing components.
- When onboarding new engineers, point them here for component and JSX standards.
- When doing code reviews, check:
  - Component naming and structure
  - Reusability and composition
  - JSX syntax and rules (single root, attributes, expressions)

You can save this file as `FUNCTIONAL_COMPONENTS_AND_JSX.md` in your project’s docs folder.
