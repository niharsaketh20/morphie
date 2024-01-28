import React from "react";

import {StlViewer} from "react-stl-viewer";
import base from './Base.stl'

export default function Back({isSubmit, setIsSubmit}){
    function handleCha(event) {
        setIsSubmit(false);
    }
    const style = {
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
    }
return(
    <div className="Gen">
        <div className='rend'>
             <StlViewer
            style={style}
            orbitControls
            shadows
            url={base}
            />
        </div>
        <button className="generates" onClick={handleCha}>Go Back Again</button>
    </div>
)
}