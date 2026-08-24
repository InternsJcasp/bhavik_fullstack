React: State Vs Props.

```
import React, { useState } from 'react';

// Child Component
const DisplayMessage = ({ message }) => {
  return <p>{message}</p>;
};

// Parent Component
const App = () => {
  const [message, setMessage] = useState("Hello from Parent!");

  return (
    <div>
      <DisplayMessage message={message} />
      <button onClick={() => setMessage("Updated message!")}>Update Message</button>
    </div>
  );
};

export default App;
```

- Here, the App component holds the state message, and it passes it down as a prop to the DisplayMessage child component. When the button is clicked, the state in the parent component changes, triggering a re-render and updating the message displayed by the child.
