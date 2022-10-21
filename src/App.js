import './App.css';
import React, { useRef, useEffect } from "react";
import before from './assets/images/Artboard-1-4-12.jpeg'
import after from './assets/images/Artboard-Copy-1-12.jpeg'





function App() {

  const ref = useRef(null);

  useEffect(() => {
    // 👇️ use a ref (best)
    const el2 = ref.current;
    console.log(el2);

    // 👇️ use document.querySelector()
    // should only be used when you can't set a ref prop on the element
    // (you don't have access to the element)
    //const el = document.querySelector('#container');
    const container = document.querySelector('.container');

    document.querySelector('.slider').addEventListener('input', (e) => {
      container.style.setProperty('--position', `${e.target.value}%`);
 })

  }, []);

  return (
    <main>
        <div className="container">
            <div className="image-container">
                <img className="image-before slider-image" src={before} />
                <img className="image-after slider-image" src={after} />
            </div>
            <input type="range" min="0" max="100" value="50" className="slider" aria-label="slider percentage"/> 
            <div className="slider-line"></div>
            <div className="slider-button" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
            </div>
        </div>
    </main>
  );
}

export default App;
