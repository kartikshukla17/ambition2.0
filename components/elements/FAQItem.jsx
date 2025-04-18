//chinmayi

"use client";
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-lg font-semibold flex justify-between items-center"
      >
        {question}
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

export default FAQItem;

