import React from 'react';
import './App.css';
import Project from "./pages/Projects";
import Header from "./components/Header"
function App() {
  return (
    <div className="App">
      <Header/>
     <Project></Project>
    </div>
  );
}

export default App;
