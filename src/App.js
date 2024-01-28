import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import bag from "./bag.avif"


function App() {
  const [input,setInput] = useState("");
  const [option, setOption] = useState("")
  const [isSubmit,setIsSubmit] = useState(false)
  const [information,setInformation] = useState("");

  useEffect(() => {
    fetch("lessoooooooo", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setInformation();
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleInput(event){
    setInput(event.target.value);
    console.log(input)
  }
  const handleChange = (e) => {
    setOption(e.target.value);
    console.log(option)
  };

  function handleSubmit(event){
    event.preventDefault()
    setIsSubmit(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='all'>

        <img className= "bag" src={bag} alt='good job'/>
          <div className='name-div'>
          <h1 className='name'>MORPHIE</h1>
          </div>
        <div className='input-box-div' >
          <form onSubmit={handleSubmit}>
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
          </form>
          <button className='generate' >Generate</button>
          {isSubmit ? information: <p></p>}
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
