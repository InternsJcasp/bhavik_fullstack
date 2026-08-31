import { Link } from "react-router-dom";
import { Database, Gauge, Search, ShieldCheck, ArrowRight } from "lucide-react";
import { AppLayout } from "../../app/layout/AppLayout";

const features = [
  {
    icon: Database,
    title: "Centralized employee data",
    text: "Keep employee information available in one clean and organized portal.",
  },
  {
    icon: Search,
    title: "Smart filtering",
    text: "Search and filter employees using name, department, age, and salary.",
  },
  {
    icon: Gauge,
    title: "Fast experience",
    text: "Cached employee data helps the portal load previously fetched records quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable interface",
    text: "Clear loading, error, and empty states make the application easier to use.",
  },
];

export function About() {
  return (
    <AppLayout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
            About EPortal
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            A simple workspace for employee information
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Employee Portal is designed to make employee data easy to browse,
            search, and understand. It combines a focused layout with practical
            filtering and responsive pages.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm"
              >
                <div className="w-11 h-11 rounded-lg bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="mt-5 font-semibold text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {feature.text}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800 dark:bg-stone-950 rounded-xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl font-semibold">Built for clarity</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Every page follows the same layout system so users can move
              between the dashboard, employee records, departments, and support
              pages without confusion.
            </p>

            <Link
              to="/employees"
              className="mt-6 inline-flex items-center gap-2 text-white hover:text-slate-300 font-medium"
            >
              Browse employee records
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Our approach
            </h3>

            <div className="mt-5 space-y-4">
              <Step number="01" text="Keep information easy to discover." />
              <Step
                number="02"
                text="Provide useful filters and clear states."
              />
              <Step
                number="03"
                text="Maintain a responsive and consistent UI."
              />
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

function Step({ number, text }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
        {number}
      </span>
      <p className="text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  );
}
