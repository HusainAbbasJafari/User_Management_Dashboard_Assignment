
import { createContext, useState, useContext } from "react";

const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

 
  return (
    <GlobalContext.Provider value={{ isSidebarOpen,setSidebarOpen, toggleSidebar}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);