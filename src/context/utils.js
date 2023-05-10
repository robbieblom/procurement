export const getReactViewDefinition = () => {
  return `
        import pyodide

        class ReactView:
            def update(self, message, payload):
                print('ReactView message: {}'.format(message))
                
                # print(payload)
                newStateAsString = "{business: " + payload + "}"
                jsAsString = 'window.runtimeSharedState.setState({});'.format(newStateAsString)
                pyodide.code.run_js(jsAsString)
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
