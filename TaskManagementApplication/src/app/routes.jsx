import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";
import LoginForm from "../features/auth/components/LoginForm";
import Layout from "./Layout";
import DashboardSummary from "../features/dashboard/components/DashboardSummary";
import TaskList from "../features/tasks/components/TaskList";

export default function AppRoutes() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes key={user ? user.id : "guest"}>
      <Route
        path="/login"
        element={user ? <Navigate to="/dashboard" replace /> : <LoginForm />}
      />
      <Route
        path="/dashboard"
        element={
          user ? (
            <Layout>
              <DashboardSummary />
              <TaskList />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/tasks"
        element={
          user ? (
            <Layout>
              <TaskList />
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="/"
        element={
          user ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}
