import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

export type ToursData = {
  id: number,
  image: string,
  info: string,
  name: string
  price: number
} 

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([] as ToursData[]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      console.log(tours)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeTour = (id:number) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours  tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
function setTours(newTours: any) {
  throw new Error("Function not implemented.");
}

function fetchTours() {
  throw new Error("Function not implemented.");
}

