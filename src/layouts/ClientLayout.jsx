
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { GlobalProvider } from "@/contexts/GlobalContext";


const ClientLayout = () => {
 
  
  return (
      <>
       
        <GlobalProvider >
          <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Navbar  />
              <main className="p-6 h-full min-h-[calc(100vh-60px)] max-h-[calc(100vh-60px)] overflow-y-auto  bg-secondary"> 
                 <Outlet />
              </main>
            </div>
          </div>
        </GlobalProvider>
       
      
  
      </>
  );
};

export default ClientLayout;