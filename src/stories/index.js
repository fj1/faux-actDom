import React, {Component} from 'react';
import { storiesOf } from '@storybook/react';

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

storiesOf('HTML elements', module)
  // babel parses the code and calls createElement with the 1st arg <div>
  .add('single html element', () => <div className="hello">Hello World</div>, document.getElementById('root'))

  .add('html element with one child', () => <div className="hello"><span className='child'>Hi kids</span></div>, document.getElementById('root'))

  .add('html element with many children', () => <div className="hello">
    <div>
      <div className='grandchild'>hello</div>
    </div>
      <div>world</div>
    </div>,
    document.getElementById('root'))

  .add('custom component', () => <CustomComponent />, document.getElementById('root'))
  
  .add('custom component with child custom component', () => <ParentComponent />, document.getElementById('root'))
  
  .add('custom component several levels deep', () => <DeepSpaceNine />, document.getElementById('root'))
  
  .add('custom class component', () => <ClassyComponent />);