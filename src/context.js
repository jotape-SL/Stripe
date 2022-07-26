import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [isSubmenuOpen, setisSubmenuOpen] = useState(true);

  const openSidebar = () => {
    setisSidebarOpen(true);
  };
  const closeSidebar = () => {
    setisSidebarOpen(false);
  };
  const openSubmenu = () => {
    setisSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setisSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
