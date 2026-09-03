import { useTasks } from "../../tasks/hooks/useTasks";
import { useAuth } from "../../auth/hooks/useAuth";

export default function DashboardSummary() {
  const { user } = useAuth();
  const { tasks, loading } = useTasks();

  if (!user) return null;
  if (loading) return <p>Loading dashboard...</p>;

  const total = tasks.length;
  const todo = tasks.filter((t) => t.status === "TODO").length;
  const inProgress = tasks.filter((t) => t.status === "IN_PROGRESS").length;
  const done = tasks.filter((t) => t.status === "DONE").length;

  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
        Dashboard
      </h1>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Tasks" value={total} />
        <StatCard label="Todo" value={todo} />
        <StatCard label="In Progress" value={inProgress} />
        <StatCard label="Done" value={done} />
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
      <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {value}
      </div>
    </div>
  );
}
