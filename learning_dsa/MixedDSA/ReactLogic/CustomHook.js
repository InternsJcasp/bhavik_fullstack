import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update value after delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear timer if value or delay changes before timeout
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage in Component:
// const debouncedSearchTerm = useDebounce(searchTerm, 500);
