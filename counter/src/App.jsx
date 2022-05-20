import logo from './logo.svg';
import './App.css';

import Counter from "./component/Counter"
import { useState } from 'react';








function App() {

  const initial =0
  return (
    <div className="App">

        <Counter x={initial}></Counter>

      
    </div>
  );
}

export default App;
