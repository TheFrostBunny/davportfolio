import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  title: string;
  message: string;
  actionLabel: string;
  onAction: () => void;
}

export default function ErrorState({
  title,
  message,
  actionLabel,
  onAction,
}: ErrorStateProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
        <p className="text-gray-400 mb-8">{message}</p>
        <Button onClick={onAction} className="bg-blue-600 hover:bg-blue-700">
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}
