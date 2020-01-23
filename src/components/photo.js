import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Info from './info';

export default function POD ({date}) {
  const [photo, setPhoto] = useState([]);

  var today = new Date();
  var todayy = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
  const [calDate, setDate] = useState(todayy);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=HDQ2BExMXHghzFIk2iemzrEraAAtwQnUbUxuBeKq&date=${calDate}`)
    .then(response => {
      // console.log(response.data);
      setPhoto(response.data);
    })
    .catch(error => {
      console.log('Something went wrong!', error);
    })
  }, [calDate]);

  const changeDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <div className="calendar">
        <form>
          <label for="date">Date here</label>
          <input type="date" id="date" type="date" onChange={changeDate} value={date} />
        </form>


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