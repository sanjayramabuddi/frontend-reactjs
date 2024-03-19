import React, { useState } from "react";
import data from "./data";
import Tours from './components/Tours';

const App = () => {
  const [tours, setTours] = useState(data);

  function removeCard(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2>No Tours Left</h2>
        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <>
      <Tours tours={tours} removeCard={removeCard}></Tours>
    </>);
};

export default App;
