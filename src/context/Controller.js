import React, { useContext, useEffect, useState } from "react";
import { ControllerWrapper } from "../controller-wrapper/ControllerWrapper";
import { appStore } from "../stores/AppStore";
import { LoadingFallback } from "./LoadingFallback";
import { useView } from "./View";
import { createPythonEnvironment } from "./utils";

const ControllerContext = React.createContext();

export function useController() {
  return useContext(ControllerContext);
}

export function Controller({ children }) {
  const [controller, setController] = useState(null);
  const view = useView();

  const createController = (pythonEnvironment) => {
    const initializedController = new ControllerWrapper(pythonEnvironment);
    initializedController.setView(view);
    setController(initializedController);
  };

  const setRuntimeSharedState = () => {
    window.runtimeSharedState = appStore;
  };

  const seedSimulation = () => {
    controller.createBusiness("Acme Innovations", 500);
    controller.seedMarket();
  };

  useEffect(() => {
    createPythonEnvironment()
      .then((env) => createController(env))
      .then(() => setRuntimeSharedState())
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (controller != null) {
      seedSimulation();
    }
  }, [controller]);

  return (
    <>
      <ControllerContext.Provider value={controller}>
        <LoadingFallback>{children}</LoadingFallback>
      </ControllerContext.Provider>
    </>
  );
}
