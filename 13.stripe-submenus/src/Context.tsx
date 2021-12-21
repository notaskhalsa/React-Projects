import React, { useState, useContext } from 'react';
import sublinks from './Data';

export type AppContextType = {
    isSidebarOpen: boolean,
    openSidebar: () => void,
    closeSidebar: () => void,
    isSubmenuOpen: boolean,
    openSubmenu: (text: string, coordinate: any) => void,
    closeSubmenu: () => void,
    page: PageType,
    location: {center: number, bottom: number}
}

export type PageType = {
    page: string,
    links: {
      label: string;
      icon: JSX.Element;
      url: string;
    }[]
}

const AppContext = React.createContext<AppContextType>({
  isSidebarOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
  isSubmenuOpen: false,
  openSubmenu: (text: string, coordinate: any) => {},
  closeSubmenu: () => {},
  page: {page: '', links: []},
  location: {center: 0, bottom: 0}
});

const AppProvider: React.FC = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState<PageType>({ page: '', links: [] });
  const [location, setLocation] = useState({center: 0, bottom: 0});
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text: string, coordinates: {center:number , bottom: number}) => {
    const page = sublinks.find((link) => link.page === text);
    if(page){
      setPage(page);
    }
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };