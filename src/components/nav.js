import React from 'react';
import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom';
import '../index.css';

const Nav = ({match}) => {
/*
activeLinks = e => {
  this.props.clickLinks(e.target.text)
}
*/
  return(
    <Router>
      <nav className='main-nav'>
        <ul>
          <li>
            <NavLink to={`${match.url}`}>Cats</NavLink>
          </li>
          <li>
            <NavLink to='/dogs'>Dogs</NavLink>
          </li>
          <li>
            <NavLink to='/birds'>Birds</NavLink>
          </li>
        </ul>
      </nav>
      //<Route path='/cats' render={`${match.url}`}/>
    </Router>
  )
 }

export default Nav
