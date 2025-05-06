// ChatContainer.tsx
"use client";

import { ChatInterface, Message } from ".";
import useAIChat from "@/hooks/aiChat/useAIChat";

export const ChatContainer = ({
  initialMessage,
}: {
  initialMessage: Message;
}) => {
  const { messages, setInput, input, handleSend } = useAIChat(initialMessage);

  return (
    <ChatInterface
      messages={messages}
      input={input}
      onInputChange={setInput}
      onSend={() => handleSend("senior")}
    />
  );
};
