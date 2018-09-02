import React from 'react';
import '../index.css';


let Nav = () => {
  return(
    <nav className='main-nav'>
      <ul>
        <li>
          <a>Cats</a>
        </li>
        <li>
          <a>Dogs</a>
        </li>
        <li>
          <a>Computers</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
