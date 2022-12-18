import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  const clear = () => {
    setPeople([]);
  };
  return (
    <div className="container">
      <h1>{people.length} birthdays today</h1>
      {people.map((person, index) => {
        return <List key={index} {...person} />;
      })}
      <button onClick={clear}>Clear All</button>
    </div>
  );
};

export default App;
