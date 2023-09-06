import React from 'react';
import Dropdown from './Dropdown'; // import Dropdwon

const App = () => {
  const dropdownItems = ['Yes','No','Probably Not','Sure','Not Sure'];

  return (
    <div className="app">
      <Dropdown items={dropdownItems} />
    </div>
  );
};

export default App;
