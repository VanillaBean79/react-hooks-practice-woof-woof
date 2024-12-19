import React from 'react'

function DogBar({ pups, onDogClick }){
    

    return(
        <div id="dog-bar">
            {pups.map((dog)=>(
                <span   
                    key={dog.id}
                    onClick={()=>onDogClick(dog)}
                    >
                        {dog.name}
                        
                    </span>
            ))}
        </div>
    )
}

export default DogBar