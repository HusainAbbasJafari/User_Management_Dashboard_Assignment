
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { GlobalProvider } from "@/contexts/GlobalContext";
import { Toaster } from "@/components/ui/toaster";
import BackButton from "@/components/BackButton";


const ClientLayout = () => { 
  return (
      <>
        <GlobalProvider >
          <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Navbar  />
              <main className="relative p-6 h-full min-h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] overflow-y-auto w-full max-w-[100vw] sm:max-w-full bg-secomdary">
                <BackButton/>
                 <Outlet />
              </main>
            </div>
          </div>
           <Toaster/>
        </GlobalProvider>
      </>
  );
};

export default ClientLayout;