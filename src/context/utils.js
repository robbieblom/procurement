import { mockBusiness2 } from "../mocks/business";

const mockAsString = JSON.stringify(mockBusiness2);

export const getReactViewDefinition = () => {
  return `
        import pyodide

        class ReactView:
            def update(self, message=''):
                print('ReactView message: {}'.format(message))
                pyodide.code.run_js('window.runtimeSharedState.setState({ business: ${mockAsString} });')
    `;
};

export const createPythonEnvironment = async () => {
  let pyodide = await loadPyodide();
  await pyodide.loadPackage("micropip");
  const micropip = pyodide.pyimport("micropip");
  await micropip.install("sqlite3");
  await micropip.install("procurement-bytetheory");
  return pyodide;
};
