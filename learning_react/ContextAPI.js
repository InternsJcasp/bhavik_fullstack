// Problem: In React, data normally flows top-down via props. When many components need the same data (like theme, user, notifications), passing props through many layers becomes messy.

import { useState } from "react";

// Context API: It is React's built-in solution for sharing “global” data across the component tree without prop drilling.

// Use cases in production apps:
// Theme (dark/light)
// Authentication (user, login state)
// Notifications count
// Language/locale
// Feature flags

// Prop Drilling: passing data through multiple intermediate components that don’t need it, just to reach a deep child.

function App() {
  const [theme, setTheme] = useState("light");
  return <Layout theme={theme} setTheme={setTheme} />;
}

function Layout({ theme, setTheme }) {
  return <Header theme={theme} setTheme={setTheme} />;
}

function Header({ theme, setTheme }) {
  return <ThemeToggle theme={theme} setTheme={setTheme} />;
}

function ThemeToggle({ theme, setTheme }) {
  // finally uses theme & setTheme
}

// Problem: Here, Layout and Header don’t really need theme; they just pass it down. This is prop drilling.

// Global state
// It's a state that many parts of the app need:

// Ex:
// Current user
// Theme
// Notifications count
// Auth status

// Context is one way to manage global state in React (others: Redux, Zustand, etc.). For many apps, Context + useReducer or multiple contexts is enough.

// Step-1: Create Context.

import { createContext } from "react";
export const ThemeContext = createContext(null);

// Step-2: Provider: A Provider component makes the context value available to its subtree.

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Usage in App.jsx:
function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

// Now any component inside MainApp can access theme and setTheme.

// Step-3: Consumer (Old Way):

function ThemeToggle() {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Current: {theme}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

// Step-4: useContext(Modern Way):
// Rules:
// useContext(SomeContext) must be called inside a function component.
// There must be a <SomeContext.Provider> above that component in the tree.

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current: {theme}
    </button>
  );
}

// How Provider make state availabe to multiple Components: One Source of Truth, Many Consumers.
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = { theme, setTheme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// What Problems solved:
// Header can show current theme and a toggle button.
// Footer can style itself based on theme.
// SettingsPage can have a theme selector.
// All of them read/write the same theme state.

// Production pattern:
// Put logic (like toggle, validation, persistence) inside the Provider.
// Expose a clean API via value (e.g., { theme, toggleTheme }).
// Components just call useContext(ThemeContext) and use that API.
