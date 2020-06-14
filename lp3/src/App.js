import React from 'react';
import './App.css';
import Card from './components/card';

const App =(props)=>{

  //render()
  //{
    return (
      <div className="App  light-green darken-4">
        <div className="row">
        <div className="container section  blue-grey-text text-lighten-4">
          <h3>Date & Time</h3>
        </div>
        </div>
  
        <div className="row">
          <div className="container valign">
            <Card url="http://localhost:5000/api/date/" />
            <Card url="http://localhost:5000/api/time/" />  
          </div>  
        </div>      
      </div>
    );
  //}
  
}

export default App;
