import { ShieldAlert } from "lucide-react";

const SimulationBanner = () => {
  return (
    <div className="simulation-banner text-white py-3 px-4">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
        <ShieldAlert className="h-5 w-5 flex-shrink-0" />
        <p className="text-sm font-medium text-center">
          <span className="font-bold">CYBERSECURITY TRAINING SIMULATION</span>
          <span className="hidden sm:inline"> — This is NOT a real login page. Used for educational purposes only.</span>
        </p>
        <ShieldAlert className="h-5 w-5 flex-shrink-0" />
      </div>
    </div>
  );
};

export default SimulationBanner;
