import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
