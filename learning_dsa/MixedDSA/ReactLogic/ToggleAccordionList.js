import React, { useState } from "react";

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    // If clicked item is already open, close it; otherwise open it
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <button onClick={() => toggleItem(index)}>
            {item.title} {openIndex === index ? "▲" : "▼"}
          </button>

          {openIndex === index && (
            <div style={{ padding: "8px", border: "1px solid #ccc" }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
