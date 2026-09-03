import apiClient from "./client.js";

export async function getEmployees({ page = 1, limit = 10 } = {}) {
  const res = await apiClient.get("/employees", {
    params: { _page: page, _limit: limit },
  });

  const body = res.data;

  // Case 1: direct array
  if (Array.isArray(body)) {
    return body;
  }

  // Case 2: json-server v1 style { data: [...] }
  if (body && Array.isArray(body.data)) {
    return body.data;
  }

  // Case 3: unknown shape – return empty array
  return [];
}

export async function getEmployee(id) {
  const res = await apiClient.get(`/employees/${id}`);
  return res.data;
}

export async function createEmployee(employeeData) {
  const res = await apiClient.post("/employees", employeeData);
  return res.data;
}

export async function updateEmployee(
  id,
  employeeData,
  { partial = false } = {},
) {
  const res = await apiClient[partial ? "patch" : "put"](
    `/employees/${id}`,
    employeeData,
  );
  return res.data;
}

export async function deleteEmployee(id) {
  await apiClient.delete(`/employees/${id}`);
}
