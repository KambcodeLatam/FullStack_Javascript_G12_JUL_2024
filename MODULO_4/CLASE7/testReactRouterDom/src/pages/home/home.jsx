import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const idUser = 3;

  return (
    <div>
        <ul>
            <li>
                <NavLink to={`/user/${idUser}`}>
                    user Param
                </NavLink>
            </li>
        </ul>
        <h2>Componente Home</h2>
    </div>
  )
}

export default Home