import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";
import LoginForm from "../features/auth/components/LoginForm";
import Layout from "./Layout";
import TaskList from "../features/tasks/components/TaskList";

export default function AppRoutes() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <Routes>
      <Route
        path="/login"
        element={!user ? <LoginForm /> : <Navigate to="/tasks" />}
      />
      <Route
        path="/tasks"
        element={
          user ? (
            <Layout>
              <TaskList />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="/" element={<Navigate to={user ? "/tasks" : "/login"} />} />
    </Routes>
  );
}
