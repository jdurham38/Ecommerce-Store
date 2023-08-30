import React from "react";
import Container from "@/components/ui/container";
import Link from "next/link";
import FAQDropdown from "@/components/ui/faq-dropdown";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
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

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <h1 className="text-3xl font-semibold flex justify-center items-center pb-20 pt-10">Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <FAQDropdown key={index} question={faq.question} answer={faq.answer} />
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
