import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./features/home/Home";
import { EmployeesPage } from "./features/employees/EmployeePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<EmployeesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
