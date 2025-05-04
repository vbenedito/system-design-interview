"use client";

import { cn } from "@/lib/utils";

interface DraggableCardProps {
  label: string;
  Icon: React.ElementType;
  onDragStart: (event: React.DragEvent) => void;
}

export const DraggableCard = ({
  label,
  Icon,
  onDragStart,
}: DraggableCardProps) => {
  return (
    <button
      className={cn(
        "flex items-center gap-3 p-3 rounded-md border bg-card text-left",
        "hover:bg-accent hover:text-accent-foreground transition-colors",
        "cursor-grab active:cursor-grabbing"
      )}
      draggable
      onDragStart={onDragStart}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );
};
