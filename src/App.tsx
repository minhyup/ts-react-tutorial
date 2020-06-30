import React from 'react';
import './App.css';
import Greetings from './Greeting';

// function App() {
const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  };

  return (
    <div className="App">
      <Greetings name="hello" onClick={onClick} mark="aaaaaaa" />
    </div>
  );
};

export default App;
