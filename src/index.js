// todo:
// 8/14 added start to render several components deep
// 'component' could be a func if using a custom component - need to be able to handle
//      add classes to custom component
// 'component' could be a func if using a class - need to be able to handle  

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
