import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useTasks } from "../../tasks/hooks/useTasks";
import { getTaskCounts } from "../../tasks/utils/taskHelpers";

export const Dashboard = () => {
  const { user } = useAuth();

  const { tasks, isLoading } = useTasks();

  const { totalTasks, completedTasks, remainingTasks } = getTaskCounts(tasks);

  if (isLoading) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50">
        <p className="text-sm font-medium text-gray-600">
          Loading dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-gray-500">Your workspace</p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Welcome back, {user?.name || "User"}!
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Manage your work, track progress, and stay focused on the tasks that
            matter most.
          </p>

          <Link
            to="/tasks"
            className="mt-6 inline-flex rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white 
            transition-colors hover:bg-gray-800"
          >
            Manage tasks
          </Link>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-black">Task overview</h2>

              <p className="mt-1 text-sm text-gray-600">
                A quick summary of your current work.
              </p>
            </div>

            <span className="w-fit rounded-full border border-gray-300 bg-white px-3 py-1 text-sm text-gray-600">
              {user?.email}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <article className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium text-gray-500">Total tasks</p>

              <p className="mt-2 text-4xl font-bold text-black">{totalTasks}</p>

              <p className="mt-2 text-sm text-gray-500">
                All tasks you have created
              </p>
            </article>

            <article className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium text-gray-500">Completed</p>

              <p className="mt-2 text-4xl font-bold text-black">
                {completedTasks}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Tasks marked as completed
              </p>
            </article>

            <article className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium text-gray-500">Remaining</p>

              <p className="mt-2 text-4xl font-bold text-black">
                {remainingTasks}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Tasks still left to complete
              </p>
            </article>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-black">
                {totalTasks === 0
                  ? "Start with your first task"
                  : "Keep your momentum going"}
              </h2>

              <p className="mt-2 text-gray-600">
                {totalTasks === 0
                  ? "Create a task to begin organizing your work."
                  : `${remainingTasks} ${
                      remainingTasks === 1 ? "task is" : "tasks are"
                    } remaining in your workspace.`}
              </p>
            </div>

            <Link
              to="/tasks"
              className="w-fit rounded-lg border border-black bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-100"
            >
              {totalTasks === 0 ? "Create Task" : "View Tasks"}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};
