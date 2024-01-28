import './App.css';
import React from 'react';
import { useState, useEffect, useAnimate  } from 'react';



function App() {
  const [input,setInput] = useState("");
  const [option, setOption] = useState("")
  function handleInput(event){
    setInput(event.target.value);
  }
  const handleChange = (e) => {
    setOption(e.target.value);
    console.log(option)
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className='input-box-div' >
          <input 
          placeholder="Give me the Prompt!!!!" 
          className='input-box'
          onChange={handleInput}
          value={input}/>
          <label htmlFor="dropdown"></label>
          <select id="dropdown" className='dropdown' value={option} onChange={handleChange}>
            <option value=".obj">.obj</option>
            <option value="iframe">iframe</option>
            <option value=".stl">.stl</option>
          </select>
          <button className='generate' >Generate</button>
        </div>
      </header>
    </div>
  );
}

export default App;
