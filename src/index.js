/*
 * todo: 
 * - handle state, ie maybe with text input
 *    - will need to handle updates, so we'll need to keep track
 *      of the compInstance for the incoming updates
 */

export class Component {
  static __IS_COMPONENT__ = true;
  // add setState() func that is ✨magical✨
}

export class ReactDOM {
  static render(component, element) {
    if (typeof component === "string") {
      element.innerText = component;
    } else {
      let newElement;
      let children;
      let className;
      // handle custom component
      if (typeof component.type === "function") {
        if (component.type.__IS_COMPONENT__) {
          // create a new instance of ClassyComponent
          var compInstance = new component.type(component.props);
          // call ReactDOM recursively with the ClassyComponent's render() func
          ReactDOM.render(compInstance.render(), element);
        } else {
          const newComponent = component.type();
          children = newComponent.props.children;
          ReactDOM.render(newComponent, element);
        }
      }
      // handle html element
      else {
        newElement = document.createElement(component.type);
        children = component.props.children;
        className = component.props.className;
        newElement.className = className ? className : "";
        for (const child of children) {
          ReactDOM.render(child, newElement);
        }
        element.appendChild(newElement);
      }
    }
  }
}

export default class React {
  static createElement(type, props = {}, ...children) {
    return {
      props: {
        ...props,
        children
      },
      type
    };
  }
}
