import { Link } from "react-router-dom";
import { Code2, TrendingUp, Users, ArrowRight } from "lucide-react";
import { AppLayout } from "../../app/layout/AppLayout";

const departmentData = [
  {
    name: "Engineering",
    description:
      "Our engineering team builds reliable, scalable, and user-friendly products.",
    members: "Technology & Development",
    icon: Code2,
    color: "blue",
    responsibilities: [
      "Frontend and backend development",
      "Product architecture and maintenance",
      "Testing, security, and performance",
    ],
  },
  {
    name: "Sales",
    description:
      "Our sales team builds strong customer relationships and drives business growth.",
    members: "Business & Growth",
    icon: TrendingUp,
    color: "green",
    responsibilities: [
      "Customer relationship management",
      "Business development and partnerships",
      "Sales planning and performance tracking",
    ],
  },
];

const colorClasses = {
  blue: {
    icon: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    badge: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
  green: {
    icon: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    badge:
      "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  },
};

export function Departments() {
  return (
    <AppLayout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
            Employee Portal
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Departments
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
            Explore the teams that work together to build and grow our
            organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {departmentData.map((department) => {
            const Icon = department.icon;
            const colors = colorClasses[department.color];

            return (
              <article
                key={department.name}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${colors.icon}`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${colors.badge}`}
                  >
                    Active department
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {department.name}
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {department.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{department.members}</span>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">
                    Main responsibilities
                  </h4>

                  <ul className="mt-3 space-y-2">
                    {department.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-slate-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 bg-slate-800 dark:bg-stone-950 rounded-xl p-6 sm:p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="text-xl font-semibold">View all employees</h3>
              <p className="mt-2 text-slate-300">
                Use filters to find employees by department, age, salary, or
                name.
              </p>
            </div>

            <Link
              to="/employees"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-800 hover:bg-slate-200 transition-colors font-medium"
            >
              Explore Employees
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
