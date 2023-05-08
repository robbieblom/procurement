import React, { useContext } from "react";
import { ControllerWrapper } from "../controller-wrapper/ControllerWrapper";
import { usePythonEnvironment } from "../hooks/usePythonEnvironment";
import { LoadingFallback } from "./LoadingFallback";
import { useView } from "./View";

const ControllerContext = React.createContext();

export function useController() {
  return useContext(ControllerContext);
}

export function Controller({ children }) {
  const [pythonEnvironment, loaded] = usePythonEnvironment();
  const view = useView();

  let controller;
  if (loaded) {
    controller = new ControllerWrapper(pythonEnvironment);
    controller.setView(view);
  } else {
    controller = null;
  }

  return (
    <>
      <ControllerContext.Provider value={controller}>
        <LoadingFallback>{children}</LoadingFallback>
      </ControllerContext.Provider>
    </>
  );
}
