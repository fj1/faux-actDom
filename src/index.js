import '../src/index.css'

// todo:
// handle classNames
// 'component' could be a func if using a custom component - need to be able to handle
// 'component' could be a func if using a class - need to be able to handles  

class ReactDOM {
  static render(component, element) {
    if (typeof component === 'string') {
      element.innerText = component;

    } else {
      const newElement = document.createElement(component.type);
      const {children} = component.props;
      // recursively render child elements
      for (const child of children) {
        ReactDOM.render(child, newElement);
      }
      element.appendChild(newElement);
    }
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
// ReactDOM.render(<div className="hello"><span className='child'>Hi kids</span></div>, document.getElementById('root'));

// element with many children
ReactDOM.render(
  (
    <div className="hello">
      <div>
        <div>hello</div>
      </div>
      <div>world</div>
    </div>
  ), 
  document.getElementById('root')
);
