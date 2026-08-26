import { useState, useMemo } from "react";

const DEPARTMENTS = ["All", "Engineering", "Sales"];

export function useEmployeeFilters(employees) {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  // Filter + Search + Sort logic
  const filtered = useMemo(() => {
    let result = [...employees];

    // Search by name
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((e) =>
        (e.employee_name || e.name || "").toLowerCase().includes(q),
      );
    }

    // Department filter
    if (deptFilter !== "All") {
      result = result.filter(
        (e) => (e.employee_department || "Engineering") === deptFilter,
      );
    }

    // Age filters
    if (minAge !== "") {
      const min = Number(minAge);
      result = result.filter(
        (e) => (parseInt(e.employee_age) || e.age || 0) >= min,
      );
    }
    if (maxAge !== "") {
      const max = Number(maxAge);
      result = result.filter(
        (e) => (parseInt(e.employee_age) || e.age || 100) <= max,
      );
    }

    // Salary filters
    if (minSalary !== "") {
      const min = Number(minSalary);
      result = result.filter(
        (e) => (parseInt(e.employee_salary) || e.salary || 0) >= min,
      );
    }
    if (maxSalary !== "") {
      const max = Number(maxSalary);
      result = result.filter(
        (e) => (parseInt(e.employee_salary) || e.salary || 100) <= max,
      );
    }

    // Sort
    result.sort((a, b) => {
      const aName = a.employee_name || a.name || "";
      const bName = b.employee_name || b.name || "";
      const aSal = parseInt(a.employee_salary) || a.salary || 0;
      const bSal = parseInt(b.employee_salary) || b.salary || 0;
      const aAge = parseInt(a.employee_age) || a.age || 0;
      const bAge = parseInt(b.employee_age) || b.age || 0;

      if (sortBy === "name") {
        return aName.localeCompare(bName);
      } else if (sortBy === "salary") {
        return aSal - bSal;
      } else if (sortBy === "age") {
        return aAge - bAge;
      }
      return 0;
    });

    return result;
  }, [
    employees,
    search,
    deptFilter,
    minAge,
    maxAge,
    minSalary,
    maxSalary,
    sortBy,
  ]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const resetFilters = () => {
    setSearch("");
    setDeptFilter("All");
    setMinAge("");
    setMaxAge("");
    setMinSalary("");
    setMaxSalary("");
    setSortBy("name");
    setPage(1);
  };

  return {
    // State
    search,
    setSearch,
    deptFilter,
    setDeptFilter,
    minAge,
    setMinAge,
    maxAge,
    setMaxAge,
    minSalary,
    setMinSalary,
    maxSalary,
    setMaxSalary,
    sortBy,
    setSortBy,
    page,
    setPage,

    // Calcluate karni padegi
    totalPages,
    currentPage,
    paginated,
    departments: DEPARTMENTS,

    // Reset filter ka function
    resetFilters,
  };
}
