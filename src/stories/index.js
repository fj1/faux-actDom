import React from 'react';
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
  
  .add('custom component with child custom component', () => <ParentComponent />, document.getElementById('root'));