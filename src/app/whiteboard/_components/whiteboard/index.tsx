"use client";
import "reactflow/dist/style.css";

import ReactFlow, { Background, Controls } from "reactflow";
import { useWhiteboardState } from "./hooks/useWhiteboardState";
import { useWhiteboardHandlers } from "./hooks/useWhiteboardHandlers";
import { ReactFlowProvider } from "@xyflow/react";

export const Whiteboard = () => {
  const { nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange } =
    useWhiteboardState();

  const { onConnect, onDrop, onDragOver } = useWhiteboardHandlers({
    setNodes,
    setEdges,
  });

  return (
    <ReactFlowProvider>
      <div className="w-full h-full flex">
        <div
          className="flex-1 h-screen"
          id="challenge-page"
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            data-testid="react-flow"
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>
      </div>
    </ReactFlowProvider>
  );
};
