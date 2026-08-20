// Error Handling means that we should know that How to handle errors gracefully.
// Every Type of Error should have been handled correctly.

// For Ex:

// Isme teen layers hain:
// null check: first-time user ko valid empty list do.
// JSON.parse(): risky operation ko try block mein rakho.
// catch: corrupt/unavailable storage par app ko [] fallback do, crash nahi.

function loadTodos() {
  const fallbackTodos = []; // fallback Todo is added which stays empty if any error comes then this would be returned.

  try {
    const rawTodos = localStorage.getItem("todos");

    if (rawTodos === null) {
      return fallbackTodos;
    }

    const parsedTodos = JSON.parse(rawTodos);

    if (!Array.isArray(parsedTodos)) {
      return fallbackTodos;
    }

    return parsedTodos;
  } catch (error) {
    console.error("Could not load saved todos:", error);
    return fallbackTodos;
  }
}

// Other Errors: Quota Exceeded Error How to handle this

function saveTodos(todos) {
  try {
    const serializedTodos = JSON.stringify(todos);

    localStorage.setItem("todos", serializedTodos);

    return { ok: true };
  } catch (error) {
    if (error.name === "QuotaExceededError") {
      return {
        ok: false,
        message: "Storage is full. Remove old offline data and try again.",
      };
    }

    return {
      ok: false,
      message: "Your changes could not be saved on this device.",
    };
  }
}
