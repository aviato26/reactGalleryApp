import React from 'react';
import '../index.css'

let Photo = (props) => {
  return(
    <li>
      <img src={props.url} alt=''/>
    </li>
  )
}

export default Photo
