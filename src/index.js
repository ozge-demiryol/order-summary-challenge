import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css';
import App from './App';
import image from './images/pattern-background-desktop.svg';

ReactDOM.render(
    <div style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", width: ""}}>
    <App />
    </div>,
  document.getElementById('root')
);


