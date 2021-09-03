import React from "react";
import Card from "./Components/Card";
import image from './images/illustration-hero.svg'
import icon from './images/icon-music.svg'

function App() {
  return (
    <div>
     <Card
     image={image}
     title="Order Summary"
     text="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
     icon={icon}
     link="Change"
     fee=" $59,99/year"
     />
    </div>
  );
}

export default App;
