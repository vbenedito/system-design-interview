import { cn } from "@/lib/utils";
import { useState } from "react";
import "reactflow/dist/style.css";

type InputCardProps = {
  onDragStart: (e: React.DragEvent, type: string) => void;
};

export const InputCard = ({ onDragStart }: InputCardProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div
        className={cn(
          "flex items-center gap-3 p-3 rounded-md border bg-card text-left",
          "hover:bg-accent hover:text-accent-foreground transition-colors",
          "cursor-grab active:cursor-grabbing"
        )}
        draggable
        onDragStart={(e) => {
          setInputValue("");
          onDragStart(e, inputValue);
        }}
      >
        <input
          type="text"
          placeholder="Custom Component"
          className="w-full p-2 cursor-grab"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </>
  );
};
