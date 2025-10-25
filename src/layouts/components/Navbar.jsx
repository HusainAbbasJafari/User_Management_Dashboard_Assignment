import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Home, HomeIcon, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex relative h-[60px]  items-center justify-between px-4 bg-background border-b w-[100%] ">
      <div className="flex items-center gap-2">
        <Avatar className="h-10 w-10 md:hidden">
          <AvatarImage className="object-cover" src="/logo.png" alt="Logo" />
          <AvatarFallback>DH</AvatarFallback>
        </Avatar>
        <span className="font-semibold text-lg lst:tracking-widest">
          UserNexus
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? (
            <Button variant="ghost" size="icon" className="border">
              <Sun className="h-5 w-5" />
            </Button>
          ) : (
            <Button variant="ghost" size="icon" className="border">
              <Moon className="h-5 w-5" />
            </Button>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      <div
        className={`md:hidden z-50 overflow-hidden absolute top-[60px] left-0 right-0 transition-all duration-300 bg-background border-b border-border ${
          menuOpen ? "max-h-40 py-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="px-2 py-1 flex items-center gap-2 rounded-md hover:bg-primary/50 transition-colors"
          >
            {" "}
            <Home className="w-5 h-5" />{" "}
            <span className="text-md">Home / UserList</span>
          </Link>
          <Link
            to="/user/add"
            onClick={() => setMenuOpen(false)}
            className="px-2 py-1 flex items-center gap-2 rounded-md hover:bg-primary/50 transition-colors"
          >
            {" "}
            <UserPlus className="w-5 h-5" />{" "}
            <span className="text-md">Add User</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
