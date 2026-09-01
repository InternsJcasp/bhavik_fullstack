import { createContext, useContext, useState, useEffect } from "react";

// 1. Context create karna
export const NotificationContext = createContext(null);

const NOTIF_KEY = "theme-app-manager-notifications";

// 2. Provider component
export function NotificationProvider({ children }) {
  // 3. Notifications state (localStorage se initialize)
  const [notifications, setNotifications] = useState(() => {
    if (typeof window === "undefined") return [];

    const stored = localStorage.getItem(NOTIF_KEY);
    if (!stored) return [];

    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  });

  // 4. Persist notifications jab bhi change hon
  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.setItem(NOTIF_KEY, JSON.stringify(notifications));
  }, [notifications]);

  // 5. Naya notification add karna
  const addNotification = (message) => {
    const newNotif = {
      id: Date.now().toString(),
      message,
      read: false,
      createdAt: new Date().toISOString(),
    };

    setNotifications((prev) => [newNotif, ...prev]);
  };

  // 6. Notification ko read mark karna
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  // 7. Notification remove karna
  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // 8. Unread count calculate karna
  const unreadCount = notifications.filter((n) => !n.read).length;

  // 9. Provider ko jo value deni hai
  const value = {
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    removeNotification,
  };

  // 10. Provider return karna
  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

// 11. Custom hook
export function useNotifications() {
  const ctx = useContext(NotificationContext);
  if (!ctx) {
    throw new Error(
      "useNotifications must be used inside a NotificationProvider",
    );
  }
  return ctx;
}
