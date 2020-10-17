import React from 'react';
import ReactDOM from 'react-dom';

import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a faviourite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
]


export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  )

}