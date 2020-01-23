import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Info from './info';

export default function POD (props) {
  const [photo, setPhoto] = useState([]);
  const [date, setDate] = useState([]);
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=AYJud2VBhakaejBXXGKVgAhQ8SHAZaKUHfOLlX28&date=${date}`)
    .then(response => {
      // console.log(response.data);
      setPhoto(response.data);
    })
    .catch(error => {
      console.log('Something went wrong!', error);
    })
  })

  return (
    <div>
      <div className="calendar">
        <input type="date" date={date}>

        </input>

      </div>
      <h1>NASA Photo of the Day</h1>
      <img src={photo.hdurl} alt='NASA Pic of the Day' />
      <Info 
        title={photo.title}
        date={photo.date}
        explanation={photo.explanation}
        copyright={photo.copyright}
      />
    </div>
    
  )
}
// add input form to return (they have calendars) use onchange handler to set date to target value

//value = {date} on input form
// make anohter useState to change date