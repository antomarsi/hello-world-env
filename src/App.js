import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a test server {process.env.REACT_APP_MESSAGE}
        </p>
      </header>
    </div>
  );
}

export default App;
