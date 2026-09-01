import { useNotifications } from "../contexts/NotificationContext";

export default function NotificationsPage() {
  const { notifications, markAsRead, removeNotification } = useNotifications();

  return (
    <div className="min-h-screen bg-gray-50 p-6 text-gray-900 dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold">Notifications</h1>

        {notifications.length === 0 ? (
          <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <p className="text-gray-700 dark:text-gray-300">
              No notifications yet.
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Try to change Theme using Settings then the Notifications will be
              shown.
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {notifications.map((n) => (
              <li
                key={n.id}
                className={`rounded-lg border p-4 shadow-sm ${
                  n.read
                    ? "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
                    : "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-gray-900 dark:text-white">{n.message}</p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      {new Date(n.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    {!n.read && (
                      <button
                        onClick={() => markAsRead(n.id)}
                        className="rounded bg-blue-600 px-3 py-1 text-xs text-white hover:bg-blue-700"
                      >
                        Mark as read
                      </button>
                    )}
                    <button
                      onClick={() => removeNotification(n.id)}
                      className="rounded bg-red-600 px-3 py-1 text-xs text-white hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Context API demo note */}
        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
          <p className="font-semibold">Context API in action:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>
              <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800">
                useNotifications
              </code>{" "}
              → notifications list, markAsRead, removeNotification
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
