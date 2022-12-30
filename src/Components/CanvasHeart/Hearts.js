
import { useState, useEffect, useRef } from 'react';




export default function Hearts() {
// Path2D for a Heart SVG
const heartSVG = "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"
const SVG_PATH = new Path2D(heartSVG);

// Scaling Constants for Canvas
const SCALE = 0.2;
const OFFSET = 80;
 const canvasWidth = window.innerWidth * .5;
 const canvasHeight = window.innerHeight * .5;

 function draw(ctx, location){
    console.log("attempting to draw")
    ctx.fillStyle = 'red';
    ctx.shadowColor = 'blue';
    ctx.shadowBlur = 15;
    ctx.save();
    ctx.scale(SCALE, SCALE);
    ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
    ctx.rotate(225 * Math.PI / 180);
    ctx.fill(SVG_PATH);
    // .restore(): Canvas 2D API restores the most recently saved canvas state
    ctx.restore();  
  };


   function useCanvas(){
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);

    useEffect(()=>{
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect( 0,0, canvasWidth, canvasHeight );

        // draw all coordinates held in state
        coordinates.forEach((coordinate)=>{draw(ctx, coordinate)});
        console.log('coordinates: ' + JSON.stringify(coordinates))
    });

    return [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ];
}

}


//-------------------------------------------------------------------------

// APP.js
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