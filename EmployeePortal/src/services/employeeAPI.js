const BASE_URL = "https://dummy.restapiexample.com/api/v1";
const CACHE_KEY = "employees_cache";
const CACHE_DURATION = 5 * 60 * 1000;
const MAX_RETRIES = 2;
const RETRY_DELAY = 1000;

const DEPARTMENTS = ["Engineering", "Sales"];

export function assignRandomDepartment(employee, index) {
  const dept = DEPARTMENTS[index % DEPARTMENTS.length];
  return {
    ...employee,
    employee_department: dept,
  };
}

// Cache helpers
function getCachedData() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    const now = Date.now();

    // Check if cache is expired
    if (now - timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Cache read error:", error);
    return null;
  }
}

function setCacheData(data) {
  try {
    const cacheEntry = {
      data,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheEntry));
  } catch (error) {
    console.error("Cache write error:", error);
    // localStorage full ho sakta hai, ignore error
  }
}

// Retry helper
async function fetchWithRetry(url, options = {}, retries = 0) {
  try {
    const response = await fetch(url, options);

    if (response.status === 429) {
      // Rate limited
      throw new Error("Rate limited (429)");
    }

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    // Retry logic
    if (retries < MAX_RETRIES) {
      console.warn(`Fetch failed, retrying (${retries + 1}/${MAX_RETRIES})...`);
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      return fetchWithRetry(url, options, retries + 1);
    }

    throw error;
  }
}

// Main API functions
export async function fetchEmployees() {
  const cached = getCachedData();
  if (cached) {
    console.log("Using cached employees data");
    return { data: cached };
  }

  console.log("Fetching employees from API...");

  try {
    const result = await fetchWithRetry(`${BASE_URL}/employees`);

    if (result?.data) {
      // Transform data: add random departments
      const transformedData = result.data.map((emp, index) =>
        assignRandomDepartment(emp, index),
      );

      setCacheData(transformedData);
      console.log("Employees data cached with random departments");

      return { data: transformedData };
    }

    return result;
  } catch (error) {
    console.error("API fetch failed:", error.message);

    const staleCache = getCachedData();
    if (staleCache) {
      console.warn("Using stale cache due to API failure");
      return { data: staleCache };
    }

    throw new Error(
      "Failed to fetch employees. Please check your connection.",
      { cause: error },
    );
  }
}

export async function fetchEmployeeById(id) {
  // For single employee, we'll fetch from API directly (No Cache)
  try {
    const result = await fetchWithRetry(`${BASE_URL}/employee/${id}`);
    return result;
  } catch (error) {
    console.error("Employee detail fetch failed:", error.message);
    throw new Error("Failed to fetch employee details.", { cause: error });
  }
}

// Utility: Clear cache manually (for refresh button)
export function clearEmployeesCache() {
  localStorage.removeItem(CACHE_KEY);
  console.log("Employees cache cleared");
}
