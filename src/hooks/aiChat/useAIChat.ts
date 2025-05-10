import { sendMessageToApi } from "@/usecases/ai-chat/api/sendMessage";
import {
  Message,
  MESSAGE_FROM,
} from "@/app/whiteboard/_components/interview-chat";
import { useState } from "react";
import { UserProps } from "@/types/User";

const useAIChat = ({
  initialMessage,
  challengeName,
}: {
  initialMessage: Message;
  challengeName: string;
  userLevel: UserProps["seniorityLevel"];
}) => {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (userLevel: UserProps["seniorityLevel"]) => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      text: input,
      from: MESSAGE_FROM.USER,
    };

    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);
    setInput("");

    try {
      const response = await sendMessageToApi({
        message: input,
        challengeName: challengeName,
        userLevel,
      });

      const formattedText = response.replaceAll("\n\n", "\n");

      const aiMessage: Message = {
        id: crypto.randomUUID(),
        text: formattedText as unknown as string,
        from: MESSAGE_FROM.INTERVIEWER,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Erro ao enviar pergunta:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    input,
    setInput,
    handleSendMessage,
    setMessages,
    setLoading,
  };
};

export default useAIChat;
