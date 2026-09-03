import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";
import Login from "../features/auth/components/LoginForm";
import TaskList from "../features/tasks/components/TaskList";

export default function AppRoutes() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/tasks" />}
      />
      <Route
        path="/tasks"
        element={user ? <TaskList /> : <Navigate to="/login" />}
      />
      <Route
        path="/"
        element={<Navigate to={user ? <TaskList /> : <Login />} />}
      />
    </Routes>
  );
}
