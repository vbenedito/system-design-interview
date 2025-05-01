import { Rocket } from "lucide-react";

export function Logo() {
  return (
    <div className="bg-primary h-6 w-6 flex items-center justify-center rounded-md">
      <Rocket className="w-3 h-3 text-primary-foreground" />
    </div>
  );
}
