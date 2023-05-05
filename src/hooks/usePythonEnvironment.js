// NOTE: pyodide is loaded via cdn on index.html in the
// public folder because it was conflicting with webpack
import { useState } from "react";
import { appStore } from "../stores/AppStore";

export function usePythonEnvironment() {
  const [pythonEnvironment, setPythonEnvironment] = useState();
  const [loaded, setLoaded] = useState(false);

  async function createPythonEnvironment() {
    if (!loaded) {
      let pyodide = await loadPyodide();
      await pyodide.loadPackage("micropip");
      const micropip = pyodide.pyimport("micropip");
      await micropip.install("sqlite3");
      await micropip.install("procurement-bytetheory");
      setRuntimeSharedState();
      setPythonEnvironment(pyodide);
      setLoaded(true);
    }
  }

  function setRuntimeSharedState() {
    window.runtimeSharedState = appStore;
  }

  createPythonEnvironment();

  return [pythonEnvironment, loaded];
}
