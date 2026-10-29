import { ArrowLeft } from "lucide-react";

interface BackLinkProps {
  label?: string;
  onBack: () => void;
}

export const BackLink = ({ label = "Go back", onBack }: BackLinkProps) => {
  return (
    <button
      onClick={onBack}
      className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
    >
      <ArrowLeft size={20} />
      {label}
    </button>
  );
};
