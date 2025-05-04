import { Timer } from "../_components/timer";
import { ElementsSidebar } from "../_components/sidebar";
import { Whiteboard } from "../_components/whiteboard";
import { ChatInterface } from "../_components/interview-chat";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const clearId = id.replaceAll("-", " ");

  return (
    <div className="h-screen w-full bg-background flex flex-col">
      {/* Top bar with timer */}
      <div className="h-14 border-b flex items-center px-4 justify-between">
        <h1 className="text-lg font-semibold">{clearId}</h1>
        <Timer initialMinutes={45} />
      </div>

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

              <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
                <ChatInterface />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
