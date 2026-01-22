import { Lock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FakeUrlBarProps {
  showIndicators: boolean;
}

const FakeUrlBar = ({ showIndicators }: FakeUrlBarProps) => {
  return (
    <div className="relative">
      <div className={cn(
        "bg-muted rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-all",
        showIndicators && "phishing-highlight"
      )}>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Lock className="h-3.5 w-3.5" />
        </div>
        <span className="text-muted-foreground">https://</span>
        <span className="text-foreground font-medium">lnstaqram-secure-login.com</span>
        <span className="text-muted-foreground">/account/verify</span>
      </div>
      
      {showIndicators && (
        <div className="absolute top-full left-0 mt-2 bg-warning/10 border border-warning rounded-lg p-3 text-sm animate-slide-down z-10 w-80">
          <div className="flex gap-2">
            <AlertTriangle className="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-warning-foreground">🚩 Suspicious URL</p>
              <ul className="text-muted-foreground mt-1 space-y-1 text-xs">
                <li>• "lnstaqram" uses "ln" instead of "In" (lowercase L vs uppercase i)</li>
                <li>• Legitimate sites use their official domain (instagram.com)</li>
                <li>• "-secure-login" is a common phishing tactic</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FakeUrlBar;
