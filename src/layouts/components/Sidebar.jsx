import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { Home, User, Settings, Menu } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const { isSidebarOpen,setSidebarOpen, toggleSidebar} = useGlobalContext();

  return (
    <aside
      className={`h-screen relative bg-card border-r border-border hidden md:block p-4 transition-all duration-300  ${
        isSidebarOpen ? "w-60" : "w-20 "
      }`}
    >
      <Button variant="ghost" size="icon" onClick={toggleSidebar} className="rounded-full border absolute top-[50%] translate-y-[-50%] right-0  translate-x-1/2 !z-10 bg-card" >
        <Menu className="h-5 w-5" />
      </Button>
      <ul className="flex flex-col gap-4 text-foreground mt-6">
        <li className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors">
          <Home className="h-5 w-5" /> Dashboard
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors">
          <User className="h-5 w-5" /> Users
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors">
          <Settings className="h-5 w-5" /> Settings
        </li>
      </ul>
    </aside>
  );
}
