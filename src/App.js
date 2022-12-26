
import './App.css';
import React from 'react';
// import { StyledButton } from './Components/StyledButton';
// import RotateItem from './Components/RotateAnimation';
// import Wasp from './Components/AnimateSprite/animSprite';
import { useCanvas } from  './Components/Canvas/Canvas';
function App() {

  const [coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight] = useCanvas();

  const handleCanvasClick=(e)=> {
    // on each click, get the moust location
    const currentCoord = { x:e.clientX, y:e.clientY };
    // add the newest moust location to an array in state
    setCoordinates([...coordinates, currentCoord]);
  };

  const handleClearCanvas=(e)=> {
    setCoordinates([]);
  };


  return (
  <main className="App-main" >
      <canvas 
        className="App-canvas"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick} />

      <div className="button" >
        <button onClick={handleClearCanvas} > CLEAR </button>
      </div>
    </main>
  );

    

}

export default App;
