import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./features/home/Home";
import { EmployeesPage } from "./features/employees/EmployeePage";
import { Departments } from "./features/departments/Departments";
import { Profile } from "./features/profile/Profile";
import { About } from "./features/about/About";
import { Contact } from "./features/contact/Contact";
import { NotFound } from "./features/not-found/NotFound";
import EmployeeRegistrationForm from "./features/form/EmployeeRegistrationForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<EmployeeRegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
