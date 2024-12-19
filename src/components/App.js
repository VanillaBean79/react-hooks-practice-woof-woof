import React, {useState, useEffect} from "react";
import DogBar from './DogBar'
import DogContainer from './DogContainer'

function App() {
  const [pups, setPups] = useState([])
  const [selectedDog, setSelectedDog] = useState(null)
  const [ filterGoodDogs, setFilterGoodDogs] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((r) => r.json())
      .then((pups) => setPups(pups));
  }, []);

  const toggleGoodDogFilter = ()=> {
    setFilterGoodDogs(!filterGoodDogs)
  }

  const filteredPups = filterGoodDogs ? pups.filter((dog)=> dog.isGoodDog) : pups 

  const handleDogClick = (dog)=> {
    setSelectedDog(dog)
  }



  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter"
                onClick={toggleGoodDogFilter}
                >
                    Filter good dogs: {filterGoodDogs ? "ON" : "OFF"}
                  </button>
      </div>
      <div id="dog-bar">
        <DogBar 
           pups={filteredPups} 
           onDogClick={handleDogClick}
          />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogContainer selectedDog={selectedDog} />
        </div>
      </div>
    </div>
  );
}

export default App;
