import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import DogDetail from './DogDetail';

const FindDog = ({dogs}) => {
    const { name } = useParams();
    const currDog = dogs.find(dog => dog.name.toLowerCase() === name);

    if (!currDog) return <Redirect to='/dogs' />

    return (
        <DogDetail dog={currDog}/>
    )
}
export default FindDog;