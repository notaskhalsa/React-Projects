import React, { useContext, useState } from "react";

export type AppContextType = {
  isSidebarOpen:boolean,
  isModalOpen:boolean,
  openModal: () => void,
  closeModal: () => void,
  openSidebar: () => void,
  closeSidebar: () => void
};

const AppContext = React.createContext<AppContextType>({
    isSidebarOpen:false,
    isModalOpen: false,
    openModal: () => {},
    closeModal: () => {},
    openSidebar: () => {},
    closeSidebar: () => {}
});

const AppProvider: React.FC = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
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
