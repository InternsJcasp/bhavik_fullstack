import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./app/Layout/AppLayout";
import { HomePage } from "./app/components/HomePage";

import { AuthGuard } from "./features/auth/components/AuthGuard";
import { Dashboard } from "./features/auth/components/Dashboard";
import { LoginForm } from "./features/auth/components/LoginForm";
import { RegisterForm } from "./features/auth/components/RegisterForm";

import { TasksPage } from "./features/tasks/components/TasksPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="login" element={<LoginForm />} />

          <Route path="register" element={<RegisterForm />} />

          <Route
            path="dashboard"
            element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            }
          />

          <Route
            path="tasks"
            element={
              <AuthGuard>
                <TasksPage />
              </AuthGuard>
            }
          />

          <Route
            path="*"
            element={
              <div className="min-h-[calc(100vh-64px)] bg-gray-50 px-4 py-20 text-center">
                <h1 className="text-3xl font-bold text-black">
                  Page not found
                </h1>

                <p className="mt-3 text-gray-600">
                  The page you are looking for does not exist.
                </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
