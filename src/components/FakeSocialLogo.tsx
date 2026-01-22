import { Camera } from "lucide-react";

const FakeSocialLogo = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="h-16 w-16 social-gradient rounded-2xl flex items-center justify-center shadow-lg">
        <Camera className="h-8 w-8 text-white" />
      </div>
      <h1 className="text-3xl font-bold social-gradient-text">
        Instaqram
      </h1>
      <p className="text-muted-foreground text-sm">
        Share moments with friends
      </p>
    </div>
  );
};

export default FakeSocialLogo;
