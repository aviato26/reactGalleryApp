import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

class Nav extends React.Component{

activeLinks = e => {
  this.props.clickLinks(e.target.text)
  }

    render(){
      return(
          <nav className='main-nav' onClick={this.activeLinks}>
            <ul>
              <li>
                <NavLink to='/cats'>Cats</NavLink>
              </li>
              <li>
                <NavLink to='/dogs'>Dogs</NavLink>
              </li>
              <li>
                <NavLink to='/birds'>Birds</NavLink>
              </li>
            </ul>
          </nav>
      )
    }
 }

export default Nav
