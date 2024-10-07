import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isSmSidebarOpen, setIsSmSidebarOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [blogTitle, setBlogTitle] = useState();
  return (
    <AppContext.Provider
      value={{
        isOpenModal,
        isSmSidebarOpen,
        setIsSmSidebarOpen,
        setIsOpenModal,
        blogTitle,
        setBlogTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);
export default useApp;
