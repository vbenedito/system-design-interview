import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section id="pricing" className="py-20 bg-brand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                Ready to ace your next system design interview?
              </h2>
              <p className="mt-4 text-white/80">
                Join thousands of engineers who have improved their system
                design skills with our platform.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <span className="flex-shrink-0 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Realistic interview experience</span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Personalized AI feedback</span>
                </li>
                <li className="flex items-center">
                  <span className="flex-shrink-0 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Industry-relevant challenges</span>
                </li>
              </ul>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold">Start practicing today</h3>
              <p className="mt-4 text-gray-600">
                Get 3 free practice sessions with our AI interviewer. No credit
                card required.
              </p>
              <div className="mt-6 space-y-4">
                <Button
                  size="lg"
                  className="w-full text-base bg-brand-500 hover:bg-brand-400"
                >
                  Sign up for free
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <p className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <a href="#" className="text-brand-600 font-medium">
                    Sign in
                  </a>
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">
                  Premium plans include:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-brand-500 mr-2">✓</span>
                    <span>Unlimited practice sessions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-brand-500 mr-2">✓</span>
                    <span>Advanced system design challenges</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-brand-500 mr-2">✓</span>
                    <span>Detailed performance analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
