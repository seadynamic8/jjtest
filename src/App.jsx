import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// A "Hello world" program.
//
// This is the best implemenation of this program to ever exist.

function App() {
  const [count, setCount] = useState(0);

  // a function that prints a message
  const print = (str) => {
    return <p>{str}</p>;
  };

  return (
    <>
      {print('Hello, world')}
      {print('Goodbye, world')}
    </>
  );
}

export default App;
