import FaqCard from "@/components/cards/FaqCard";
import SectionHeading from "@/components/reusable/SectionHeading";
import { Accordion } from "@/components/ui/accordion";
import React from "react";

function FaqSection() {
  const data = [
    {
      question: "What are your opening hours?",
      answer:
        "We are open Monday to Friday from 7 AM to 6 PM, and on weekends from 8 AM to 5 PM.",
      id: 1,
    },
    {
      question: "Do you offer dairy-free milk options?",
      answer:
        "Yes, we offer a variety of dairy-free milk alternatives including oat, almond, and soy milk.",
      id: 2,
    },
    {
      question: "Can I order online for pickup?",
      answer:
        "You can place your order through our website or mobile app for convenient in-store pickup.",
      id: 3,
    },
    {
      question: "Do you have gluten-free pastries?",
      answer:
        "Yes, we have a selection of delicious gluten-free pastries available daily. Please ask our staff for today's options.",
      id: 4,
    },
    {
      question: "Is there free Wi-Fi available?",
      answer:
        "Yes, we provide complimentary high-speed Wi-Fi for all our customers. Just ask for the password at the counter.",
      id: 5,
    },
  ];

  return (
    <div className="bg-third py-24 max-md:px-5">
      <div className="container mx-auto">
        <SectionHeading title="Frequently Asked Questions" color="primary" />
      </div>
      <div className="mt-8 container mx-auto rounded-[40px] flex justify-between items-center gap-3 flex-col md:flex-row">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <div className="w-full grid grid-cols-1  gap-6">
            {data.map((faq) => (
              <FaqCard
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                value={faq.id}
              />
            ))}
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqSection;
