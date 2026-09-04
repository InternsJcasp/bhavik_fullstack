import { useAuth } from "../hooks/useAuth";

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-gray-500">Your workspace</p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Welcome back, {user?.name || "User"}!
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Manage your work, stay focused, and keep your daily tasks organized
            from one place.
          </p>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold text-black">Task overview</h2>

            <span className="w-fit rounded-full border border-gray-300 bg-white px-3 py-1 text-sm text-gray-600">
              {user?.email}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <article className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium text-gray-500">Total tasks</p>
              <p className="mt-2 text-4xl font-bold text-black">0</p>
              <p className="mt-2 text-sm text-gray-500">
                Tasks you have created
              </p>
            </article>

            <article className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium text-gray-500">In progress</p>
              <p className="mt-2 text-4xl font-bold text-black">0</p>
              <p className="mt-2 text-sm text-gray-500">
                Tasks you are currently working on
              </p>
            </article>

            <article className="rounded-xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium text-gray-500">Completed</p>
              <p className="mt-2 text-4xl font-bold text-black">0</p>
              <p className="mt-2 text-sm text-gray-500">
                Tasks you have completed
              </p>
            </article>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
          <h2 className="text-xl font-bold text-black">No tasks yet</h2>

          <p className="mt-2 text-gray-600">Tasks will be here</p>

          <button
            type="button"
            className="mt-6 rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Create your first task
          </button>
        </section>
      </main>
    </div>
  );
};
