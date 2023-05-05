import React, { useContext } from "react";
import { getReactViewDefinition } from "./utils";

const ViewContext = React.createContext();

export function useView() {
  return useContext(ViewContext);
}

export function View({ children }) {
  const view = getReactViewDefinition();
  return (
    <>
      <ViewContext.Provider value={view}>{children}</ViewContext.Provider>
    </>
  );
}
