import { api } from "@/lib/axios";
import { SendQuestionParams } from "../ai-chat/api/sendMessage";

export async function initialInterviewerMessage({
  challengeName,
  userLevel,
}: SendQuestionParams) {
  const response = await api.post(
    "/interview-requirements",
    {
      challengeName,
      userLevel,
    },
    { headers: { "Content-Type": "application/json" } }
  );

  return response.data.message;
}
