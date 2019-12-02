import React from 'react';
import Header  from './Header'
import CustomDate from './CustomDate'
import FruitLoops from './FruitLoops'

const App: React.FC = () => {
  const fruit: Array<string> = [
    "red",
    "green",
    "blue",
    "yellow"
  ]

  return (
    <div>
      <Header text="World" />
      <CustomDate />
      <FruitLoops fruit={fruit} />
    </div>
  );
}

export default App;
