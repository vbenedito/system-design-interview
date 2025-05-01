import { Code, MessageSquare, FileCode, Star } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Code className="w-10 h-10 text-brand-500" />,
      title: "Interactive Whiteboard",
      description:
        "Design system architectures with our intuitive whiteboard, built on React Flow, with drag-and-drop components specific to system design.",
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-brand-500" />,
      title: "AI Interviewer & Feedback",
      description:
        "Get interviewed by our ChatGPT-powered AI that asks relevant follow-up questions and provides detailed feedback on your designs.",
    },
    {
      icon: <FileCode className="w-10 h-10 text-brand-500" />,
      title: "Real-world Challenges",
      description:
        "Practice with scenarios based on actual interview questions from top tech companies like Google, Amazon, and Meta.",
    },
    {
      icon: <Star className="w-10 h-10 text-brand-500" />,
      title: "Personalized Feedback",
      description:
        "Send screenshots of your whiteboard to the AI and receive tailored recommendations to improve your system design approach.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">
            Everything you need to master system design interviews
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our platform combines the best tools and AI technology to help you
            prepare effectively.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
