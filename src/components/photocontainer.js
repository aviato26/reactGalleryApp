import React from 'react';
import Photo from './photo'
import '../index.css';

let Gallery = (props) => {
  return(
    <div>
      <h2>Results</h2>
      <ul>
        <Photo data={props.data}/>
      </ul>
    </div>
  )
}


export default Gallery;
