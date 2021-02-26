import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Tarekul></Tarekul>
      <Tarekul></Tarekul>
      <Counter></Counter>
      <Users></Users>
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
function Users() {
  const styleClass={
    border:'2px solid white',
    backgroundColor:'gray',
    padding:'20px',
    margin:'10px',
    listStyle:'none',
    float:'left',
    width:'230px',
    height:'100px',
    borderRadius:'20px',
    boxShadow:'5px 5px 10px yellow',
    fontSize:'20px'
  }
  const [users, setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return (
    <div >
      <h3>Dynamic site: {users.length}</h3>
      <ul>
        {users.map(user => <li style={styleClass}>{user.name} <br/> {user.email} <br/> {user.phone}</li>)}
      </ul>
    </div>
  )
}
export default App;
