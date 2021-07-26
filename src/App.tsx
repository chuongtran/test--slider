import React, { useState } from 'react';
import './App.css';
import Slider, { SlideProps } from './Components/Slider/Slider';

const slides: SlideProps[] = [
  {
    content: <img src="/placeholder.png" alt="placeholder" />,
  },
  {
    content: (
      <video controls autoPlay style={{ height: 300 }}>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
    )
  },
  {
    content: (
      <>
        <h1 className="text-3xl my-4">Slide title</h1>
        <p className="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </>
    )
  }
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="App">
      <Slider slides={slides} activeIndex={activeIndex} onChange={setActiveIndex} />
      <div className="container mx-auto">
        Change to slide
        <div className="mb-8">
          <button className="text-white ml-2 mr-2 rounded w-9 h-9 bg-blue-500" onClick={() => setActiveIndex(0)}>1</button>
          <button className="text-white ml-2 mr-2 rounded w-9 h-9 bg-blue-500" onClick={() => setActiveIndex(1)}>2</button>
          <button className="text-white ml-2 mr-2 rounded w-9 h-9 bg-blue-500" onClick={() => setActiveIndex(2)}>3</button>
        </div>
        <div>
          <button disabled={activeIndex === 0} className="text-white ml-2 mr-2 rounded w-24 h-9 bg-blue-500" onClick={() => setActiveIndex(activeIndex - 1)}>Prev slide</button>
          <button disabled={activeIndex === slides.length - 1} className="text-white ml-2 mr-2 rounded w-24 h-9 bg-blue-500" onClick={() => setActiveIndex(activeIndex + 1)}>Next slide</button>
        </div>
      </div>
    </div>
  );
}

export default App;
