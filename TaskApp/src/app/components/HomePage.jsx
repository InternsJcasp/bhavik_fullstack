import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700">
            Simple task management
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Organize your work.
            <span className="block">Finish more tasks.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            Create tasks, manage priorities, and stay focused with a simple
            workspace built for your everyday work.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/register"
              className="rounded-lg bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Get Started Free
            </Link>

            <Link
              to="/login"
              className="rounded-lg border border-black bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-100"
            >
              Login to your account
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-black text-xl text-white">
              1
            </div>

            <h2 className="mt-5 text-lg font-bold text-black">
              Create tasks quickly
            </h2>

            <p className="mt-2 leading-6 text-gray-600">
              Add all your work in one place and avoid forgetting important
              tasks.
            </p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-black text-xl text-white">
              2
            </div>

            <h2 className="mt-5 text-lg font-bold text-black">
              Set clear priorities
            </h2>

            <p className="mt-2 leading-6 text-gray-600">
              Focus on the work that matters most instead of managing a messy
              list.
            </p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-black text-xl text-white">
              3
            </div>

            <h2 className="mt-5 text-lg font-bold text-black">
              Track progress
            </h2>

            <p className="mt-2 leading-6 text-gray-600">
              Complete tasks and see your daily progress without unnecessary
              complexity.
            </p>
          </article>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © 2026 TaskFlow. Stay organized, stay productive.
      </footer>
    </div>
  );
};
