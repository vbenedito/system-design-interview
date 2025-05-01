export default function Showcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">See the platform in action</h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore how our whiteboard and AI interviewer work together to
            create a realistic interview experience
          </p>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 max-w-5xl mx-auto">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-12 min-h-[400px]">
            <div className="md:col-span-8 border-r border-gray-200 p-4 bg-gray-50 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-600">
                    Whiteboard Area
                  </p>
                  <p className="text-sm text-gray-500">
                    Interactive diagram builder with system design components
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 p-4 flex flex-col">
              <div className="text-center mb-4 pb-2 border-b border-gray-200">
                <p className="font-semibold">AI Interviewer</p>
              </div>
              <div className="flex-1 overflow-y-auto space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-50 rounded-full p-2">
                    <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                  </div>
                  <div className="ml-3 bg-gray-100 rounded-lg p-3">
                    <p className="text-sm">
                      Design a URL shortening service like TinyURL that can
                      handle millions of requests per day.
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="mr-3 bg-brand-50 rounded-lg p-3">
                    <p className="text-sm">
                      I will start by defining the requirements. We need to
                      create short URLs that redirect to original URLs, handle
                      high traffic, and ensure low latency.
                    </p>
                  </div>
                  <div className="flex-shrink-0 bg-gray-200 rounded-full p-2">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">U</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-brand-50 rounded-full p-2">
                    <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                  </div>
                  <div className="ml-3 bg-gray-100 rounded-lg p-3">
                    <p className="text-sm">
                      Good start! How would you generate these short URLs? And
                      how would you store the mappings?
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-200 pt-4">
                <div className="bg-gray-100 rounded-lg p-2 text-center text-sm text-gray-500">
                  Type your response or update the whiteboard...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
