import ReactMarkdown from "react-markdown";

export interface ChatMessageProps {
  message: string;
}

export const InterviewerMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className="flex items-start mb-3">
      <div className="w-7 h-7 rounded-full bg-brand-100 flex items-center justify-center text-xs text-brand-700 font-bold mr-2">
        AI
      </div>
      <div className="bg-gray-160 rounded-lg p-2 text-sm max-w-[calc(100%-40px)] bg-muted prose">
        <ReactMarkdown>{message}</ReactMarkdown>
      </div>
    </div>
  );
};
