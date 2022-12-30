
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import { StyledButton } from './Components/StyledButton';
// import RotateItem from './Components/RotateAnimation';
// import Wasp from './Components/AnimateSprite/animSprite';
// import { useCanvas } from  './Components/CanvasHeart/Hearts';
import LoadIcons from './Components/LoadingIcon/LoadIcon';
import ReactLoading from "react-loading";
import Splashr from 'splashr';
import SplashScreen from './Components/SplashScreen/Splashscreen';


function App() {
  return (
    <SplashScreen/>
  );
}

export default App;
  
     
    


 

  // // CanvasHeart
  // const [coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight] = useCanvas();

  // const handleCanvasClick=(e)=> {
  //   // on each click, get the moust location
  //   const currentCoord = { x:e.clientX, y:e.clientY };
  //   // add the newest moust location to an array in state
  //   setCoordinates([...coordinates, currentCoord]);
  // };

  // const handleClearCanvas=(e)=> {
  //   setCoordinates([]);
  // };

  // return (
  // <main className="App-main" >
  //     <canvas/>
  //   </main>
  // );



