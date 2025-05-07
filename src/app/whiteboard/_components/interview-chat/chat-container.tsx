// ChatContainer.tsx
"use client";

import { SendQuestionParams } from "@/usecases/ai-chat/api/sendMessage";
import { ChatInterface, Message } from ".";
import useAIChat from "@/hooks/aiChat/useAIChat";
import { handleSendImage } from "@/lib/handleSendImage";

export const ChatContainer = ({
  initialMessage,
  challengeName,
  userLevel,
}: {
  initialMessage: Message;
  challengeName: string;
  userLevel: SendQuestionParams["userLevel"];
}) => {
  const {
    messages,
    setInput,
    input,
    loading,
    setLoading,
    handleSendMessage,
    setMessages,
  } = useAIChat({
    initialMessage,
    challengeName,
    userLevel,
  });

  return (
    <ChatInterface
      messages={messages}
      loading={loading}
      input={input}
      onInputChange={setInput}
      onSendMessage={() => handleSendMessage("senior")}
      onSendImage={() =>
        handleSendImage({
          challengeName,
          userLevel,
          setMessages,
          setLoading,
        })
      }
    />
  );
};
