import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // Using state
  const [info] = useState({
    studentId: "101172332",
    name: "Munir Howlader",
    college: "George Brown College, Toronto"
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="info-card">
          <h1>Welcome to Fullstack Development - I</h1>
          <h2>React JS Programming Week07 Lab exercise</h2>
          <p>{info.studentId}</p>
          <p>{info.name}</p>
          <p>{info.college}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
