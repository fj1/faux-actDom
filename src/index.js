import '../src/index.css'

class ReactDOM {
  static render(component, element) {
    const {children, className} = component.props;

    const newElement = document.createElement(component.type);
    newElement.innerText = children;
    newElement.className = className;

    // will update to not use Node.appendChild()
    element.appendChild(newElement);
  }
}

class React {
  static createElement(
    type,
    props = {},
    children
  ) {
    return {
      props: {
        ...props,
        children,
      },
      type
    }
  }
}

// babel parses the code and calls createElement with the 1st arg <div>
ReactDOM.render(<div className="hello">Hello World</div>, document.getElementById('root'));
