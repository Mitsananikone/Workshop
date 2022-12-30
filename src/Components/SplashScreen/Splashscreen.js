import './Splashscreen.css';
import React from 'react';
import Splashr from 'splashr';

import './Splashscreen.css';

const splash = <div class="splash-screen">
    <img src={require("./DogIcon.png")} alt ="dogo" />
</div>;

export default function SplashScreen() {
  return (
    <Splashr splash={splash} transitionTime={3000}>
      <div className="App">
        <h1>👋 Hello 👋</h1>
        <h2>Welcome to my app.</h2>
      </div>
    </Splashr>
  );
}

