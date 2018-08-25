import '../src/index.css'

// todo:
// 8/14 added start to render several components deep
// 'component' could be a func if using a custom component - need to be able to handle
//      add classes to custom component
// add a custom component that returns another custom component
// incorporate storybook? then have a story for each type
// 'component' could be a func if using a class - need to be able to handle  

const CustomComponent = () => <div class='hello'>yo yo yo</div>;

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
        children = newComponent.props.children;
        ReactDOM.render(newComponent, element);
      } 
      // handle html element
      else {
        newElement = document.createElement(component.type);
        children = component.props.children;
        className = component.props.className;
        newElement.className = className ? className : '';
        for (const child of children) {
          ReactDOM.render(child, newElement);
        }
        element.appendChild(newElement);
      }
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
