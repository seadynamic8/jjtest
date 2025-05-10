import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// A "Hello world" program.
//
// This is the best implemenation of this program to ever exist.

/// add documentation for main
function App() {
  const [count, setCount] = useState(0);

  // The main function runs when our program starts
  const print = (str) => {
    return <p>{str}</p>;
  };

  return <>{print('Hello, world')}</>;
}

export default App;
