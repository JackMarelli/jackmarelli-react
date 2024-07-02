import React, { createContext } from "react";

const GlobalContext = createContext({
  getMenuOptions: () => {},
});

export const GlobalContextProvider = (props) => {
  const menu_options = ["about", "work", "playground", "contact"];

  const getMenuOptionsHandler = () => {
    return menu_options;
  };

  const context = {
    getMenuOptions: getMenuOptionsHandler,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
