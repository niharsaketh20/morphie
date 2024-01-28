import './App.css';
import React from 'react';
import Content from './Content.js'
import { useState } from 'react';
import Back from './Back.js';


function App() {
  const [url,setUrl] = useState('')
  const [isSubmit,setIsSubmit] = useState(false)
  return (
    <div className="App">

      <header className="App-header">  
      {isSubmit ? <Back isSubmit={isSubmit} setIsSubmit={setIsSubmit} url = {url} setUrl = {setUrl}/>:<Content isSubmit={isSubmit} setIsSubmit={setIsSubmit} url = {url} setUrl = {setUrl}/>}  
      </header>
    </div>
  );
}

export default App;
