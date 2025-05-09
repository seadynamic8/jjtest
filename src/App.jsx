import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// A "Hello world" program.

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>hello, world</p>
      <p>goodbye, world</p>
    </>
  );
}

export default App;
