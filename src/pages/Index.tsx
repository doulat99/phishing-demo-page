import { useState } from "react";
import SimulationBanner from "@/components/SimulationBanner";
import FakeUrlBar from "@/components/FakeUrlBar";
import FakeSocialLogo from "@/components/FakeSocialLogo";
import FakeLoginForm from "@/components/FakeLoginForm";
import EducationalSidebar from "@/components/EducationalSidebar";
const Index = () => {
  const [showIndicators, setShowIndicators] = useState(false);
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex flex-col">

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-5xl flex justify-center">
          {/* Center column mimicking the screenshot */}
          <div className="w-full flex flex-col items-center">

            {/* Login Card */}
            <div className="w-full max-w-sm bg-[#0f1112] border border-gray-700 rounded-2xl p-8 shadow-xl">
              <div className="mb-6 flex justify-center">
                <i
                  data-visualcompletion="css-img"
                  aria-label="Instagram"
                  role="img"
                  style={{
                    backgroundImage: 'url("https://static.cdninstagram.com/rsrc.php/v4/yz/r/H_-3Vh0lHeK.png")',
                    backgroundPosition: '0px -2907px',
                    backgroundSize: 'auto',
                    width: 175,
                    height: 51,
                    backgroundRepeat: 'no-repeat',
                    display: 'inline-block',
                  }}
                />
              </div>
              <FakeLoginForm showIndicators={showIndicators} />

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-gray-700" />
                <span className="text-xs text-muted-foreground uppercase">OR</span>
                <div className="flex-1 h-px bg-gray-700" />
              </div>

              {/* Social login */}
              <button className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#1e40af] text-white text-sm font-medium hover:opacity-90 transition-opacity">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                Log in with Facebook
              </button>
            </div>

            {/* Sign up box (separate bordered box like screenshot) */}
            <div className="w-full max-w-sm border border-gray-700 rounded-md mt-6 py-4 text-center bg-[#0b0c0d]">
              <p className="text-sm text-muted-foreground">
                Don't have an account? {" "}
                <a href="#" className="text-white font-semibold hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer links similar to screenshot */}
      <footer className="w-full border-t border-gray-800 py-6 text-sm text-muted-foreground">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <div className="w-full flex flex-wrap justify-center gap-4 mb-4">
            <a className="text-muted-foreground/90">Meta</a>
            <a className="text-muted-foreground/90">About</a>
            <a className="text-muted-foreground/90">Blog</a>
            <a className="text-muted-foreground/90">Jobs</a>
            <a className="text-muted-foreground/90">Help</a>
            <a className="text-muted-foreground/90">API</a>
            <a className="text-muted-foreground/90">Privacy</a>
            <a className="text-muted-foreground/90">Terms</a>
            <a className="text-muted-foreground/90">Locations</a>
            <a className="text-muted-foreground/90">Instagram Lite</a>
            <a className="text-muted-foreground/90">Meta AI</a>
            <a className="text-muted-foreground/90">Threads</a>
            <a className="text-muted-foreground/90">Contact Uploading & Non-Users</a>
            <a className="text-muted-foreground/90">Meta Verified</a>
          </div>

          <div className="w-full flex justify-center">
            <div className="text-muted-foreground/90">English ▾</div>
          </div>

          <div className="w-full mt-4 text-center text-muted-foreground/80">© 2026 Instagram from Meta</div>
        </div>
      </footer>
    </div>
  );
};
export default Index;