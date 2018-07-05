import '../src/index.css'

class ReactDOM {
  static prepareElement(element, props) {
    const {children, className} = props;
    element.innerText = children;
    element.className = className;
  }

  static render(component, element) {
    const {children} = component.props;
    
    const newElement = document.createElement(component.type);
    
    if (typeof children === 'string') {
      this.prepareElement(newElement, component.props);
    } else {
      const childElement = document.createElement(children.type);
      const newChildProps = children.props;
      this.prepareElement(childElement, newChildProps);
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
