export const getReactViewDefinition = (nameOfSharedState) => {
  return `
        import js
        import pyodide
        from test_namespace import appStore

        class ReactView:
            def update(self, message=''):
                print('ReactView message: {}'.format(message))
                pyodide.code.run_js('window.appStore.setState({business: "test"});')
                
            
            def jsobj(self, pythonDict):
                # needs to be recursive
                # return js.Object.fromEntries(pyodide.to_js(pythonDict))
                return js.Object.fromEntries(pyodide.to_js({business: 'test'}))
    `;
};
