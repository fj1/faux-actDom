import registerServiceWorker from './registerServiceWorker';

class ReactDOM {
  static render(component, element) {
    return null;
  }
}

class React {
  static createElement(
    type,
    props = {},
    ...children
  ) {
    return {
      props: {
        ...props,
      },
      type
    }
  }
}

ReactDOM.render(<div className="hello">Hello World</div>, document.getElementById('root'));
registerServiceWorker();
