import React from 'react';
import Photo from './photo';
import '../index.css';

let Gallery = (props) => {

  let photos = props.data.map((c,i) => {
    return <Photo url={`https://farm${c.farm}.staticflickr.com/${c.server}/${c.id}_${c.secret}.jpg`} key={i}/>
  })

  return(
    <div className='photo-container'>
      <h2>Results</h2>
      <ul>
        {
          photos
        }
      </ul>
    </div>
  )
}


export default Gallery;
