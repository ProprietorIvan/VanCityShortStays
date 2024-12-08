import React from 'react';
import { ArrowRight } from 'lucide-react';

const FAQ = () => {
  const faqData = [
    {
      question: "What's included in your luxury rentals?",
      answer: "Our luxury rentals come fully furnished with high-end appliances, premium bedding, fully equipped kitchens, high-speed WiFi, smart home features, and weekly cleaning service. All utilities are included, and you'll have access to building amenities such as fitness centers, pools, and concierge services where available."
    },
    {
      question: "What are your minimum stay requirements?",
      answer: "Our minimum stay is 2 nights. We welcome both short-term vacationers and those seeking extended stays in Vancouver. Our luxury accommodations are perfect for weekend getaways, business trips, or longer vacations in the city."
    },
    {
      question: "How does the booking and check-in process work?",
      answer: "After your booking is confirmed, our concierge team will coordinate your arrival time and meet you at the property for a personal welcome and orientation. We'll walk you through the apartment features, building amenities, and provide you with all necessary access credentials and our 24/7 support contact information."
    },
    {
      question: "Is parking available?",
      answer: "While most of our units don't include dedicated parking, our concierge team is happy to assist you in finding nearby parking options. We can provide information about local parking facilities, rates, and the most convenient solutions for your stay."
    },
    {
      question: "What's your cancellation policy?",
      answer: "We maintain a strict cancellation policy to ensure the quality of our bookings. Guests must cancel at least 14 days prior to their check-in date to receive a refund. Cancellations made less than 14 days before check-in are not eligible for a refund. We recommend purchasing travel insurance for added protection."
    },
    {
      question: "Do you offer corporate housing solutions?",
      answer: "Yes, we specialize in corporate housing solutions and have partnerships with many Vancouver businesses. We offer streamlined billing, customized lease terms, and can accommodate specific corporate requirements. Contact our corporate housing team for detailed information."
    }
  ];

  return (
    <section className="py-16 px-5 bg-white" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h3 className="text-3xl lg:text-4xl font-bold lg:tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-lg mt-4 text-gray-600">
              Everything you need to know about your luxury stay in Vancouver
            </p>
          </div>
          
          <div className="w-full md:w-1/2 max-w-xl mx-auto">
            <div className="grid divide-y divide-gray-200">
              {faqData.map((faq, index) => (
                <div className="py-5" key={index}>
                  <details className="group">
                    <summary className="flex justify-between text-lg items-center font-medium cursor-pointer list-none">
                      <span className="text-gray-800">{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </summary>
                    <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
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