class ReactDOM {
  static render(component, element) {
    const newElement = document.createElement(component.type);
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
