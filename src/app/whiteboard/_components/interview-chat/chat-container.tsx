"use client";

import { ChatInterface, Message } from ".";
import useAIChat from "@/hooks/aiChat/useAIChat";
import { handleSendImage } from "@/lib/handleSendImage";
import { UserProps } from "@/types/User";

export const ChatContainer = ({
  initialMessage,
  challengeName,
  userLevel,
}: {
  initialMessage: Message;
  challengeName: string;
  userLevel: UserProps["seniorityLevel"];
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
      onSendMessage={() => handleSendMessage(userLevel)}
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
