// NOTE: pyodide is loaded via cdn on index.html in the
// public folder because it was conflicting with webpack
import { useState } from "react";
import { appStore } from "../stores/AppStore";

export function usePythonEnvironment() {
  const [pythonEnvironment, setPythonEnvironment] = useState();
  const [loaded, setLoaded] = useState(false);
  // const business = appStore((state) => state.business);

  async function createPythonEnvironment() {
    if (!loaded) {
      let pyodide = await loadPyodide();
      await pyodide.loadPackage("micropip");
      const micropip = pyodide.pyimport("micropip");
      await micropip.install("sqlite3");
      await micropip.install("procurement-bytetheory");
      const test_namespace = { appStore };
      pyodide.registerJsModule("test_namespace", test_namespace);
      setPythonEnvironment(pyodide);
      setLoaded(true);
    }
  }

  createPythonEnvironment();

  return [pythonEnvironment, loaded];
}
