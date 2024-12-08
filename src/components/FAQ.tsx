import React from 'react';
import { ArrowRight } from 'lucide-react';

const FAQ = () => {
  const faqData = [
    {
      question: "How accurate are the AI-powered quotes?",
      answer: "Our AI-generated quotes are highly accurate, with a 90% success rate in reflecting the final cost. In rare cases where unforeseen factors arise, we’ll make adjustments and inform you promptly, ensuring complete transparency."
    },
    {
      question: "What if the actual repair costs more than the quote?",
      answer: "Our AI-generated quotes are 90% accurate, but occasionally adjustments may be necessary if unforeseen factors arise during the repair process. Rest assured, we’ll always discuss any changes with you before proceeding."
    },
    {
      question: "Are your handymen licensed and insured?",
      answer: "Yes, all our handymen undergo thorough background checks, are fully licensed, and carry comprehensive insurance coverage for your peace of mind."
    },
    {
      question: "How quickly can I get service?",
      answer: "Most repairs can be scheduled within 24-48 hours. Emergency services are available for urgent issues, often with same-day service."
    }
  ];

  return (
    <section className="py-16 px-5" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h3 className="text-3xl lg:text-4xl font-bold lg:tracking-tight">
              Common Questions
            </h3>
            <p className="text-lg mt-4 text-slate-600 dark:text-slate-400">
              Everything you need to know about our service
            </p>
          </div>
          
          <div className="w-full md:w-1/2 max-w-xl mx-auto">
            <div className="grid divide-y divide-neutral-200 dark:divide-slate-400">
              {faqData.map((faq, index) => (
                <div className="py-5" key={index}>
                  <details className="group">
                    <summary className="flex justify-between text-lg items-center font-medium cursor-pointer list-none">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </summary>
                    <p className="text-slate-600 dark:text-slate-400 mt-3 group-open:animate-fadeIn">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
