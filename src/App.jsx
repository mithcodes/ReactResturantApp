// App.js
import React, { useState } from 'react';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('App RUNNING');

  const toggleParagraph = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <button onClick={toggleParagraph}>Toggle Paragraph</button>
      <DemoOutput show={showParagraph} />
      
      {/* Add MyParagraph component here if needed */}
    </div>
  );
}

export default App;
