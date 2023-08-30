
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQDropdown: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <p className="font-semibold">{question}</p>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="mt-2">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQDropdown;
