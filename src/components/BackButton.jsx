import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <Button onClick={() => navigate(-1)} variant="ghost" className="gap-2 ">
      <ChevronLeft className="h-2 w-2" />
        Back
    </Button>
  );
}
