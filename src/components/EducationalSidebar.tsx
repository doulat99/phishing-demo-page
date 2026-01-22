import { Shield, Eye, CheckCircle2, XCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface EducationalSidebarProps {
  showIndicators: boolean;
  onToggle: (value: boolean) => void;
}

const EducationalSidebar = ({ showIndicators, onToggle }: EducationalSidebarProps) => {
  const indicators = [
    { id: 1, label: "Suspicious URL with misspellings" },
    { id: 2, label: "Urgency/fear-based messaging" },
    { id: 3, label: "Grammar and spelling errors" },
    { id: 4, label: "Requests for unusual information" },
    { id: 5, label: "Pre-checked consent boxes" },
    { id: 6, label: "External links to unknown domains" },
  ];

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-full bg-simulation-banner/10 flex items-center justify-center">
          <Shield className="h-5 w-5 text-simulation-banner" />
        </div>
        <div>
          <h2 className="font-semibold text-foreground">Phishing Indicators</h2>
          <p className="text-xs text-muted-foreground">Learn to spot the red flags</p>
        </div>
      </div>

      {/* Toggle */}
      <div className="flex items-center justify-between p-4 bg-muted rounded-xl mb-6">
        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Reveal Indicators</span>
        </div>
        <Switch checked={showIndicators} onCheckedChange={onToggle} />
      </div>

      {/* Checklist */}
      <div className="space-y-3">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          Red Flags to Identify
        </p>
        {indicators.map((indicator) => (
          <div
            key={indicator.id}
            className="flex items-start gap-3 text-sm"
          >
            {showIndicators ? (
              <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="h-4 w-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
            )}
            <span className={showIndicators ? "text-foreground" : "text-muted-foreground"}>
              {indicator.label}
            </span>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
          Quick Tips
        </p>
        <ul className="space-y-2 text-xs text-muted-foreground">
          <li>✓ Always check the URL carefully</li>
          <li>✓ Never enter credentials when pressured</li>
          <li>✓ Use official apps or bookmark real sites</li>
          <li>✓ Enable two-factor authentication</li>
          <li>✓ When in doubt, contact support directly</li>
        </ul>
      </div>
    </div>
  );
};

export default EducationalSidebar;
