import React from 'react';
import './App.css';
import Greetings from './Greeting';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';

// function App() {
const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <SampleProvider>
      <div className="App">
        <Greetings name="hello" onClick={onClick} mark="aaaaaaa" />
        <hr />
        <Counter />
        <hr />
        <MyForm onSubmit={onSubmit} />
        <hr />
        <ReducerSample />
      </div>
    </SampleProvider>
  );
};

export default App;
