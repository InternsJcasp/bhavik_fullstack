import { useEffect, useState } from "react";

export default function useEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("http://localhost:3000/employees");
        const data = await res.json();
        setEmployees(data);
      } catch (err) {
        console.error("Load error:", err);
        setError("Failed to load employees");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filteredEmployees = employees.filter((emp) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      emp.name?.toLowerCase().includes(q) ||
      emp.email?.toLowerCase().includes(q)
    );
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEmployees.length / pageSize),
  );
  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  function setSearch(q) {
    setSearchQuery(q);
    setCurrentPage(1);
  }

  function nextPage() {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  }

  function prevPage() {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  }

  async function addEmployee(formData) {
    const res = await fetch("http://localhost:3000/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const newEmp = await res.json();
    setEmployees((prev) => [newEmp, ...prev]);
    return newEmp;
  }

  async function updateEmployee(id, formData) {
    const res = await fetch(`http://localhost:3000/employees/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const updated = await res.json();
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === updated.id ? updated : emp)),
    );
    return updated;
  }

  async function deleteEmployee(id) {
    await fetch(`http://localhost:3000/employees/${id}`, {
      method: "DELETE",
    });
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  }

  return {
    employees: paginatedEmployees,
    loading,
    error,
    searchQuery,
    setSearch,
    currentPage,
    totalPages,
    filteredCount: filteredEmployees.length,
    nextPage,
    prevPage,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  };
}
