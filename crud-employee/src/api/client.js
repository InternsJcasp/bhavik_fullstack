import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    console.log("→ Request:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => Promise.reject(error),
);

function normalizeApiError(error) {
  const defaultError = {
    message: "Something went wrong. Please try again later.",
    type: "UNKNOWN",
  };

  if (!error.response && error.code === "ERR_NETWORK") {
    return {
      message: "Unable to connect to server. Please check your internet.",
      type: "NETWORK",
    };
  }

  if (error.response) {
    const status = error.response.status;
    const data = error.response.data || {};

    if (status === 401) {
      return {
        message: "Your session has expired. Please log in again.",
        type: "AUTH",
      };
    }

    if (status >= 400 && status < 500) {
      const msg =
        data?.message ||
        data?.error ||
        "Invalid input. Please check your details.";
      return { message: msg, type: "CLIENT" };
    }

    if (status >= 500) {
      return {
        message: "Server error. Please try again later.",
        type: "SERVER",
      };
    }
  }

  return defaultError;
}

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    error.normalized = normalizeApiError(error);
    return Promise.reject(error);
  },
);

export default apiClient;
