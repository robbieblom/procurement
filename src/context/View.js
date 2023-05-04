import React, { useContext } from "react";
import { getReactViewDefinition } from "./utils";

const ViewContext = React.createContext();

export function useView() {
  return useContext(ViewContext);
}

export function View({ children }) {
  const nameOfSharedStore = "appStore";
  const view = getReactViewDefinition(nameOfSharedStore);

  return (
    <>
      <ViewContext.Provider value={view}>{children}</ViewContext.Provider>
    </>
  );
}
