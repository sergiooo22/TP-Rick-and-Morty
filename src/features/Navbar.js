import React from 'react'

import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="black">
            <ul  >
                <li>
                    <NavLink exact to="/" activeclass="active" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/episodes" activeclass="active">Episodes</NavLink>
                </li>     
                
            </ul>
        </nav>
    )
}
