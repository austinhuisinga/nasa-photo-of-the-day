import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function POD () {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      console.log(response.data);
      setPhoto(response.data);
    })
    .catch(error => {
      console.log('Something went wrong!', error);
    })
  }, [])

  return (
    <div>
      <h1>Test</h1>
      <h2>{photo.title}</h2>
      <h4>{photo.date}</h4>
      <p>{photo.explanation}</p>
      <h4>{photo.copyright}</h4>
      <img src={photo.hdurl} alt='NASA Picture of the Day' />
    </div>
    
  )
}