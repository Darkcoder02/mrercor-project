import React from 'react';
import TextSection from './TextSection';
import CardSection from './CardSection';
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="h-screen w-screen bg-blue-500"></section>
      <TextSection />
      <CardSection />
    </div>
  );
}

export default App;
