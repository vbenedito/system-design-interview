"use client";

import {
  Database,
  Server,
  Network,
  HardDrive,
  Globe,
  MessageSquare,
} from "lucide-react";
import { DraggableCard } from "../draggable-card";
import { InputCard } from "../input-card";

const elements = [
  { id: "database", label: "Database", icon: Database },
  { id: "server", label: "API Server", icon: Server },
  { id: "cache", label: "Cache", icon: HardDrive },
  { id: "load-balancer", label: "Load Balancer", icon: Network },
  { id: "client", label: "Client App", icon: Globe },
  { id: "queue", label: "Message Queue", icon: MessageSquare },
];

export const ElementsSidebar = () => {
  const onDragStart = (event: React.DragEvent, type: string) => {
    event.dataTransfer.setData("application/reactflow", type);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="p-4 h-full flex flex-col gap-2">
      <h2 className="font-semibold mb-2">System Components</h2>
      <div className="grid gap-2">
        {elements.map((element) => (
          <DraggableCard
            key={element.id}
            Icon={element.icon}
            label={element.label}
            onDragStart={(event) => onDragStart(event, element.id)}
          />
        ))}
        <InputCard onDragStart={onDragStart} />
      </div>
    </div>
  );
};
