import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhishingIndicatorProps {
  title: string;
  points: string[];
  show: boolean;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const PhishingIndicator = ({ title, points, show, position = "bottom", className }: PhishingIndicatorProps) => {
  if (!show) return null;

  const positionClasses = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2",
  };

  return (
    <div className={cn(
      "absolute bg-warning/10 border border-warning rounded-lg p-3 text-sm animate-slide-down z-20 w-72",
      positionClasses[position],
      className
    )}>
      <div className="flex gap-2">
        <AlertTriangle className="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-warning-foreground">{title}</p>
          <ul className="text-muted-foreground mt-1 space-y-1 text-xs">
            {points.map((point, index) => (
              <li key={index}>• {point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhishingIndicator;
