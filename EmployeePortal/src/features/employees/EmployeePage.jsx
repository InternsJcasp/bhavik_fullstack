import { AppLayout } from "../../app/layout/AppLayout";
import { EmployeeList } from "./EmployeeList";
import { employees } from "../../data/Employees";

export function EmployeesPage() {
  return (
    <AppLayout>
      <section className="max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Our Employees
        </h2>
        <EmployeeList employees={employees} />
      </section>
    </AppLayout>
  );
}
