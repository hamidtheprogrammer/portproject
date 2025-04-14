export default function FAQSection() {
  const faqs = [
    { question: "What time is check-in and check-out?" },
    { question: "Do you offer airport shuttle services?" },
    { question: "Is breakfast included in the room rate?" },
    { question: "Can I cancel my reservation for free?" },
    { question: "Are pets allowed in the hotel?" },
  ];

  return (
    <div className="py-4">
      <h2 className="text-lg font-bold mb-4">Frequently Asked Questions</h2>
      <div className="flex flex-wrap gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border min-w-[50%] rounded-lg p-3 py-5 text-xs shadow-sm"
          >
            {faq.question}
          </div>
        ))}
      </div>
    </div>
  );
}
