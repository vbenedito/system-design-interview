// ChatInterface.tsx
"use client";

import { Camera, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InterviewerMessage } from "./interviewer-message";
import { UserMessage } from "./user-message";

export enum MESSAGE_FROM {
  INTERVIEWER = "interviewer",
  USER = "user",
}

export type Message = {
  challengeName?: string;
  id: string;
  text: string;
  from: MESSAGE_FROM;
};

export type ChatInterfaceProps = {
  messages: Message[];
  input: string;
  loading: boolean;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  onSendImage: () => void;
};

export const ChatInterface = ({
  messages,
  input,
  onInputChange,
  onSendMessage,
  onSendImage,
  loading,
}: ChatInterfaceProps) => {
  return (
    <div className="h-full flex flex-col bg-background">
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="font-semibold">AI Interviewer</h2>
      </div>

      <div className="flex-1 p-4 overflow-auto">
        {messages.map((message) =>
          message.from === MESSAGE_FROM.INTERVIEWER ? (
            <InterviewerMessage key={message.id} message={message.text} />
          ) : (
            <UserMessage key={message.id} message={message.text} />
          )
        )}
      </div>

      <div className="p-4 border-t">
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <Button type="submit" size="icon" onClick={onSendImage}>
            <Camera className="h-4 w-4" />
          </Button>
          <Input
            placeholder="Type your message..."
            className="flex-1"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
          />
          <Button
            type="submit"
            size="icon"
            onClick={onSendMessage}
            disabled={!input.trim() || loading}
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};
