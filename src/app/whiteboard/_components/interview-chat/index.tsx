"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const ChatInterface = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="h-full flex flex-col bg-background">
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="font-semibold">AI Interviewer</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Minimize" : "Expand"}
        </Button>
      </div>

      {isExpanded && (
        <>
          <div className="flex-1 p-4 overflow-auto">
            <div className="space-y-4">
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm">
                  Hello! Lets design a scalable system together. What system
                  would you like to design today?
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Type your message..." className="flex-1" />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
