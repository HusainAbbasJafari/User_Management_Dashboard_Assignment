import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
 
      <div className="flex relative !h-[60px]  items-center justify-between px-4 bg-primary text-primary-foreground shadow-md w-[100%] ">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-7 w-7" />
          <span className="font-semibold text-lg">Dropheat</span>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          {/* Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Drawer below navbar */}
      <div
        className={`md:hidden bg-green-500 overflow-hidden absolute top-[54px] left-0 right-0 transition-all duration-300 bg-background border-b border-border ${
          menuOpen ? "max-h-40 py-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-4">
          <Link to="/" onClick={()=>setMenuOpen(false)} className="px-2 py-1 rounded-md hover:bg-primary/50 transition-colors">Home/UserList</Link>
          <Link onClick={()=>setMenuOpen(false)}  to="/user/add" className="px-2 py-1 rounded-md hover:bg-primary/50 transition-colors">Add User</Link>
        </div>
      </div>

      </div>

      
   
  );
}
