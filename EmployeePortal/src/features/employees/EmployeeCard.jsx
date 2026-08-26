export function EmployeeCard({
  name,
  employeeId,
  age,
  dept,
  salary,
  email,
  photo,
}) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 flex flex-col sm:flex-row gap-4 shadow-sm hover:shadow-md transition-all">
      <img
        src={photo}
        alt={`${name} photo`}
        className="w-20 h-20 rounded-full object-cover mx-auto sm:mx-0"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {name}
        </h3>
        <div className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <strong className="text-gray-900 dark:text-gray-100">ID:</strong>{" "}
            {employeeId}
          </p>
          <p>
            <strong className="text-gray-900 dark:text-gray-100">Age:</strong>{" "}
            {age} years
          </p>
          <p>
            <strong className="text-gray-900 dark:text-gray-100">Dept:</strong>{" "}
            {dept}
          </p>
          <p>
            <strong className="text-gray-900 dark:text-gray-100">
              Salary:
            </strong>{" "}
            ${typeof salary === "number" ? salary.toLocaleString() : salary}
          </p>
          <p>
            <strong className="text-gray-900 dark:text-gray-100">Email:</strong>{" "}
            <a
              href={`mailto:${email}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
