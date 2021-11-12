import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleContainer from './components/SimpleContainer';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <p>
          Random Topic Generator
        </p>
        <SimpleContainer/>    
      </header>
    </div>
    </>
  );
}

export default App;
