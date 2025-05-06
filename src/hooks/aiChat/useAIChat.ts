import { sendMessageToApi } from "@/usecases/ai-chat/api/sendMessage";
import {
  Message,
  MESSAGE_FROM,
} from "@/app/whiteboard/_components/interview-chat";
import html2canvas from "html2canvas";
import { useState } from "react";

const useAIChat = (initialMessage: Message) => {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (userLevel: "junior" | "pleno" | "senior") => {
    const element = document.getElementById("challenge-page");

    // let imageBlob: Blob | undefined;

    // if (element) {
    //   const canvas = await html2canvas(element, {
    //     backgroundColor: null,
    //     useCORS: true,
    //   });

    //   imageBlob =
    //     (await new Promise<Blob | null>((resolve) =>
    //       canvas.toBlob((blob) => resolve(blob), "image/png")
    //     )) || undefined;
    // }

    const newMessage: Message = {
      id: crypto.randomUUID(),
      text: input,
      from: MESSAGE_FROM.USER,
    };

    console.log({ newMessage });

    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);
    setInput("");

    try {
      const response = await sendMessageToApi({
        message: input,
        challengeName: "upload de video youtube",
        userLevel,
        // image: imageBlob,
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
    handleSend,
  };
};

export default useAIChat;
