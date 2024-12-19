import React from 'react'

function DogContainer({selectedDog, onToggleGoodDogFilter}){

    if (!selectedDog) {
        return <h2>Select a dog to see details.</h2>
    }

    const dogStatus = selectedDog.isGoodDog ? "Good Dog" : "Bad Dog"
    return(
        <div id="dog-summary-container">
            <h1>{selectedDog.name}</h1>
            <div id="dog-info">
                <img src={selectedDog.image} alt={selectedDog.name}/>
                <p>{dogStatus}</p>
            </div>
        </div>
    )
}

export default DogContainer