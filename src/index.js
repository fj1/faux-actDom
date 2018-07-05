import '../src/index.css'

class ReactDOM {
  static render(component, element) {
    const {children, className} = component.props;

    const newElement = document.createElement(component.type);

    if (typeof children === 'string') {
      newElement.innerText = children;
      newElement.className = className;
    } else {
      const childElement = document.createElement(children.type);
      const newChildProps = children.props;
      childElement.innerText = newChildProps.children;
      childElement.className = newChildProps.className;
      newElement.appendChild(childElement);
    }

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
// single element
// ReactDOM.render(<div className="hello">Hello World</div>, document.getElementById('root'));

// element with one child
ReactDOM.render(<div className="hello"><span className='child'>Hi kids</span></div>, document.getElementById('root'));
