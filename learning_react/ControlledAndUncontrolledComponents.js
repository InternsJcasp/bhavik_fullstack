// Explanation: React gives you two ways to work with form inputs because different situations need different trade-offs:

const { useState } = require("react");

// Controlled components → React state is the single source of truth. Great when you need live validation, conditional fields, previews, or complex workflows (like in Employee Registration Form).

// Uncontrolled components → The DOM holds the value; React reads it only when needed (e.g., on submit). Simpler for quick forms, file uploads, or when you don’t care about every keystroke.

// Controlled Component: Defn: A controlled input receives its value from React state and updates that state via onChange. Every change causes a re-render.

// Syntax:
function controlledInput() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Type Your Name"
    />
  );
}

// Uncontrolled Component: An uncontrolled input manages its own value in the DOM. React only reads it via a ref (or FormData) when needed, usually on submit.

import { useRef } from "react";

function uncontrolledInput() {
  const nameRef = useRef(null);

  const handleSubmit = () => {
    const name = nameRef.current.value;
    alert(`Submitted Name: ${name}`);
  };

  return (
    <>
      <input ref={nameRef} defaultValue="" placeholder="Type Your Name" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
