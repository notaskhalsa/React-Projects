import React, { useState } from "react";
import data from "./data";
import List from "./List";

export type PeopleData = {
  id:number,
  name: string,
  age: number,
  image: string
}

function App() {
  const[people, setPeople] = useState(data as PeopleData[])

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
