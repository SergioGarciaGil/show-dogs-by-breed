import React, { useState, useEffect } from "react";
import Select from "./components/Select";
import Card from "./components/Card";
import getDog from "./helper/getDog";

const initialDog = {
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOHUGs2BXpZppeDw1i_qAKDky9RqqtsU8Ag&usqp=CAU",
  breed: {
    id: 1,
    name: "Labrador",
  },
};

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId).then((newDog) => {
      setDog(newDog);
      setLoading(false);
      // console.log(newDog);
    });
  };
  return (
    <div className="app">
      <Select updateDog={updateDog} />
      <Card dog={dog} updateDog={updateDog} loading={loading} />
    </div>
  );
}

export default App;
