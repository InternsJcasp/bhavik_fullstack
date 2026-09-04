import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";

export const RegisterForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const { register, isLoading, error, fieldErrors } = useRegister();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register(values);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 px-4 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-md">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-black"
        >
          <span aria-hidden="true">←</span>
          Back
        </button>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-3xl font-bold tracking-tight text-black">
            Create your account
          </h1>

          <p className="mt-2 text-gray-600">
            Start organizing your tasks today.
          </p>

          {error && (
            <div className="mt-5 rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-sm text-black">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-black"
              >
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Your name"
                className={`w-full rounded-lg border px-4 py-3 text-black outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:bg-gray-100 ${
                  fieldErrors.name ? "border-black" : "border-gray-300"
                }`}
              />

              {fieldErrors.name && (
                <p className="mt-1.5 text-sm text-gray-700">
                  {fieldErrors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-black"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="you@example.com"
                className={`w-full rounded-lg border px-4 py-3 text-black outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:bg-gray-100 ${
                  fieldErrors.email ? "border-black" : "border-gray-300"
                }`}
              />

              {fieldErrors.email && (
                <p className="mt-1.5 text-sm text-gray-700">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-black"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Enter your password"
                className={`w-full rounded-lg border px-4 py-3 text-black outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:bg-gray-100 ${
                  fieldErrors.password ? "border-black" : "border-gray-300"
                }`}
              />

              {fieldErrors.password && (
                <p className="mt-1.5 text-sm text-gray-700">
                  {fieldErrors.password}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-black"
              >
                Confirm password
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                disabled={isLoading}
                placeholder="Repeat your password"
                className={`w-full rounded-lg border px-4 py-3 text-black outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:bg-gray-100 ${
                  fieldErrors.confirmPassword
                    ? "border-black"
                    : "border-gray-300"
                }`}
              />

              {fieldErrors.confirmPassword && (
                <p className="mt-1.5 text-sm text-gray-700">
                  {fieldErrors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {isLoading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-black underline underline-offset-4"
            >
              Login
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};
