import { Timer } from "../_components/timer";
import { ElementsSidebar } from "../_components/sidebar";
import { Whiteboard } from "../_components/whiteboard";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { ChatContainer } from "../_components/interview-chat/chat-container";
import { initialInterviewerMessage } from "@/usecases/interview-requirements/initialAIMessage";
import { Message } from "../_components/interview-chat";
import { unstable_cache } from "next/cache";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const clearId = id.replaceAll("-", " ");

  const getProduct = unstable_cache(
    async () => {
      const initialMessage = await initialInterviewerMessage({
        challengeName: id,
        userLevel: "junior", // TODO: change to use from auth infos
      });

      return initialMessage;
    },
    ["junior", clearId],
    {
      tags: ["junior", clearId],
      revalidate: 60 * 5,
    }
  );

  const initialMessage = await getProduct();

  const formattedInitialMessage: Message = {
    challengeName: clearId,
    id: crypto.randomUUID(),
    text: initialMessage,
    from: "interviewer" as Message["from"],
  };

  return (
    <div className="h-screen w-full bg-background flex flex-col">
      {/* <div className="h-14 border-b flex items-center px-4 justify-between">
        <h1 className="text-lg font-semibold">{clearId}</h1>
        <Timer initialMinutes={45} />
      </div> */}

      <div className="flex-1 flex overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel
            defaultSize={20}
            minSize={15}
            maxSize={30}
            className="bg-background border-r"
          >
            <ElementsSidebar />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={80}>
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={75} minSize={50}>
                <Whiteboard />
              </ResizablePanel>

              <ResizableHandle withHandle />

              <ResizablePanel defaultSize={25} minSize={0} maxSize={40}>
                <ChatContainer initialMessage={formattedInitialMessage} />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
