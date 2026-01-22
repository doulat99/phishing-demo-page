import { Shield, Eye, CheckCircle2, XCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
interface EducationalSidebarProps {
  showIndicators: boolean;
  onToggle: (value: boolean) => void;
}
const EducationalSidebar = ({
  showIndicators,
  onToggle
}: EducationalSidebarProps) => {
  const indicators = [{
    id: 1,
    label: "Suspicious URL with misspellings"
  }, {
    id: 2,
    label: "Urgency/fear-based messaging"
  }, {
    id: 3,
    label: "Grammar and spelling errors"
  }, {
    id: 4,
    label: "Requests for unusual information"
  }, {
    id: 5,
    label: "Pre-checked consent boxes"
  }, {
    id: 6,
    label: "External links to unknown domains"
  }];
  return;
};
export default EducationalSidebar;