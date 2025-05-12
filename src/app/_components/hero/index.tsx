import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-gradient pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Ace System Design Interviews with{" "}
              <span className="text-custom-primary">AI-Powered Practice</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Interactive whiteboarding and personalized AI feedback to help you
              prepare for system design interviews at top tech companies.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base px-6 bg-brand-500 hover:bg-brand-400"
              >
                Start practicing for free
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              No credit card required • 3 free practice sessions
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-brand-400 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white rounded-lg shadow-lg border border-gray-200/50 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  quality={100}
                  objectFit="cover"
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                  alt="Computer image with dark background"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg border border-gray-200/50 p-3 w-48">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-100 rounded-full p-2">
                    <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                  </div>
                  <div className="ml-3 pt-1">
                    <p className="text-xs text-gray-800">
                      Your service should use a CDN to reduce latency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
