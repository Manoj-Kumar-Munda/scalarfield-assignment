import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <AppContext.Provider
      value={{ isOpenModal, isOpenSidebar, setIsOpenSidebar, setIsOpenModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);
export default useApp;
