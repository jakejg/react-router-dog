import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = ({dogs}) => {
    return (
        <nav className="Nav">
            <ul>
                {dogs.map(dog => (
                    <li key={dog.name}><NavLink exact to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink></li>
                ))}
                <NavLink exact to="/dogs">Home</NavLink>
            </ul>
        </nav>
    )
}
export default Nav;