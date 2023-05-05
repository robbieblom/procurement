export const getReactViewDefinition = () => {
  return `
        import pyodide

        class ReactView:
            def update(self, message=''):
                print('ReactView message: {}'.format(message))
                pyodide.code.run_js('window.runtimeSharedState.setState({business: "test"});')
    `;
};
