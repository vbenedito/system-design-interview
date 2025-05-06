import { ChatMessageProps } from "./interviewer-message";

export const UserMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className="flex items-start justify-end mb-3">
      <div className="bg-brand-50 rounded-lg p-2 text-sm max-w-[calc(100%-40px)]">
        <p>{message}</p>
      </div>

      <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold ml-2">
        U
      </div>
    </div>
  );
};
