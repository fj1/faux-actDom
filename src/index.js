import '../src/index.css'

// todo:
// 'component' could be a func if using a custom component - need to be able to handle
// 'component' could be a func if using a class - need to be able to handle  

const CustomComponent = () => <div>yo yo yo</div>;

class ReactDOM {
  static render(component, element) {
    if (typeof component === 'string') {
      element.innerText = component;

    } else {
      let newElement;
      let children;
      let className;
      // handle custom component
      if (typeof component.type === 'function') {
        const newComponent = component.type();
        newElement = document.createElement(newComponent.type);
        children = newComponent.props.children;
      } 
      // handle html element
      else {
        newElement = document.createElement(component.type);
        children = component.props;
        className = component.props;
        newElement.className = className ? className : '';
      }
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
// ReactDOM.render(
//   (
//     <div className="hello">
//       <div>
//         <div className='grandchild'>hello</div>
//       </div>
//       <div>world</div>
//     </div>
//   ), 
//   document.getElementById('root')
// );

// custom component
ReactDOM.render(<CustomComponent />, document.getElementById('root'));
