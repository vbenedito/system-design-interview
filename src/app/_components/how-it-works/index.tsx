import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose a challenge",
      description:
        "Select from our library of system design interview questions, from URL shorteners to distributed databases.",
    },
    {
      number: "02",
      title: "Design your solution",
      description:
        "Use our whiteboard to create your system architecture with components like servers, databases, and load balancers.",
    },
    {
      number: "03",
      title: "Discuss with AI interviewer",
      description:
        "Get asked follow-up questions and dive deeper into different aspects of your design, just like in a real interview.",
    },
    {
      number: "04",
      title: "Receive detailed feedback",
      description:
        "Get a comprehensive review highlighting strengths, weaknesses, and areas for improvement in your system design.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">How it works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Our platform simulates real system design interviews from start to
            finish
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-3xl font-bold text-brand-500">
                {step.number}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-0 right-0 transform translate-x-1/2">
                  <div className="w-12 h-1 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="text-base px-6 bg-brand-500 hover:bg-brand-400"
          >
            Try it now
          </Button>
        </div>
      </div>
    </section>
  );
}
