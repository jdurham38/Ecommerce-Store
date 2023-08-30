"use client"

import React, { useState } from "react";
import Container from "@/components/ui/container";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage = () => {
  const faqData: FAQItem[] = [
    {
      question: "Don't see your favorite flavor?",
      answer: "Want your favorite flavor? Send us an email and we will do our best to recreate the delicious protein blend!"
    },
    {
      question: "Are there dairy alternative options?",
      answer: "Not yet, but we are effortlessly working on our vegan and dairy-free options for your enjoyment!"
    },
    // Add more question-answer pairs here
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <h1 className="text-3xl font-semibold flex justify-center items-center pb-20 pt-10">Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <p className="font-semibold">{faq.question}</p>
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            {activeIndex === index && (
              <div className="mt-2">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
        <div className="mt-10">
          If you could not find the answer you are looking for, feel free to{" "}
          <Link href="/contact"><b>CONTACT US</b></Link>.
        </div>
      </div>
    </Container>
  );
};

export default FAQPage;
