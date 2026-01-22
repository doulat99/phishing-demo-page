import { useState } from "react";
import SimulationBanner from "@/components/SimulationBanner";
import FakeUrlBar from "@/components/FakeUrlBar";
import FakeSocialLogo from "@/components/FakeSocialLogo";
import FakeLoginForm from "@/components/FakeLoginForm";
import EducationalSidebar from "@/components/EducationalSidebar";
const Index = () => {
  const [showIndicators, setShowIndicators] = useState(false);
  return <div className="min-h-screen bg-background flex flex-col">
      {/* Simulation Banner - Always visible */}
      <SimulationBanner />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-5xl grid lg:grid-cols-[1fr,320px] gap-8 items-start">
          {/* Login Card */}
          <div className="flex flex-col items-center">
            {/* Fake Browser URL Bar */}
            <div className="w-full max-w-sm mb-6">
              <FakeUrlBar showIndicators={showIndicators} />
            </div>

            {/* Login Card */}
            <div className="w-full max-w-sm bg-card border border-border rounded-2xl p-8 shadow-xl">
              <div className="mb-8">
                <FakeSocialLogo />
              </div>
              <FakeLoginForm showIndicators={showIndicators} />

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground uppercase">or</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Social login */}
              <button className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-accent hover:opacity-80 transition-opacity">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                Log in with Facebook
              </button>
            </div>

            {/* Sign up link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <a href="#" className="text-accent font-semibold hover:underline">
                  Sign up
                </a>
              </p>
            </div>

            {/* Footer disclaimer */}
            <div className="mt-8 text-center max-w-sm">
              <p className="text-xs text-muted-foreground">
                © 2024 Instaqram from Metta — This is a simulation for cybersecurity training purposes only.
                No data is collected or stored.
              </p>
            </div>
          </div>

          {/* Educational Sidebar */}
          <div className="lg:sticky lg:top-8">
            <EducationalSidebar showIndicators={showIndicators} onToggle={setShowIndicators} />
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-muted border-t border-border py-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          
        </div>
      </div>
    </div>;
};
export default Index;