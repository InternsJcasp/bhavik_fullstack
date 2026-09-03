export const env = {
  MOCK_MODE: import.meta.env.VITE_MOCK_MODE === true,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "",
};
