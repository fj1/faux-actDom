import { storiesOf } from '@storybook/react';

import React, {ReactDOM, Component} from '../index';
import '../../src/index.css'

const CustomComponent = () => <div className='hello'>yo yo yo</div>;

const ParentComponent = () => {
  return (
    <div>
      Parent
      <CustomComponent />
    </div>
  )};

const DeepSpaceNine = () => {
  return (
    <div>
      1
      <div>
        2
        <div>
          3
          <div>
            4
            <div>
              5
              <div>
                6
                <div>
                  7
                  <div>
                    8
                    <div>
                      9
                      <CustomComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

class ClassyComponent extends Component {
  render() {
    return (
      <div className='parent'>
        I'm so&nbsp;
        <div className='classy'>classy</div>
        <DeepSpaceNine />
      </div>
    )
  }
}

const addFauxDoc = item => {
  // hack: storybook is rendering the empty string that is being returned,
  //   and is overwriting our element
  // setTimeout is using our custom ReactDOM to render to let Storybook do its thing
  //   and then render what we want
  setTimeout(() => {
    ReactDOM.render(item, document.getElementById('root'));
  }, 0);
  return " ";
}

storiesOf('HTML elements', module)
  // babel parses the code and calls createElement with the 1st arg <div>
  .add('single html element', () => addFauxDoc(<div className="hello">Hello World</div>))

  .add('html element with one child', () => addFauxDoc(<div className="hello"><span className='child'>Hi kids</span></div>))

  .add('html element with many children', () => addFauxDoc(<div className="hello">
    <div>
      <div className='grandchild'>hello</div>
    </div>
      <div>world</div>
    </div>))

  .add('custom component', () => addFauxDoc(<CustomComponent />))
    
  .add('custom component with child custom component', () => addFauxDoc(<ParentComponent />))
    
  .add('custom component several levels deep', () => addFauxDoc(<DeepSpaceNine />))
    
  .add('custom class component', () => addFauxDoc(<ClassyComponent />));