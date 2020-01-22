import React from "react";
import "./App.css";
import Photo from './components/photo';

function App() {
  return (
    <div className="App">
      <Photo />
      <p>Testing</p>
    </div>
  );
}

export default App;

// Make sure to add empty dependency array when fetching from NASA API. Christina specifically mentioned tons of people mess that up.
// Install axios as a dependency (npm install axios)
// Done and done.