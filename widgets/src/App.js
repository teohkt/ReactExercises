import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

const options = [
  {
    label: "The Color Red",
    value: 'red'
  },
  {
    label: "The Color Blue",
    value: 'blue'
  },
  {
    label: "The Color Green",
    value: 'green'
  }
]

const showTranslate = () => {
  if (window.location.pathname === 'translate') {
    return <Translate />
  };
};

const showComponent = (route, component) => {
  return window.location.pathname === route ? component: null;
}

export default () => {

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      {/* {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()} */}

      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/search">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown 
           options={options}
           selected={selected}
           onSelectedChange={setSelected}
        />

        {/* <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}
         {/* {showDropdown ? 
           <Dropdown 
           options={options}
           selected={selected}
           onSelectedChange={setSelected}
         /> : null
         */} 
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );

};