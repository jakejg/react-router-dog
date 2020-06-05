import React from 'react';

const DogDetail = ({dog}) => {

    return (
        <div>
            <h1>{dog.name}</h1>
            <img src={dog.src} alt="Cute Dog"></img>
            <p>{dog.name} is {dog.age} years old.</p>
            <ul>
                <b>Facts</b>: {dog.facts.map(fact => <li key={fact}>{fact}</li>)}
            </ul>
            
        </div>
    )
}
export default DogDetail;