// src/features/home/Home.jsx

import { AppLayout } from "../../app/layout/AppLayout";

export function Home() {
  return (
    <AppLayout pageTitle="Employee Portal - Home">
      <section className="max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Welcome to Employee Portal
        </h2>
        <p className="text-gray-700 mb-6">
          This is a demo app to learn React with a real-world example.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-800">
          <li>Functional Components</li>
          <li>Props & One-Way Data Flow</li>
          <li>Lists, Keys, .map()</li>
          <li>Component Composition & Reusability</li>
        </ul>
      </section>
    </AppLayout>
  );
}
