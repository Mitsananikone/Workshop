import { useState, useEffect, useRef } from 'react';

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const SCALE = 1;
const WIDTH = 32;
const HEIGHT = 32;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;
const CYCLE_LOOP = [0, 1, 0, 2];
const FACING_DOWN = 0;
const FACING_UP = 3;
const FACING_LEFT = 1;
const FACING_RIGHT = 2;
const FRAME_LIMIT = 12;
const MOVEMENT_SPEED = 1;

let keyPresses = {};
let currentDirection = FACING_DOWN;
let currentLoopIndex = 0;
let frameCount = 0;
let positionX = 0;
let positionY = 0;
let img = new Image();

export function loadImage() {
    img.src = './player.png';
    img.onload = function() {
      window.requestAnimationFrame(gameLoop);
    };
  }

export function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
                  frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                  canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
  }

  
loadImage();

export function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    let hasMoved = false;
  
    if (keyPresses.w) {
      moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
      hasMoved = true;
    } else if (keyPresses.s) {
      moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
      hasMoved = true;
    }
  
    if (keyPresses.a) {
      moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
      hasMoved = true;
    } else if (keyPresses.d) {
      moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
      hasMoved = true;
    }
  
    if (hasMoved) {
      frameCount++;
      if (frameCount >= FRAME_LIMIT) {
        frameCount = 0;
        currentLoopIndex++;
        if (currentLoopIndex >= CYCLE_LOOP.length) {
          currentLoopIndex = 0;
        }
      }
    }
  
    if (!hasMoved) {
      currentLoopIndex = 0;
    }
  
    drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);
    window.requestAnimationFrame(gameLoop);
  }

  function moveCharacter(deltaX, deltaY, direction) {
    if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
      positionX += deltaX;
    }
    if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
      positionY += deltaY;
    }
    currentDirection = direction;
  }