import { EmployeeCard } from "./EmployeeCard";

export function EmployeeList({ employees }) {
  if (!employees || employees.length === 0) {
    return <p className="text-gray-700">No employees found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {employees.map((emp) => (
        <EmployeeCard
          key={emp.id}
          name={emp.name}
          employeeId={emp.id}
          dept={emp.dept}
          salary={emp.salary}
          email={emp.email}
          photo={emp.photo}
        />
      ))}
    </div>
  );
}
