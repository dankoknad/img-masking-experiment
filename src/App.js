import React from 'react';
import './App.css';

function MaskedImage({path, width, height}) { 
   return (
      <svg width={width} height={height} x="0px" y="0px" viewBox="0 0 1920 1080">
        <g>
          <defs>
            <polygon id="mask" points="974.66,0 960,20 945.34,0 0,0 0,1080 1920,1080 1920,0"/>
          </defs>
          <clipPath id="clipPath">
            <use xlinkHref="#mask" />
          </clipPath>
            <image width={width} height={height} clipPath="url(#clipPath)"  xlinkHref={path} ></image>
        </g>
      </svg>
   )
}

function App() {
  return (
     <div>
        <MaskedImage width="1920px" height="1080px" path="http://media.marche-int.com/image/upload/q_60/karma_test/he29f9bxydz33tdm3bx5.jpg" />
        <MaskedImage width="1920px" height="1080px" path="http://media.marche-int.com/image/upload/q_60/karma_test/jn2lifsk9clqqcp4f1w1.png" />
     </div>
    )
}


export default App;
