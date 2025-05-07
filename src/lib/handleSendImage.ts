import {
  Message,
  MESSAGE_FROM,
} from "@/app/whiteboard/_components/interview-chat";
import {
  sendMessageToApi,
  SendQuestionParams,
} from "@/usecases/ai-chat/api/sendMessage";
import html2canvas from "html2canvas-pro";
import { Dispatch, SetStateAction } from "react";

export const handleSendImage = async ({
  setMessages,
  challengeName,
  userLevel,
  setLoading,
}: {
  setMessages: Dispatch<SetStateAction<Message[]>>;
  challengeName: string;
  userLevel: SendQuestionParams["userLevel"];
  setLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  setLoading(true);
  const element = document.getElementById("challenge-page");

  let imageBlob: Blob | undefined;

  if (element) {
    const canvas = await html2canvas(element, {
      backgroundColor: null,
      useCORS: true,
    });

    imageBlob =
      (await new Promise<Blob | null>((resolve) =>
        canvas.toBlob((blob) => resolve(blob), "image/png")
      )) || undefined;
  }

  const newMessage: Message = {
    id: crypto.randomUUID(),
    text: "imagem do whiteboard enviada ao recrutador",
    from: MESSAGE_FROM.USER,
  };

  setMessages((prev) => [...prev, newMessage]);

  try {
    const response = await sendMessageToApi({
      message: "imagem do whiteboard do usuário no atual momento.",
      challengeName,
      userLevel,
      image: imageBlob,
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
