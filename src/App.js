import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Tarekul></Tarekul>
      <Tarekul></Tarekul>
      <Counter></Counter>
      </header>
    </div>
  );
}
function Tarekul() {
  return (<div><h1>Tarekul Name</h1>
  
    <h2>soma</h2>
    </div>)
}
function Counter() {
  const [saba, setCount]= useState(0);
  return (
    <div>
      <h1>Count: {saba}</h1>
      <button onClick={() => setCount(saba+1)}>Increase</button>
      <button onClick={() => setCount(saba-1)}>Decrease</button>
    </div>
  )
}
export default App;
