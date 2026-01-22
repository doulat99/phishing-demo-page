import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import PhishingIndicator from "./PhishingIndicator";

interface FakeLoginFormProps {
  showIndicators: boolean;
}

const FakeLoginForm = ({ showIndicators }: FakeLoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a simulation - no actual submission
    alert("⚠️ SIMULATION ALERT ⚠️\n\nIn a real phishing attack, your credentials would now be stolen!\n\nNever enter your real credentials on suspicious websites.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Urgency message - phishing indicator */}
      <div className={cn(
        "relative bg-destructive/10 border border-destructive/30 rounded-lg p-3 text-center",
        showIndicators && "phishing-highlight"
      )}>
        <p className="text-sm text-destructive font-medium">
          ⚠️ URGENT: Your account has been compromized! Verify your identity immediately or your account will be suspended.
        </p>
        <PhishingIndicator
          show={showIndicators}
          title="🚩 Urgency & Fear Tactics"
          points={[
            "Creates panic to bypass critical thinking",
            "\"compromized\" is misspelled (should be \"compromised\")",
            "Legitimate services rarely threaten immediate suspension"
          ]}
          position="bottom"
        />
      </div>

      {/* Email field */}
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Email, Phone, or Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12"
        />
      </div>

      {/* Password field */}
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12"
        />
      </div>

      {/* Extra suspicious field - phishing indicator */}
      <div className={cn(
        "relative space-y-2",
        showIndicators && "phishing-highlight"
      )}>
        <Input
          type="text"
          placeholder="Mother's Maiden Name (for verification)"
          className="h-12"
        />
        <PhishingIndicator
          show={showIndicators}
          title="🚩 Unusual Information Request"
          points={[
            "Login pages NEVER ask for security questions",
            "This is sensitive data used for account recovery",
            "Attackers use this to bypass security measures"
          ]}
          position="bottom"
        />
      </div>

      {/* Remember me with suspicious checkbox */}
      <div className={cn(
        "relative flex items-center space-x-2",
        showIndicators && "phishing-highlight"
      )}>
        <Checkbox id="save-card" defaultChecked />
        <label htmlFor="save-card" className="text-sm text-muted-foreground">
          Save my payment information for faster checkout
        </label>
        <PhishingIndicator
          show={showIndicators}
          title="🚩 Irrelevant Request"
          points={[
            "Login page asking for payment information is suspicious",
            "Pre-checked consent boxes are manipulative",
            "This has nothing to do with account verification"
          ]}
          position="bottom"
          className="left-0"
        />
      </div>

      {/* Login button */}
      <Button 
        type="submit" 
        className="w-full h-12 social-gradient text-white font-semibold text-base hover:opacity-90 transition-opacity"
      >
        Log In
      </Button>

      {/* Suspicious link */}
      <div className={cn(
        "relative text-center",
        showIndicators && "phishing-highlight"
      )}>
        <a href="#" className="text-sm text-accent hover:underline">
          Forgot password? Click here to reset via secure-lgoin-help.com
        </a>
        <PhishingIndicator
          show={showIndicators}
          title="🚩 Suspicious Link"
          points={[
            "Hover over links before clicking to see true destination",
            "\"lgoin\" is misspelled - attackers make typos",
            "External domains for password reset are red flags"
          ]}
          position="bottom"
        />
      </div>
    </form>
  );
};

export default FakeLoginForm;
