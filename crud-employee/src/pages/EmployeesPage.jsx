import { useState } from "react";
import useEmployees from "../hooks/useEmployee.js";
import Header from "../components/layout/Header.jsx";
import Spinner from "../components/common/Spinner.jsx";

export default function EmployeesPage() {
  const {
    employees,
    loading,
    error,
    searchQuery,
    setSearch,
    currentPage,
    totalPages,
    filteredCount,
    nextPage,
    prevPage,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  } = useEmployees();

  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleEditClick(emp) {
    setForm({
      id: emp.id,
      name: emp.name,
      email: emp.email,
      phone: emp.phone || "",
    });
    setIsEdit(true);
    setFormError(null);
  }

  function handleCancelEdit() {
    setForm({ id: null, name: "", email: "", phone: "" });
    setIsEdit(false);
    setFormError(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      setFormError("Name and Email are required.");
      return;
    }

    setFormLoading(true);
    setFormError(null);

    try {
      if (isEdit) {
        await updateEmployee(form.id, {
          name: form.name,
          email: form.email,
          phone: form.phone,
        });
        handleCancelEdit();
      } else {
        await addEmployee({
          name: form.name,
          email: form.email,
          phone: form.phone,
        });
        setForm({ id: null, name: "", email: "", phone: "" });
      }
    } catch (err) {
      console.error("Save error:", err);
      setFormError(
        isEdit ? "Failed to update employee." : "Failed to add employee.",
      );
    } finally {
      setFormLoading(false);
    }
  }

  async function handleDeleteClick(emp) {
    if (!window.confirm(`Delete ${emp.name}?`)) return;
    try {
      await deleteEmployee(emp.id);
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete employee.");
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-black">
        <div className="flex items-center gap-3">
          <Spinner size="lg" />
          <div className="text-sm text-gray-700">Loading employees...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-black">
        <div className="rounded border border-gray-300 bg-gray-50 p-4 text-sm text-red-700">
          <div className="font-semibold">Error</div>
          <div>{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <div className="mx-auto max-w-4xl p-6">
        <h1 className="mb-4 text-xl font-bold">Employees</h1>

        {/* Add / Edit Form */}
        <form
          onSubmit={handleSubmit}
          className="mb-6 rounded border border-gray-300 p-4"
        >
          <h2 className="mb-3 text-lg font-semibold">
            {isEdit ? "Edit Employee" : "Add Employee"}
          </h2>

          {formError && (
            <div className="mb-3 text-sm text-red-600">{formError}</div>
          )}

          <div className="grid gap-3 md:grid-cols-3">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              disabled={formLoading}
              className="rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              disabled={formLoading}
              className="rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              disabled={formLoading}
              className="rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
            />
          </div>

          <div className="mt-3 flex items-center gap-2">
            <button
              type="submit"
              disabled={formLoading}
              className="flex items-center gap-2 rounded bg-black px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
            >
              {formLoading && <Spinner size="sm" />}
              {formLoading
                ? isEdit
                  ? "Updating..."
                  : "Adding..."
                : isEdit
                  ? "Update Employee"
                  : "Add Employee"}
            </button>

            {isEdit && (
              <button
                type="button"
                onClick={handleCancelEdit}
                disabled={formLoading}
                className="rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black disabled:opacity-50"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email..."
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
          />
        </div>

        {/* Table */}
        {employees.length === 0 ? (
          <div className="text-sm text-gray-600">No employees found.</div>
        ) : (
          <table className="w-full border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                  Name
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                  Email
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                  Phone
                </th>
                <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td className="border border-gray-300 px-3 py-2">
                    {emp.name}
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    {emp.email}
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    {emp.phone}
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    <button
                      onClick={() => handleEditClick(emp)}
                      disabled={formLoading}
                      className="mr-2 rounded bg-black px-3 py-1 text-xs font-medium text-white disabled:opacity-50"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(emp)}
                      disabled={formLoading}
                      className="rounded border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-black disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Pagination */}
        {filteredCount > 0 && (
          <div className="mt-4 flex items-center justify-between text-sm">
            <div className="text-gray-700">
              Showing page {currentPage} of {totalPages} ({filteredCount}{" "}
              results)
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="rounded border border-gray-300 bg-white px-3 py-1 text-black disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="rounded border border-gray-300 bg-white px-3 py-1 text-black disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
