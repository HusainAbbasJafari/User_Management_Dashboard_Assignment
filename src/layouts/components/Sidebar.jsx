import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { Home, User,UserPlus, Menu, ArrowRight, ArrowLeft,Settings,InfoIcon ,Library, } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home / UserList", icon: Home, path: "/" },
  { name: "Add User", icon: UserPlus, path: "/user/add" },
  { name: "Library", icon: Library,  },
  { name: "Help", icon: InfoIcon,  },
  { name: "Settings", icon: Settings,  },
];

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <aside
      className={`h-screen relative bg-background border-r border-border  flex flex-col gap-3   hidden md:flex transition-all duration-500 ${
        isSidebarOpen ? "w-60" : "w-16"
      }`}
    >
       <div
        className={`border-b border-border flex items-center px-3 h-[60px] transition-all duration-300 ${
          isSidebarOpen ? "justify-start gap-3" : "justify-center"
        }`}
      >
        <Avatar className="h-10 w-10">
          <AvatarImage  className="object-cover" src="/logo.png" alt="Logo" />
          <AvatarFallback>DH</AvatarFallback>
        </Avatar>

        <div
          className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${
            isSidebarOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-3 w-0"
          }`}
        >
          <p className="text-sm font-semibold">Dashboard</p>
          <p className="text-xs text-muted-foreground">Created by @husain</p>
        </div>
      </div>
      <ul className="flex flex-col gap-3 text-foreground w-full max-w-[85%] mx-auto">
        {menuItems?.map((item) => (
          
          <Link to={item?.path} key={item?.name} >
          <li
            key={item?.name}
            className={`rounded-md p-2 shadow-md border-b hover:bg-primary/50 transition-all duration-300 flex items-center cursor-pointer hover:text-primary ${
              isSidebarOpen ? "w-full" : "w-10 h-10 justify-center mx-auto"
            }`}
          >
            <item.icon className="h-5 w-5 flex-shrink-0 transition-all duration-300" />
            <span
              className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${
                isSidebarOpen ? "opacity-100 ml-3 w-auto" : "opacity-0 w-0 ml-0"
              }`}
            >
              {item?.name}
            </span>
          </li>
          </Link>
        ))}
      </ul>
      <div
        className={`border-t absolute bottom-0 left-0 right-0 border-border mt-4 flex items-center  px-2 py-2 transition-all duration-300 ${
          isSidebarOpen ? "justify-start gap-3" : "justify-center"
        }`}
      >
        <Link to="https://github.com/HusainAbbasJafari">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://avatars.githubusercontent.com/u/136914336?v=4" alt="Profile" />
          <AvatarFallback>HJ</AvatarFallback>
        </Avatar>
        </Link>
        <div
          className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${
            isSidebarOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-3 w-0"
          }`}
        >
          <p className="text-sm font-semibold">Husain Abbas Jafri</p>
          <p className="text-xs text-muted-foreground">jafrihusain000@gmail.com</p>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="rounded-full border  absolute h-7 w-7 top-[20%] translate-y-[-50%] right-0 translate-x-1/2 !z-10 bg-primary  text-primary-foreground"
      >
        {isSidebarOpen ? (
          <ArrowLeft  />
        ) : (
          <ArrowRight  />
        )}
      </Button>
    </aside>
  );
}
