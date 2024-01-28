import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import bag from "./bag.avif"
// import STLViewerComponent from './Stlviewer';
import {StlViewer} from "react-stl-viewer";
import base from './Base.stl'


function Content( {isSubmit,setIsSubmit , url , setUrl}) {
  const [base64Data,setData] = useState("")
  const [input,setInput] = useState("");
  const [option, setOption] = useState("")

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get_obj_file")
      .then(response => response.json())
      .then(data => {
        setData(data.file)
        const binaryData = atob(base64Data)
      })
      .catch((error) => console.log(error));
  }, []);

  function base64ToBlob(base64, mime) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], {type: mime});
}

  const blob = base64ToBlob(base64Data, 'application/octet-stream');
  function download(blob, filename) {
    setUrl(window.URL.createObjectURL(blob));
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}
  

  function handleInput(event){
    setInput(event.target.value)
    console.log(input.prompt)
  }
  const handleChange = (e) => {
    setOption(e.target.value);
  };

  function handleSubmit(event){
    event.preventDefault()
    setIsSubmit(true);
    if (isSubmit === true){
      fetch('http://api.morphie.design/', {
  method: 'POST', // Use the POST method
  headers: {
    'Content-Type': 'application/json', // Set the content type to JSON
  },
  body: JSON.stringify(`prompt: ${input}`), // Convert the data to JSON and send it as the request body
})
  .then((response) => response.json())
  .then((data) => {
    // Handle the response from the API
    console.log(data);
  })
  .catch((error) => {
    // Handle errors here
    console.error(error);
  });
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='all'>
        
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
          </form>
          <button className='generate' onClick={() =>setIsSubmit(true)}>Generate</button>
        </div>
        <button onClick={() =>download(blob, 'file.obj')} className='download'> download</button>
        </div>
      </header>
    </div>
  );
}

export default Content;
