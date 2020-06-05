import React from 'react';
import { Link } from 'react-router-dom';

const DogList = ({dogs}) => {
    return (
        <>
            <h1>Check out the dogs!</h1>
            <ul>
                {dogs.map(dog => (
                    <li key={dog.name}><Link to={`dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></li>
                ))}
            </ul>
        </>
    )
}
export default DogList;