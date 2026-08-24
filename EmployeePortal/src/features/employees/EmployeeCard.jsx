export function EmployeeCard({ name, employeeId, dept, salary, email, photo }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row gap-4 shadow-sm hover:shadow-md transition-shadow">
      <img
        src={photo}
        alt={`${name} photo`}
        className="w-20 h-20 rounded-full object-cover mx-auto sm:mx-0"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <div className="mt-2 space-y-1 text-sm text-gray-700">
          <p>
            <strong className="text-gray-900">ID:</strong> {employeeId}
          </p>
          <p>
            <strong className="text-gray-900">Dept:</strong> {dept}
          </p>
          <p>
            <strong className="text-gray-900">Salary:</strong> $
            {salary.toLocaleString()}
          </p>
          <p>
            <strong className="text-gray-900">Email:</strong>{" "}
            <a
              href={`mailto:${email}`}
              className="text-blue-600 hover:underline"
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
