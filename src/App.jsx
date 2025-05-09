import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// A "Hello world" program.
//
// This is the best implemenation of this program to ever exist.

function App() {
  const [count, setCount] = useState(0);

  const printHello = () => {
    return <p>hello, world</p>;
  };

  const printGoodbye = () => {
    return <p>Goodbye, world</p>;
  };

  return (
    <>
      {printHello}
      {printGoodbye}
    </>
  );
}

export default App;
